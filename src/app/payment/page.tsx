"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavigationHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 flex flex-col bg-transparent">
      <div className="flex justify-between items-center">
        <div className="relative h-6 sm:h-8 w-24 sm:w-32">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <a
          href="#"
          className="text-black font-semibold text-sm hover:underline"
        >
          Sign Out
        </a>
      </div>
      <div className="border-b border-gray-400 w-full mt-4" />
    </header>
  );
};

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Spanish", "French", "German"];

  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-gray-100 py-8 text-gray-600 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-4 text-black">Questions? Contact us.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-4">
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
        </div>
        <div className="relative w-max">
          <select
            className="w-full bg-white border border-gray-300 rounded-sm py-2 px-4 pr-8 text-black appearance-none"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default function PaymentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    title: 'Standard with ads',
    price: '$7.99/month'
  });

  // Get selected plan from localStorage
  useState(() => {
    const savedPlan = localStorage.getItem('selectedPlan');
    if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan));
    }
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (
      !formData.cardNumber ||
      formData.cardNumber.replace(/\s/g, "").length < 13
    ) {
      newErrors.cardNumber = "Please enter a valid card number";
    }

    if (!formData.expiry || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Please enter a valid expiry date (MM/YY)";
    }

    if (!formData.cvv || formData.cvv.length < 3 || formData.cvv.length > 4) {
      newErrors.cvv = "Please enter a valid CVV (3-4 digits)";
    }

    if (!formData.nameOnCard.trim()) {
      newErrors.nameOnCard = "Please enter the name on card";
    }

    if (!formData.zipCode || formData.zipCode.length < 5) {
      newErrors.zipCode = "Please enter a valid ZIP code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\D/g, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;

    if (field === "cardNumber") {
      formattedValue = formatCardNumber(value);
    } else if (field === "expiry") {
      formattedValue = formatExpiry(value);
    } else if (field === "cvv") {
      formattedValue = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleStartMembership = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    router.push("/");
  };

  return (
    <div className="relative min-h-screen bg-white text-black">
      <NavigationHeader />
      <main className="pt-32 pb-32 px-4">
        <div className="max-w-md mx-auto">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline inline-block mb-4"
          >
            &lt; Change payment method
          </a>

          <div className="mb-6">
            <div className="text-lg text-gray-600">Step 4 of 4</div>
            <h1 className="text-3xl font-extrabold mt-3 text-gray-800">
              Set up your credit or debit card
            </h1>
          </div>

          <div className="flex items-center space-x-2 pt-1 pb-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.00024 4C4.00024 1.79086 5.79111 0 8.00024 0C10.2094 0 12.0002 1.79086 12.0002 4V5H13.0002C13.5525 5 14.0002 5.44772 14.0002 6V12.7192C14.0002 13.1781 13.6879 13.573 13.2348 13.6458C12.3164 13.7934 10.5714 14 8.00024 14C5.42905 14 3.68413 13.7934 2.76569 13.6458C2.31263 13.573 2.00024 13.1781 2.00024 12.7192V6C2.00024 5.44772 2.44796 5 3.00024 5H4.00024V4ZM10.5002 4V5H5.50024V4C5.50024 2.61929 6.61953 1.5 8.00024 1.5C9.38096 1.5 10.5002 2.61929 10.5002 4ZM3.50024 6.5V12.2375C4.43051 12.3618 5.9304 12.5 8.00024 12.5C10.0701 12.5 11.57 12.3618 12.5002 12.2375V6.5H3.50024ZM7.25 8V11H8.75V8H7.25Z" fill="currentColor"></path>
            </svg>
            <p className="text-sm text-gray-600">End-to-end encrypted</p>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
              alt="MasterCard"
              className="h-6"
            />
            <img
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
              alt="Amex"
              className="h-6"
            />
            <img
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DISCOVER.png"
              alt="Discover"
              className="h-6"
            />
          </div>

          <form onSubmit={handleStartMembership} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) =>
                  handleInputChange("cardNumber", e.target.value)
                }
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.cardNumber
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-red-500"
                }`}
                maxLength={19}
                required
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={(e) => handleInputChange("expiry", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.expiry
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-red-500"
                  }`}
                  maxLength={5}
                  required
                />
                {errors.expiry && (
                  <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.cvv
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-red-500"
                  }`}
                  maxLength={4}
                  required
                />
                {errors.cvv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Name on card"
                value={formData.nameOnCard}
                onChange={(e) =>
                  handleInputChange("nameOnCard", e.target.value)
                }
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.nameOnCard
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-red-500"
                }`}
                required
              />
              {errors.nameOnCard && (
                <p className="text-red-500 text-xs mt-1">{errors.nameOnCard}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="ZIP code"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.zipCode
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-red-500"
                }`}
                maxLength={10}
                required
              />
              {errors.zipCode && (
                <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
              )}
            </div>
          </form>

          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{selectedPlan.price}</span>
                <div className="text-sm text-gray-600">{selectedPlan.title}</div>
              </div>
              <button 
                onClick={() => router.push('/plan-selection')}
                className="text-blue-600 hover:underline text-sm bg-transparent border-none cursor-pointer"
              >
                Change
              </button>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500">
            <p className=" text-gray-500">
              By clicking "Start Membership", you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Use
              </a>
              ,{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Statement
              </a>
              , and that you are over 18. Netflix will automatically continue
              your membership and charge the membership fee to your payment
              method until you cancel. You may cancel at any time to avoid
              future charges.
            </p>
          </div>

          <button
            type="submit"
            onClick={handleStartMembership}
            disabled={isSubmitting}
            className={`w-full py-4 text-white rounded-md text-xl font-medium transition-colors mt-6 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {isSubmitting ? "Processing..." : "Start Membership"}
          </button>
          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
