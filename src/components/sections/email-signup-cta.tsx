"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const EmailSignupCta = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full bg-black py-12 text-white border-t-8 border-[#222]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-normal leading-8 mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-[580px] mx-auto"
        >
          <div className="relative w-full sm:flex-1">
            <input
              id="email-cta-bottom"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block px-4 pb-2.5 pt-6 w-full h-[56px] text-white bg-[rgba(0,0,0,0.5)] rounded border border-[#333] appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-white peer"
              placeholder=" "
            />
            <label
              htmlFor="email-cta-bottom"
              className="absolute text-neutral-400 text-base duration-300 transform -translate-y-3.5 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5"
            >
              Email address
            </label>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-[#f40612] transition-colors text-white rounded text-2xl font-medium flex items-center justify-center h-[56px] px-6 w-full sm:w-auto whitespace-nowrap"
          >
            <span>Get Started</span>
            <ChevronRight className="ml-1 w-6 h-6 stroke-[2.5]" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSignupCta;