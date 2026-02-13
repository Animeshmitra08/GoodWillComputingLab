import React from "react";

interface LoaderProps {
  isLoaded: boolean;
  loadingProgress: number;
}

const WindowsLoader: React.FC<LoaderProps> = ({
  isLoaded,
  loadingProgress,
}) => {
  return (
    <div
      className={`fixed inset-0 z-[200] transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)] flex items-center justify-center
        ${
          isLoaded
            ? "opacity-0 translate-y-full pointer-events-none"
            : "opacity-100 -translate-y-0"
        } 
        bg-gradient-to-br from-indigo-50 via-white to-purple-50`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob transition-transform duration-[2000ms] ${
            isLoaded ? "scale-100" : "scale-150"
          }`}
        />
        <div
          className={`absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 transition-transform duration-[2000ms] ${
            isLoaded ? "scale-100" : "scale-150 -translate-x-10"
          }`}
        />
      </div>

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative">
        {/* Glow */}
        <div
          className={`absolute inset-0 blur-3xl transition-all duration-1000 delay-200 ${
            isLoaded
              ? "opacity-0 scale-100"
              : "opacity-30 scale-150"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
        </div>

        {/* Logo section */}
        <div
          className={`relative transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <div className="flex flex-col items-center justify-center mt-18">
            <div className="relative">
              <img
                src="/assets/kcrg_logo.png"
                alt="KCRG Logo"
                className="w-40 h-40 object-contain drop-shadow-lg"
              />
              <div
                className={`absolute inset-0 border-2 border-indigo-300 rounded-full transition-all duration-[2000ms] ${
                  isLoaded
                    ? "rotate-0 opacity-100 scale-100"
                    : "rotate-180 opacity-0 scale-150"
                }`}
              />
            </div>

            {/* Windows Startup Spinner */}
            <div className="relative w-12 h-12">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 animate-windows-dot"
                  style={{
                    // Each dot follows the same path but starts later
                    animationDelay: `${i * 150}ms`,
                  }}
                >
                  <div 
                    className="w-1.5 h-1.5 bg-indigo-600 rounded-full" 
                    style={{
                      margin: '0 auto', // Centers dot at the top of the rotating container
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Loading percentage */}
            <div
              className={`text-sm font-medium text-indigo-700 tracking-wide transition-all duration-700 delay-700 mt-2 ${
                isLoaded
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {loadingProgress}% complete
            </div>
          </div>
        </div>

        {/* Background text */}
        <div
          className={`absolute inset-0 flex items-center justify-center select-none pointer-events-none transition-all duration-1000 delay-300 ${
            isLoaded
              ? "opacity-0 scale-100"
              : "opacity-5 scale-110"
          }`}
        >
          <h1 className="text-[20vw] font-bold text-indigo-900 leading-none">
            KCRG
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WindowsLoader;