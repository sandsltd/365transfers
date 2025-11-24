"use client";

import { useBooking } from "@/contexts/BookingContext";
import BookingModal from "./BookingModal";

export default function BookingModalWrapper() {
  const { isBookingModalOpen, closeBookingModal } = useBooking();

  return (
    <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
  );
}

