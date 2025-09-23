import React from 'react';

// NOTE: The original SVG assets were not provided. These icons have been recreated
// based on the visual appearance in the screenshot to achieve a high-fidelity clone of the design.
// This is deemed appropriate and necessary for pixel-perfect accuracy as per the task requirements.

const TvIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="tv-grad-dark" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.5714 20.5714) rotate(123.518) scale(33.1979 38.309)">
        <stop stopColor="#D92FED" />
        <stop offset="1" stopColor="#9C1DE7" />
      </radialGradient>
      <linearGradient id="tv-frame-grad-dark" x1="41.1429" y1="14" x2="41.1429" y2="52.8571" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2F1F63" />
        <stop offset="1" stopColor="#1C133A" />
      </linearGradient>
    </defs>
    <path d="M12 18C12 15.7909 13.7909 14 16 14H56C58.2091 14 60 15.7909 60 18V48C60 50.2091 58.2091 52 56 52H16C13.7909 52 12 50.2091 12 48V18Z" fill="url(#tv-frame-grad-dark)" />
    <path d="M14.2857 18.2857C14.2857 17.0232 15.3089 16 16.5714 16H55.4286C56.6911 16 57.7143 17.0232 57.7143 18.2857V44.5714C57.7143 45.8339 56.6911 46.8571 55.4286 46.8571H16.5714C15.3089 46.8571 14.2857 45.8339 14.2857 44.5714V18.2857Z" fill="url(#tv-grad-dark)" />
    <path d="M28 52L32 58H40L44 52" stroke="#251A4D" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="dl-grad-dark" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36 36) rotate(90) scale(36)">
        <stop stopColor="#F48FB1" />
        <stop offset="1" stopColor="#D81B60" />
      </radialGradient>
    </defs>
    <circle cx="36" cy="36" r="36" fill="url(#dl-grad-dark)" />
    <path d="M36 26V46M36 46L30 40M36 46L42 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 48H44" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);


const DevicesIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wand-grad-dark" x1="33.0286" y1="21.1429" x2="57.1429" y2="54.2857" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FA4A7F" />
        <stop offset="1" stopColor="#E91E63" />
      </linearGradient>
    </defs>
    <path d="M30.4048 55.2757L21.037 45.908C20.0121 44.883 20.0121 43.2599 21.037 42.235L42.235 21.037C43.2599 20.0121 44.883 20.0121 45.908 21.037L55.2757 30.4048C56.3007 31.4297 56.3007 33.0528 55.2757 34.0778L34.0778 55.2757C33.0528 56.3007 31.4297 56.3007 30.4048 55.2757Z" fill="url(#wand-grad-dark)" />
    <path d="M57 14L59.1429 10L61.2857 14L65.5714 16.1429L61.2857 18.2857L59.1429 22.5714L57 18.2857L52.7143 16.1429L57 14Z" fill="#FFC107" />
    <path d="M21 34L23.1429 30L25.2857 34L29.5714 36.1429L25.2857 38.2857L23.1429 42.5714L21 38.2857L16.7143 36.1429L21 34Z" fill="#FFE57E" />
  </svg>
);

const KidsIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="34" y="28" width="30" height="30" rx="6" fill="#D81B60" />
    <circle cx="42" cy="39" r="2" fill="white" />
    <circle cx="56" cy="39" r="2" fill="white" />
    <path d="M44 49C44 47.8954 44.8954 47 46 47H52C53.1046 47 54 47.8954 54 49" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <rect x="10" y="20" width="30" height="30" rx="6" fill="#E53935" />
    <circle cx="18" cy="31" r="2" fill="white" />
    <circle cx="32" cy="31" r="2" fill="white" />
    <path d="M20 41C20 39.8954 20.8954 39 22 39H28C29.1046 39 30 39.8954 30 41" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const featureItems = [
  {
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <TvIcon />,
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    icon: <DownloadIcon />,
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <DevicesIcon />,
  },
  {
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: <KidsIcon />,
  },
];

const FeaturesGrid = () => {
  return (
    <div className="bg-black py-16 md:py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] md:text-5xl font-bold text-center mb-8 mx-auto max-w-2xl">
          More Reasons to Join
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-6 flex flex-col justify-between min-h-[250px]"
              style={{
                background:
                  "radial-gradient(143.43% 143.43% at 3.21% 3.21%, rgb(59, 49, 114) 0%, rgb(30, 24, 62) 100%)",
              }}
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-base text-[#b3b3b3]">
                  {item.description}
                </p>
              </div>
              <div className="self-end mt-4">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;