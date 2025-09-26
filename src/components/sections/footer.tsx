export default function Footer() {
  return (
    <footer className="bg-black text-[#cfcfcf] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-sm">
            Questions?{" "}
            <a href="#" className="text-white underline">
              Contact us.
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-8">
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              FAQ
            </a>
            <a href="#" className="block hover:underline">
              Investor Relations
            </a>
            <a href="#" className="block hover:underline">
              Privacy
            </a>
            <a href="#" className="block hover:underline">
              Speed Test
            </a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              Help Center
            </a>
            <a href="#" className="block hover:underline">
              Jobs
            </a>
            <a href="#" className="block hover:underline">
              Cookie Preferences
            </a>
            <a href="#" className="block hover:underline">
              Legal Notices
            </a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              Account
            </a>
            <a href="#" className="block hover:underline">
              Ways to Watch
            </a>
            <a href="#" className="block hover:underline">
              Corporate Information
            </a>
            <a href="#" className="block hover:underline">
              Only on Netflix
            </a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              Media Center
            </a>
            <a href="#" className="block hover:underline">
              Terms of Use
            </a>
            <a href="#" className="block hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex items-center justify-start gap-4 mb-6">
          <select className="bg-transparent border border-[#2b2b2b] text-sm text-[#cfcfcf] rounded px-3 py-2">
            <option>English</option>
          </select>
          <div className="text-sm text-[#8b8b8b]"></div>
        </div>

        <div className="text-[11px] text-[#6b6b6b]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="underline">
            Learn more.
          </a>
        </div>
      </div>
    </footer>
  );
}
