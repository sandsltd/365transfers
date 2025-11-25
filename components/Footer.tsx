import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold mb-3 text-accent">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="tel:01785335563"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>01785 335563</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576144679794"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-accent">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-accent transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-accent transition-colors"
              >
                Book a Taxi
              </Link>
              <Link
                href="/blog"
                className="text-sm hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-sm hover:text-accent transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm hover:text-accent transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-accent">About</h3>
            <p className="text-sm text-gray-300">
              Professional taxi and transfer services serving Stone, Staffordshire
              and surrounding areas. Available 24/7, 365 days a year.
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} 365 Transfers. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Website by</span>
              <a
                href="https://www.saunders-simmons.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-accent transition-colors"
              >
                <Image
                  src="/logo/sandslogo.png"
                  alt="Saunders Simmons Ltd"
                  width={100}
                  height={30}
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

