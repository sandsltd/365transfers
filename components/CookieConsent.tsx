"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 shadow-lg z-50 border-t-2 border-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base">
              We use cookies to enhance your browsing experience and analyze site traffic. 
              By clicking "Accept", you consent to our use of cookies.{" "}
              <Link href="/cookie-policy" className="text-accent hover:underline font-semibold">
                Learn more
              </Link>
              {" or "}
              <Link href="/privacy-policy" className="text-accent hover:underline font-semibold">
                view our Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/cookie-policy"
              className="px-4 py-2 text-sm border border-white/30 rounded hover:bg-white/10 transition-colors"
            >
              Cookie Policy
            </Link>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm bg-accent text-primary rounded font-semibold hover:bg-accent/90 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

