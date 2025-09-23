import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Netflix - Watch TV Shows Online, Watch Movies Online",
  description: "Netflix - Watch TV Shows Online, Watch Movies Online",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='2500' viewBox='124.528 16 262.944 480' width='2500'%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='108.142' x2='176.518' y1='240.643' y2='189.038'%3E%3Cstop offset='0' stop-color='%23c20000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%239d0000'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='400.786' x2='338.861' xlink:href='%23a' y1='312.035' y2='337.837'/%3E%3Cpath d='m216.398 16h-91.87v480c30.128-7.135 61.601-10.708 91.87-12.052z' fill='%23c20000'/%3E%3Cpath d='m216.398 16h-91.87v367.267c30.128-7.135 61.601-10.707 91.87-12.051z' fill='url(%23a)'/%3E%3Cpath d='m387.472 496v-480h-91.87v468.904c53.636 3.416 91.87 11.096 91.87 11.096z' fill='%23c20000'/%3E%3Cpath d='m387.472 496v-318.555h-91.87v307.459c53.636 3.416 91.87 11.096 91.87 11.096z' fill='url(%23b)'/%3E%3Cpath d='m387.472 496-171.074-480h-91.87l167.03 468.655c55.75 3.276 95.914 11.345 95.914 11.345z' fill='%23fa0000'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='2500' viewBox='124.528 16 262.944 480' width='2500'%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='108.142' x2='176.518' y1='240.643' y2='189.038'%3E%3Cstop offset='0' stop-color='%23c20000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%239d0000'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='400.786' x2='338.861' xlink:href='%23a' y1='312.035' y2='337.837'/%3E%3Cpath d='m216.398 16h-91.87v480c30.128-7.135 61.601-10.708 91.87-12.052z' fill='%23c20000'/%3E%3Cpath d='m216.398 16h-91.87v367.267c30.128-7.135 61.601-10.707 91.87-12.051z' fill='url(%23a)'/%3E%3Cpath d='m387.472 496v-480h-91.87v468.904c53.636 3.416 91.87 11.096 91.87 11.096z' fill='%23c20000'/%3E%3Cpath d='m387.472 496v-318.555h-91.87v307.459c53.636 3.416 91.87 11.096 91.87 11.096z' fill='url(%23b)'/%3E%3Cpath d='m387.472 496-171.074-480h-91.87l167.03 468.655c55.75 3.276 95.914 11.345 95.914 11.345z' fill='%23fa0000'/%3E%3C/svg%3E" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
