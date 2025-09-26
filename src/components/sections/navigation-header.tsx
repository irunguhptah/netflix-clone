"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-2 top-1/2 -translate-y-1/2 text-white pointer-events-none"
    aria-hidden="true"
  >
    <path
      d="M10.75 3.33333C9.69742 3.33333 8.76104 3.01292 8.00008 2.45719C7.23912 3.01292 6.30274 3.33333 5.25008 3.33333C4.19742 3.33333 3.26104 3.01292 2.50008 2.45719V11.25C3.26104 10.6943 4.19742 10.3738 5.25008 10.3738C6.30274 10.3738 7.23912 10.6943 8.00008 11.25C8.76104 10.6943 9.69742 10.3738 10.75 10.3738C11.8027 10.3738 12.7391 10.6943 13.5 11.25V2.45719C12.7391 3.01292 11.8027 3.33333 10.75 3.33333ZM10.0834 6.375C10.0834 6.15417 9.99175 5.94271 9.83133 5.78229C9.67092 5.62187 9.45946 5.53021 9.23863 5.53021C9.01779 5.53021 8.80633 5.62187 8.64592 5.78229C8.4855 5.94271 8.39383 6.15417 8.39383 6.375C8.39383 6.59583 8.4855 6.80729 8.64592 6.96771C8.80633 7.12812 9.01779 7.21979 9.23863 7.21979C9.45946 7.21979 9.67092 7.12812 9.83133 6.96771C9.99175 6.80729 10.0834 6.59583 10.0834 6.375ZM5.91675 6.375C5.91675 6.00208 6.06258 5.64375 6.32196 5.38437C6.58133 5.125 6.93967 4.97917 7.31258 4.97917C7.54175 4.97917 7.76154 5.02969 7.95425 5.12292C7.30217 4.60417 6.47925 4.3125 5.58342 4.3125C4.77092 4.3125 4.02175 4.54167 3.41675 4.95833V9.6875C4.04175 9.25 4.79175 9.02083 5.58342 9.02083C6.47925 9.02083 7.30217 9.3125 7.95425 9.83125C7.76154 9.92448 7.54175 9.975 7.31258 9.975C6.93967 9.975 6.58133 9.82917 6.32196 9.56979C6.06258 9.31042 5.91675 8.95208 5.91675 8.57917V6.375Z"
      fill="currentColor"
    />
  </svg>
);

const CaretDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute right-2 top-1/2 -translate-y-1/2 text-white pointer-events-none"
    aria-hidden="true"
  >
    <path
      d="M7.14645 11.1464L2.35355 6.35355L3.06066 5.64645L7.5 10.0858L11.9393 5.64645L12.6464 6.35355L7.85355 11.1464C7.65829 11.3417 7.34171 11.3417 7.14645 11.1464Z"
      fill="currentColor"
    />
  </svg>
);

const NavigationHeader = () => {
  const pathname = usePathname();
  const hideAuth = pathname?.startsWith("/login");

  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full px-4 sm:px-8 md:px-[3.5rem] pt-5">
      <div className="flex items-center justify-between max-w-[1920px] mx-auto">
        <Link href="/" aria-label="Netflix">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="148"
            height="40"
            viewBox="0 0 1024 276.742"
          >
            <path
              d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
              fill="#d81f26"
            />
          </svg>
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="relative">
            <label htmlFor="language-select" className="sr-only">
              Select Language
            </label>
            <LanguageIcon />
            <select
              id="language-select"
              defaultValue="en"
              className="bg-black/40 border border-[#aaa] text-white text-sm rounded-[4px] pl-7 pr-7 py-[0.3rem] appearance-none focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <CaretDownIcon />
          </div>
          {!hideAuth && (
            <>
              <Link
                href="/plans"
                className="text-sm text-white/90 hover:underline hidden sm:inline"
              >
                Plans
              </Link>
              <a
                href="/login"
                role="button"
                className="bg-primary text-white text-sm font-medium rounded-[4px] py-1 px-4 leading-normal hover:bg-red-700 transition-colors"
              >
                Sign In
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
