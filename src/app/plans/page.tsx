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

const CheckCircleIcon = () => (
  <svg
    className="h-10 w-10 text-red-600"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8.59l-9 9z" />
  </svg>
);

export default function PlansPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/plan-selection');
  };

  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col items-center justify-center">
      <NavigationHeader />
      <div className="border-b border-grey-800 w-full" />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mb-10">
        <div className="max-w-md mx-auto">
          <div className="mb-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-600"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM21.7071 30.7071L33.7071 18.7071L32.2929 17.2929L21 28.5858L15.7071 23.2929L14.2929 24.7071L20.2929 30.7071L21 31.4142L21.7071 30.7071Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="text-black mb-2 text-left">Step 2 of 4</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
            Choose your plan
          </h1>
          <div className="space-y-4 mb-8 text-lg text-left">
            <div className="flex items-center">
              <span className="text-red-600 mr-4 text-2xl font-bold">✓</span>
              <span>No commitments, cancel anytime.</span>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-4 text-2xl font-bold">✓</span>
              <span>Everything on Netflix for one low price.</span>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-4 text-2xl font-bold">✓</span>
              <span>No ads and no extra fees. Ever.</span>
            </div>
          </div>
          <button 
            onClick={handleNext}
            className="w-full bg-red-600 text-white py-4 rounded-md text-xl font-medium hover:bg-red-700 transition-colors"
          >
            Next
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
