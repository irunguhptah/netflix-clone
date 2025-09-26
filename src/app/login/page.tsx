"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // simple client-side validation
    if (!email || !password) return;
    setIsSubmitting(true);
    // simulate login delay
    await new Promise((res) => setTimeout(res, 600));
    setIsSubmitting(false);
    // redirect to payment page after successful login
    router.push("/payment");
  };

  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Movie poster background (same approach as HeroSection) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5206fbfd-7267-4a70-ba9d-cd6766a1f20d-netflix-com/assets/images/US-en-20250915-TRIFECTA-perspective_1c6d11d5-ba33-4798-a4ed-2bc2b7165c7c_large-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content above background */}
      <div className="relative z-10">
        <NavigationHeader />

        {/* Login form */}
        <div className="relative flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-[450px] bg-black/75 rounded-md p-16">
            <h1 className="text-3xl font-bold mb-8">Sign In</h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or mobile number"
                className="w-full bg-[#333] border border-[#333] rounded px-4 py-4 text-white placeholder-gray-400 focus:bg-[#454545] focus:outline-none"
                required
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#333] border border-[#333] rounded px-4 py-4 text-white placeholder-gray-400 focus:bg-[#454545] focus:outline-none"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-[#e50914] hover:bg-[#f40612]"} text-white font-semibold py-4 rounded transition-colors`}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>

              <div className="text-center text-gray-400 text-sm my-4">OR</div>

              <button
                type="button"
                className="w-full bg-[#333]/50 hover:bg-[#333]/70 text-white py-3 rounded transition-colors"
              >
                Use a Sign-In Code
              </button>

              <div className="text-center mt-4">
                <a href="#" className="text-white hover:underline">
                  Forgot password?
                </a>
              </div>

              <div className="flex items-center mt-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-white text-sm">
                  Remember me
                </label>
              </div>
            </form>

            <div className="mt-8 text-gray-400">
              <p>
                New to Netflix?{" "}
                <a href="#" className="text-white hover:underline">
                  Sign up now
                </a>
                .
              </p>
              <p className="text-xs mt-4 text-gray-500">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a href="#" className="text-blue-500 hover:underline ml-1">
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
