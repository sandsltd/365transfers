"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/365logo.png"
              alt="365 Transfers Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
              priority
            />
            <span className="text-xl font-bold">365 Transfers</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="hover:text-accent transition-colors px-4 py-2">
              Home
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/about" className="hover:text-accent transition-colors px-4 py-2">
              About
            </Link>
            <span className="text-white/30">|</span>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="hover:text-accent transition-colors flex items-center space-x-1 px-4 py-2">
                <span>Our Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-xl py-2 border border-gray-200">
                  <Link
                    href="/local-national"
                    className="block px-4 py-3 text-primary hover:bg-accent hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setServicesOpen(false)}
                  >
                    Local & National
                  </Link>
                  <Link
                    href="/airport-transfers"
                    className="block px-4 py-3 text-primary hover:bg-accent hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setServicesOpen(false)}
                  >
                    Airport Transfers
                  </Link>
                  <Link
                    href="/days-out"
                    className="block px-4 py-3 text-primary hover:bg-accent hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setServicesOpen(false)}
                  >
                    Days Out
                  </Link>
                  <Link
                    href="/events-tours"
                    className="block px-4 py-3 text-primary hover:bg-accent hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setServicesOpen(false)}
                  >
                    Events & Tours
                  </Link>
                  <Link
                    href="/school-contracts"
                    className="block px-4 py-3 text-primary hover:bg-accent hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setServicesOpen(false)}
                  >
                    School Contracts
                  </Link>
                  <Link
                    href="/account-work"
                    className="block px-4 py-3 text-primary hover:bg-accent hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setServicesOpen(false)}
                  >
                    Account Work
                  </Link>
                  <Link
                    href="/complex-journey"
                    className="block px-4 py-3 text-primary hover:bg-accent hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setServicesOpen(false)}
                  >
                    Complex Journey
                  </Link>
                  <Link
                    href="/every-occasion"
                    className="block px-4 py-3 text-primary hover:bg-accent hover:text-primary transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setServicesOpen(false)}
                  >
                    Service for Every Occasion
                  </Link>
                  </div>
                </div>
              )}
            </div>
            <span className="text-white/30">|</span>
            <Link href="/contact" className="hover:text-accent transition-colors px-4 py-2">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <Link href="/contact" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          {/* Desktop Book Now Button */}
          <Link href="/contact" className="hidden md:block btn-primary text-sm">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full hover:text-accent transition-colors"
                >
                  <span>Our Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      href="/local-national"
                      className="block py-2 hover:text-accent transition-colors border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Local & National
                    </Link>
                    <Link
                      href="/airport-transfers"
                      className="block py-2 hover:text-accent transition-colors border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Airport Transfers
                    </Link>
                    <Link
                      href="/days-out"
                      className="block py-2 hover:text-accent transition-colors border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Days Out
                    </Link>
                    <Link
                      href="/events-tours"
                      className="block py-2 hover:text-accent transition-colors border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Events & Tours
                    </Link>
                    <Link
                      href="/school-contracts"
                      className="block py-2 hover:text-accent transition-colors border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      School Contracts
                    </Link>
                    <Link
                      href="/account-work"
                      className="block py-2 hover:text-accent transition-colors border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Account Work
                    </Link>
                    <Link
                      href="/complex-journey"
                      className="block py-2 hover:text-accent transition-colors border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Complex Journey
                    </Link>
                    <Link
                      href="/every-occasion"
                      className="block py-2 hover:text-accent transition-colors border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Service for Every Occasion
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

