"use client";

import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    contactNumber: "",
    email: "",
    pickupLocation: "",
    destination: "",
    pickupDate: "",
    pickupTime: "",
    pickupTimeAmPm: "AM",
    passengers: "",
    vehicleType: "",
    specialRequirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Convert 12-hour time to 24-hour format for API
    const convertTo24Hour = (time12: string, amPm: string): string => {
      if (!time12) return "";
      const [hours, minutes] = time12.split(":");
      let hour24 = parseInt(hours);
      if (amPm === "PM" && hour24 !== 12) {
        hour24 += 12;
      } else if (amPm === "AM" && hour24 === 12) {
        hour24 = 0;
      }
      return `${hour24.toString().padStart(2, "0")}:${minutes}`;
    };

    const submissionData = {
      ...formData,
      pickupTime: convertTo24Hour(formData.pickupTime, formData.pickupTimeAmPm),
    };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "success",
        });
        // Reset form
        setFormData({
          name: "",
          businessName: "",
          contactNumber: "",
          email: "",
          pickupLocation: "",
          destination: "",
          pickupDate: "",
          pickupTime: "",
          pickupTimeAmPm: "AM",
          passengers: "",
          vehicleType: "",
          specialRequirements: "",
        });
        // Don't auto-close - let user read the message
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary text-white p-6 rounded-t-lg flex justify-between items-center sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-bold">Booking Request</h2>
            <p className="text-sm text-gray-200 mt-1">
              Please note: This is a request, not a confirmed booking. We'll
              contact you to confirm availability.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-accent transition-colors p-2"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Status Messages */}
          {submitStatus.type === "success" && (
            <div className="bg-green-50 text-green-800 border-2 border-green-300 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Thank You!</h3>
                  <p className="mb-3">
                    Your booking request has been submitted successfully. Please note that this is a <strong>request, not a confirmed booking</strong>.
                  </p>
                  <p className="mb-3">
                    We will contact you within 24 hours to confirm availability and finalise your booking.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mt-4">
                    <p className="text-sm">
                      <strong>⚠️ Urgent Booking?</strong> If you need a taxi within the next <strong>24 hours</strong>, please call us directly on{" "}
                      <a
                        href="tel:01785335563"
                        className="text-primary font-semibold hover:underline"
                      >
                        01785 335563
                      </a>{" "}
                      to ensure we can assist you promptly.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          {submitStatus.type === "error" && (
            <div className="bg-red-50 text-red-800 border border-red-200 rounded-lg p-4 mb-6">
              {submitStatus.message}
            </div>
          )}

          {/* Form Fields - Hide when successful */}
          {submitStatus.type !== "success" && (
            <>
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Journey Details */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Journey Details
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="pickupLocation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Pick Up Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  required
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="e.g., Stone, Staffordshire"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Destination <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g., Manchester Airport"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="pickupDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pick Up Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    required
                    value={formData.pickupDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pickupTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pick Up Time <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="time"
                      id="pickupTime"
                      name="pickupTime"
                      required
                      value={formData.pickupTime}
                      onChange={handleChange}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <select
                      id="pickupTimeAmPm"
                      name="pickupTimeAmPm"
                      value={formData.pickupTimeAmPm}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle & Passenger Details */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Vehicle & Passenger Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="passengers"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Number of Passengers <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="passengers"
                  name="passengers"
                  required
                  min="1"
                  max="16"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="vehicleType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Preferred Vehicle Type
                </label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                >
                  <option value="">Select vehicle type</option>
                  <option value="saloon">Saloon</option>
                  <option value="estate">Estate</option>
                  <option value="executive">Executive</option>
                  <option value="6-seater">6 Seater</option>
                  <option value="7-seater">7 Seater</option>
                  <option value="8-seater">8 Seater</option>
                  <option value="12-seater">12 Seater</option>
                  <option value="16-seater">16 Seater</option>
                  <option value="wheelchair-accessible">
                    Wheelchair Accessible
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label
              htmlFor="specialRequirements"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Special Requirements or Additional Information
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              rows={4}
              value={formData.specialRequirements}
              onChange={handleChange}
              placeholder="Any special requirements, luggage details, or additional information..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> This is a booking request, not a
              confirmed booking. We will contact you within 24 hours to confirm
              availability and finalise your booking. For urgent bookings
              within 24 hours, please call us directly on{" "}
              <a
                href="tel:01785335563"
                className="text-primary font-semibold hover:underline"
              >
                01785 335563
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </button>
          </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

