"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { DictKey, Locale } from "@/lib/i18n/dictionary";
import { dictionary } from "@/lib/i18n/dictionary";

type ThemeMode = "light" | "dark";

type SuiteContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  t: (key: DictKey) => string;
};

const SuiteContext = createContext<SuiteContextValue | null>(null);

const STORAGE_LOCALE = "sps-locale";
const STORAGE_THEME = "sps-theme";

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_LOCALE);
  return v === "es" || v === "en" ? v : null;
}

function readStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_THEME);
  return v === "light" || v === "dark" ? v : null;
}

export function SuiteProviders({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const l = readStoredLocale();
    const t = readStoredTheme();
    if (l) setLocaleState(l);
    if (t) {
      setThemeState(t);
    } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark");
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_LOCALE, locale);
    window.localStorage.setItem(STORAGE_THEME, theme);
  }, [locale, theme, ready]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const setTheme = useCallback((m: ThemeMode) => setThemeState(m), []);

  const t = useCallback(
    (key: DictKey) => dictionary[locale][key] ?? dictionary.en[key],
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, theme, setTheme, t }),
    [locale, setLocale, theme, setTheme, t],
  );

  return (
    <SuiteContext.Provider value={value}>{children}</SuiteContext.Provider>
  );
}

export function useSuite() {
  const ctx = useContext(SuiteContext);
  if (!ctx) throw new Error("useSuite must be used within SuiteProviders");
  return ctx;
}
