import { useEffect, useState } from "react";
import video from "../assets/AdobeStock_65619016.mov";
import { useNavigate } from "react-router-dom";
import WindowsLoader from "./WindowsLoader";

const FirstPage = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const navigate = useNavigate();

  // Simulated loader
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // When loading completes
  useEffect(() => {
    if (loadingProgress === 100) {
      setTimeout(() => {
        setIsLoaded(true);      // hide loader
        setStartAnimation(true); // show main content
      }, 600);
    }
  }, [loadingProgress]);

  const handleExplore = () => {
    setIsExiting(true);

    setTimeout(() => {
        navigate("/home");
    }, 1000); // match animation duration
  };

  const AnimatedLetter = ({
    char,
    baseDelay,
  }: {
    char: string;
    baseDelay: number;
  }) => {
    return (
      <span
        className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          startAnimation
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        } text-white`}
        style={{ transitionDelay: `${baseDelay}ms`, cursor: "default" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  };

  return (
    <div className="relative h-screen w-full bg-[#0a0a0a] font-sans overflow-hidden">

      {/* 1️⃣ Loader FIRST */}
      <WindowsLoader
        isLoaded={isLoaded}
        loadingProgress={loadingProgress}
      />

      {/* 2️⃣ MAIN CONTENT */}
      <div
        className={`relative h-full w-full flex items-center justify-center transition-all duration-1000 ${
            startAnimation && !isExiting
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
        >
        {/* Background Video */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            startAnimation ? "opacity-80" : "opacity-0"
          }`}
        >
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-8">
          <div className="overflow-hidden h-6 mb-2">
            <p
              className={`text-indigo-300 font-mono text-[10px] tracking-[0.4em] uppercase transition-transform duration-1000 ${
                startAnimation ? "translate-y-0" : "translate-y-full"
              }`}
            >
              Research Group
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            <div className="flex flex-wrap py-1">
              {"Welcome to the".split("").map((c, i) => (
                <AnimatedLetter key={i} char={c} baseDelay={600 + i * 20} />
              ))}
            </div>
            <div className="flex flex-wrap py-1">
              {"KC Research Group".split("").map((c, i) => (
                <AnimatedLetter key={i} char={c} baseDelay={850 + i * 20} />
              ))}
            </div>
          </h1>

          <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div className="max-w-sm">
              <div
                className={`h-[1px] bg-white/40 transition-all duration-[1500ms] ${
                  startAnimation ? "w-full" : "w-0"
                }`}
              />
              <p
                className={`mt-4 text-white/80 text-sm leading-relaxed transition-all duration-1000 delay-1000 ${
                  startAnimation
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                A collaborative environment dedicated to exploring the future of computational research and scientific discovery.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-1200 ${
                startAnimation ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                onClick={handleExplore}
                className="px-8 py-3 bg-white text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-full text-sm font-semibold transition-all duration-300 group flex items-center gap-3 shadow-2xl"
              >
                Explore Us
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
};

export default FirstPage;