"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID } from "@/lib/site-config";

type AdSenseScriptProps = {
  clientId?: string;
};

export function AdSenseScript({
  clientId = ADSENSE_CLIENT_ID,
}: AdSenseScriptProps) {
  if (!clientId || clientId.includes("XXXXXXXX")) {
    return null;
  }

  return (
    <Script
      id="adsense-init"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

type AdUnitProps = {
  slot: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdUnit({
  slot,
  format = "auto",
  className = "",
}: AdUnitProps) {
  const pushed = useRef(false);
  const clientId = ADSENSE_CLIENT_ID;
  const enabled = clientId && !clientId.includes("XXXXXXXX");

  useEffect(() => {
    if (!enabled || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* Ad blockers or missing script */
    }
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={{ display: "block" }}
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
