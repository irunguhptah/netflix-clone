import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <NavigationHeader />
      <main className="relative pt-28 pb-16 px-4 sm:px-8 md:px-[3.5rem]">
        <div className="max-w-[450px] mx-auto bg-black/70 border border-[#333] rounded-md p-8">
          <h1 className="text-3xl font-bold mb-6">Create account</h1>

          <form className="space-y-4" action="#" method="post">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-[4px] bg-[var(--color-input)] border border-[#333] px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-[4px] bg-[var(--color-input)] border border-[#333] px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-[4px] bg-[var(--color-input)] border border-[#333] px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
                required
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="confirm" className="sr-only">Confirm password</label>
              <input
                id="confirm"
                name="confirm"
                type="password"
                placeholder="Confirm password"
                className="w-full rounded-[4px] bg-[var(--color-input)] border border-[#333] px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/70"
                required
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-red-700 transition-colors text-white font-medium rounded-[4px] py-3"
            >
              Create account
            </button>

            <p className="text-sm text-white/80">
              Already have an account? <a href="/login" className="text-white hover:underline">Sign in</a>
            </p>
          </form>

          <p className="text-xs text-white/60 mt-6">This page is a clone UI for demonstration only.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}