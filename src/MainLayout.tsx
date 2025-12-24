import { Outlet } from "react-router-dom";
import LandingHeader from "./Components/LandingHeader";
import Footer from "./Components/Footer";
import { Lightbulb, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const MainLayout = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      <LandingHeader />
      
      <main>
        <Outlet />
      </main>

      {/* FLOATING ACTION BUTTONS CONTAINER */}
        <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-center gap-4">

        {/* SCROLL TO TOP BUTTON */}
        <button
            onClick={goToTop}
            className={`group relative flex items-center justify-center w-10 h-10 bg-white text-indigo-600 rounded-full shadow-xl border border-gray-100 transition-all duration-500 hover:bg-indigo-50 hover:-translate-y-1 active:scale-95 ${
            showTopBtn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 pointer-events-none"
            }`}
            aria-label="Scroll to top"
        >
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-[10px] font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap hidden md:block pointer-events-none transform translate-x-2 group-hover:translate-x-0">
            Back to Top
            </span>

            <ArrowUp size={22} />
        </button>

        {/* SUGGESTION BUTTON */}
        <button
            onClick={() => console.log("Open Suggestion Modal")}
            className="group relative flex items-center justify-center w-14 h-14 bg-amber-400 text-amber-950 rounded-full shadow-[0_8px_30px_rgb(251,191,36,0.4)] transition-all duration-300 hover:bg-amber-500 hover:scale-110 active:scale-95"
        >
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap hidden md:block pointer-events-none transform translate-x-2 group-hover:translate-x-0">
            Have a suggestion?
            </span>

            <Lightbulb size={26} />

            {/* Pulse */}
            <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-20 group-hover:hidden pointer-events-none"></span>
        </button>
        </div>

      <Footer />
    </div>
  );
};

export default MainLayout;