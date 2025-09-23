"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      className="relative flex h-auto min-h-[550px] items-center justify-center sm:min-h-[650px] lg:min-h-[720px] bg-black"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/US-en-20250915-TRIFECTA-perspective_1c6d11d5-ba33-4798-a4ed-2bc2b7165c7c_large-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center text-white">
        <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl sm:leading-tight">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="mt-4 text-lg sm:text-2xl">
          Starts at $7.99. Cancel anytime.
        </p>
        <div className="mx-auto mt-6 max-w-2xl">
          <h3 className="px-4 text-lg sm:px-0 sm:text-xl">
            Ready to watch? Enter your email to create or restart your membership.
          </h3>
          <form
            className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row"
            action="/plans"
            method="GET"
          >
            <div className="relative w-full sm:flex-1">
              <input
                id="email-hero"
                name="email"
                type="email"
                className="peer block h-[56px] w-full appearance-none rounded border border-neutral-500 bg-[rgba(0,0,0,0.5)] px-4 pb-2.5 pt-5 text-base text-white focus:outline-none focus:ring-2 focus:ring-white"
                placeholder=" "
                required
              />
              <label
                htmlFor="email-hero"
                className="absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-base text-neutral-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
              >
                Email address
              </label>
            </div>
            <button
              type="submit"
              className="flex h-[56px] w-full items-center justify-center rounded bg-red-600 px-6 text-xl font-medium text-white transition hover:bg-red-700 sm:w-auto md:text-2xl"
            >
              <span>Get Started</span>
              <ChevronRight className="ml-1 h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}