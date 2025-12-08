"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useBooking } from "@/contexts/BookingContext";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { openBookingModal } = useBooking();

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      {/* Mobile/Tablet Action Buttons - Above Header */}
      <div className="lg:hidden bg-primary-dark py-2">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex gap-2">
            <a
              href="tel:01785335563"
              className="bg-accent text-primary font-semibold px-3 sm:px-4 py-2.5 rounded-lg hover:bg-accent-dark transition-colors duration-200 text-xs sm:text-sm flex-1 text-center block"
            >
              <span className="hidden sm:inline">Call Now: </span>
              <span className="sm:hidden">📞 </span>
              01785 335563
            </a>
            <button
              onClick={openBookingModal}
              className="bg-accent text-primary font-semibold px-3 sm:px-4 py-2.5 rounded-lg hover:bg-accent-dark transition-colors duration-200 text-xs sm:text-sm flex-1 text-center block"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <Image
              src="/logo/365logo.png"
              alt="365 Transfers Logo"
              width={50}
              height={50}
              className="h-10 sm:h-11 md:h-12 w-auto transition-transform group-hover:scale-105"
              priority
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold">365 Transfers</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link href="/" className="hover:text-accent transition-colors px-3 xl:px-4 py-2 rounded-lg hover:bg-white/5">
              Home
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/about" className="hover:text-accent transition-colors px-3 xl:px-4 py-2 rounded-lg hover:bg-white/5">
              About
            </Link>
            <span className="text-white/30">|</span>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="hover:text-accent transition-colors flex items-center space-x-1 px-3 xl:px-4 py-2 rounded-lg hover:bg-white/5">
                <span>Our Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
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
                <div className="absolute top-full left-0 pt-2 w-64 xl:w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-lg shadow-2xl py-2 border border-gray-200 max-h-[calc(100vh-120px)] overflow-y-auto">
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
            <Link href="/contact" className="hover:text-accent transition-colors px-3 xl:px-4 py-2 rounded-lg hover:bg-white/5">
              Contact
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
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
              <span className="font-semibold text-sm sm:text-base">Menu</span>
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href="tel:01785335563"
              className="bg-accent text-primary font-semibold px-4 xl:px-6 py-2.5 rounded-lg hover:bg-accent-dark transition-all duration-200 text-sm xl:text-base hover:shadow-lg transform hover:scale-105"
            >
              Call Now: 01785 335563
            </a>
            <button
              onClick={openBookingModal}
              className="bg-accent text-primary font-semibold px-4 xl:px-6 py-2.5 rounded-lg hover:bg-accent-dark transition-all duration-200 text-sm xl:text-base hover:shadow-lg transform hover:scale-105"
            >
              Book Online
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <Link
                href="/"
                className="hover:text-accent transition-colors text-base sm:text-lg py-1 px-2 rounded-lg hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-accent transition-colors text-base sm:text-lg py-1 px-2 rounded-lg hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full hover:text-accent transition-colors text-base sm:text-lg py-1 px-2 rounded-lg hover:bg-white/5"
                >
                  <span>Our Services</span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
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
                  <div className="mt-2 ml-4 sm:ml-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/local-national"
                      className="block py-2 px-2 text-sm sm:text-base hover:text-accent transition-colors border-b border-white/10 last:border-b-0 rounded hover:bg-white/5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Local & National
                    </Link>
                    <Link
                      href="/airport-transfers"
                      className="block py-2 px-2 text-sm sm:text-base hover:text-accent transition-colors border-b border-white/10 last:border-b-0 rounded hover:bg-white/5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Airport Transfers
                    </Link>
                    <Link
                      href="/days-out"
                      className="block py-2 px-2 text-sm sm:text-base hover:text-accent transition-colors border-b border-white/10 last:border-b-0 rounded hover:bg-white/5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Days Out
                    </Link>
                    <Link
                      href="/events-tours"
                      className="block py-2 px-2 text-sm sm:text-base hover:text-accent transition-colors border-b border-white/10 last:border-b-0 rounded hover:bg-white/5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Events & Tours
                    </Link>
                    <Link
                      href="/school-contracts"
                      className="block py-2 px-2 text-sm sm:text-base hover:text-accent transition-colors border-b border-white/10 last:border-b-0 rounded hover:bg-white/5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      School Contracts
                    </Link>
                    <Link
                      href="/account-work"
                      className="block py-2 px-2 text-sm sm:text-base hover:text-accent transition-colors border-b border-white/10 last:border-b-0 rounded hover:bg-white/5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Account Work
                    </Link>
                    <Link
                      href="/complex-journey"
                      className="block py-2 px-2 text-sm sm:text-base hover:text-accent transition-colors border-b border-white/10 last:border-b-0 rounded hover:bg-white/5"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      Complex Journey
                    </Link>
                    <Link
                      href="/every-occasion"
                      className="block py-2 px-2 text-sm sm:text-base hover:text-accent transition-colors border-b border-white/10 last:border-b-0 rounded hover:bg-white/5"
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
                className="hover:text-accent transition-colors text-base sm:text-lg py-1 px-2 rounded-lg hover:bg-white/5"
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

