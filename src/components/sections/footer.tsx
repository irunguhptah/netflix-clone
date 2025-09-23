export default function Footer() {
  return (
    <footer className="mt-12 text-gray-600">
      <p className="mb-4">Questions? Contact us.</p>
      <div className="grid grid-cols-2 gap-4 text-sm mb-6">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Help Center</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Cookie Preferences</a>
        <a href="#" className="hover:underline">Corporate Information</a>
      </div>
      <select className="border border-gray-300 rounded px-3 py-2 text-sm">
        <option>English</option>
      </select>
    </footer>
  );
}