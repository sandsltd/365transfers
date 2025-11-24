import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/airport-transfers" className="hover:text-accent transition-colors">
              Airport Transfers
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
          <Link href="/contact" className="btn-primary text-sm">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

