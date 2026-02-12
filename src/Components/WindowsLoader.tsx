import React from 'react';

interface LoaderProps {
  isLoaded: boolean;
  loadingProgress: number;
}

const WindowsLoader: React.FC<LoaderProps> = ({ isLoaded, loadingProgress }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-3xl transition-all duration-1000 ease-in-out ${
        isLoaded ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* --- Animated Gradient Blobs --- */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo (Removed 'invert' for dark logo on light background) */}
        <div className="mb-6">
          <img
            src="/assets/notTransparent.png"
            alt="Logo"
            className="w-28 h-28 object-contain rounded-full"
          />
        </div>

        {/* Loader Dots (Changed bg-white to bg-blue-600) */}
        <div className="relative w-8 h-8 mb-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 animate-windows"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-sm" />
            </div>
          ))}
        </div>

        {/* Text (Updated colors for readability) */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-800">
            {"Welcome"}
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-500">
            {loadingProgress}% complete
          </p>
          {/* <p className="mt-1 text-xs font-normal text-slate-400">
            Don't refresh your browser
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default WindowsLoader;