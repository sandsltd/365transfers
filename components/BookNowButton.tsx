"use client";

import { useBooking } from "@/contexts/BookingContext";

interface BookNowButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function BookNowButton({
  children,
  className = "",
  variant = "primary",
}: BookNowButtonProps) {
  const { openBookingModal } = useBooking();

  const baseClasses =
    variant === "primary"
      ? "btn-primary"
      : "btn-secondary";

  return (
    <button
      onClick={openBookingModal}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}

