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

type Plan = {
  title: string;
  subtitle?: string;
  monthly: string;
  quality: string;
  resolution: string;
  spatialAudio?: string;
  supportedDevices: string;
  householdDevices: string;
  downloadDevices: string;
  ads: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    title: "Standard with ads",
    subtitle: "1080p",
    monthly: "$7.99",
    quality: "Good",
    resolution: "1080p (Full HD)",
    supportedDevices: "TV, computer, mobile phone, tablet",
    householdDevices: "2",
    downloadDevices: "2",
    ads: "Less than you might think",
  },
  {
    title: "Standard",
    subtitle: "1080p",
    monthly: "$17.99",
    quality: "Good",
    resolution: "1080p (Full HD)",
    supportedDevices: "TV, computer, mobile phone, tablet",
    householdDevices: "2",
    downloadDevices: "2",
    ads: "No ads",
  },
  {
    title: "Premium",
    subtitle: "4K + HDR",
    monthly: "$24.99",
    quality: "Best",
    resolution: "4K (Ultra HD) + HDR",
    spatialAudio: "Included",
    supportedDevices: "TV, computer, mobile phone, tablet",
    householdDevices: "4",
    downloadDevices: "6",
    ads: "No ads",
    featured: true,
  },
];

export default function PlansPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(0);

  const handleNext = () => {
    // Save selected plan to localStorage
    const selectedPlanData = {
      title: plans[selectedPlan].title,
      price: plans[selectedPlan].monthly
    };
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlanData));
    router.push("/payment");
  };

  return (
    <div className="relative min-h-screen bg-white text-black">
      <NavigationHeader />
      <main className="pt-32 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="text-lg text-black-100">Step 3 of 4</div>
            <h1 className="text-3xl font-extrabold mt-3 text-gray-800">
              Choose the plan that's right for you
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, index) => (
              <PlanCard 
                key={p.title} 
                plan={p} 
                isSelected={selectedPlan === index}
                onClick={() => setSelectedPlan(index)}
              />
            ))}
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div>
                The vast majority of our TV shows and movies are available on an
                ad-supported plan, but a small number aren't due to licensing
                restrictions.
                <span className="text-blue-600 underline ml-1">
                  Learn more about an ad-supported plan.
                </span>
              </div>
            </div>
          </div>
          <div className="text-gray-700 text-sm">
            <p className="text-gray-600 text-sm">
              If you select an ad-supported plan, you will be required to
              provide your date of birth for ads personalization and other
              purposes consistent with the Netflix Privacy Statement.
            </p>

            <p className="text-gray-600 text-sm">
              Full HD (1080p), Ultra HD (4K) and HDR availability subject to
              your internet service and device capabilities. Not all content is
              available in all resolutions.{" "}
              <a href="#" className="text-blue-400 hover:underline">
                See Terms of Use
              </a>{" "}
              for more details.
            </p>

            <p className="text-gray-600 text-sm">
              Only people who live with you may use your account. Add 1 extra
              member with Standard or up to 2 with Premium.{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Learn more.
              </a>{" "}
              Watch on 4 different devices at the same time with Premium and 2
              with Standard or Standard with ads.
            </p>

            <p className="text-gray-600 text-sm">
              Live events are included with any Netflix plan and contain ads.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleNext}
              className="w-full max-w-md py-4 bg-red-600 text-white rounded-md text-xl font-medium hover:bg-red-700 transition-colors"
              style={{ height: "64px" }}
            >
              Next
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500 space-y-2">
            <p>
              If you select an ad-supported plan, you will be required to
              provide your date of birth for ads personalization and other
              purposes consistent with the Netflix Privacy Statement.
            </p>
            <p>
              Only people who live with you may use your account. Add 1 extra
              member with Standard or up to 2 with Premium.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PlanCard({ plan, isSelected, onClick }: { plan: Plan; isSelected: boolean; onClick: () => void }) {
  return (
    <div
      className={`relative rounded-xl border cursor-pointer ${
        isSelected ? "border-red-600 shadow-lg" : "border-gray-200"
      } bg-white overflow-hidden`}
      onClick={onClick}
    >
      <div
        className={`px-6 py-5 ${plan.featured ? "bg-gradient-to-r from-blue-700 to-red-500 text-white" : "bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 text-white"}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">{plan.title}</div>
            {plan.subtitle && (
              <div className="text-xs opacity-90 mt-0.5">{plan.subtitle}</div>
            )}
          </div>
          <div className={`rounded-full w-7 h-7 flex items-center justify-center ${
            isSelected ? "bg-white/30" : "bg-white/20"
          }`}>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <div className="pb-4 border-b border-gray-200">
            <div className="text-sm text-gray-500">Monthly price</div>
            <div className="mt-2 text-2xl font-semibold">{plan.monthly}</div>
          </div>

          <div className="pb-4 border-b border-gray-200">
            <div className="text-sm text-gray-500">Video and sound quality</div>
            <div className="mt-1 text-sm">{plan.quality}</div>
          </div>

          <div className="pb-4 border-b border-gray-200">
            <div className="text-sm text-gray-500">Resolution</div>
            <div className="mt-1 text-sm">{plan.resolution}</div>
          </div>

          {plan.spatialAudio && (
            <div className="pb-4 border-b border-gray-200">
              <div className="text-sm text-gray-500">Spatial audio (immersive sound)</div>
              <div className="mt-1 text-sm">{plan.spatialAudio}</div>
            </div>
          )}

          <div className="pb-4 border-b border-gray-200">
            <div className="text-sm text-gray-500">Supported devices</div>
            <div className="mt-1 text-sm">{plan.supportedDevices}</div>
          </div>

          <div className="pb-4 border-b border-gray-200">
            <div className="text-sm text-gray-500">Devices your household can watch at the same time</div>
            <div className="mt-1 text-sm">{plan.householdDevices}</div>
          </div>

          <div className="pb-4 border-b border-gray-200">
            <div className="text-sm text-gray-500">Download devices</div>
            <div className="mt-1 text-sm">{plan.downloadDevices}</div>
          </div>

          <div className="pb-4">
            <div className="text-sm text-gray-500">Ads</div>
            <div className="mt-1 text-sm">{plan.ads}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
