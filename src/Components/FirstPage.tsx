import { useEffect, useState } from 'react'
import video from "../assets/AdobeStock_65619016.mov";
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    // New state for exit animation
    const [isExiting, setIsExiting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoaded(true), 500);
                    setTimeout(() => setStartAnimation(true), 800);
                    return 100;
                }
                return prev + 1;
            });
        }, 25);
        return () => clearInterval(interval);
    }, []);

    // Handle the exit sequence
    const handleExplore = () => {
        setIsExiting(true);
        // Wait for the animation to finish (800ms) before navigating
        setTimeout(() => {
            navigate("/home");
        }, 1500);
    };

    const AnimatedLetter = ({ char, baseDelay }: { char: string; baseDelay: number }) => {
        const [isHovered, setIsHovered] = useState(false);
        return (
            <span
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setTimeout(() => setIsHovered(false), 500)}
                className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    startAnimation ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${isHovered ? 'text-indigo-400 -translate-y-1 scale-110' : 'text-white'}`}
                style={{ transitionDelay: isHovered ? '0ms' : `${baseDelay}ms`, cursor: 'default' }}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        );
    };

    return (
        <div className="relative h-screen w-full bg-[#0a0a0a] font-sans overflow-hidden">
            
            {/* EXIT OVERLAY - Option 1: Elegant Fade */}
            <div 
                className={`fixed inset-0 z-[200] transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)] flex items-center justify-center
                ${isExiting ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-full'} 
                bg-gradient-to-br from-indigo-50 via-white to-purple-50`}
            >
                {/* Add this inside the first div, before the Logo container */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Top Left Blob */}
                    <div className={`absolute -top-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob transition-transform duration-[2000ms] ${isExiting ? 'scale-150' : 'scale-100'}`} />
                    
                    {/* Bottom Right Blob */}
                    <div className={`absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 transition-transform duration-[2000ms] ${isExiting ? 'scale-150 -translate-x-10' : 'scale-100'}`} />
                </div>

                {/* Add this as the first child of your main container */}
                <div className="absolute inset-0 opacity-[0.03]" 
                    style={{ backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`, 
                            backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative">
                    {/* Animated background glow */}
                    <div className={`absolute inset-0 blur-3xl transition-all duration-1000 delay-200 ${isExiting ? 'opacity-30 scale-150' : 'opacity-0 scale-100'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                    </div>
                    
                    {/* Logo container */}
                    <div className={`relative transition-all duration-700 delay-300 ${isExiting ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="flex flex-col items-center justify-center space-y-6">
                            {/* Logo with subtle animation */}
                            <div className="relative">
                                <img
                                    src="/assets/kcrg_logo.png"
                                    alt="KCRG Logo"
                                    className="w-40 h-40 object-contain drop-shadow-lg"
                                />
                                {/* Rotating ring around logo */}
                                <div className={`absolute inset-0 border-2 border-indigo-300 rounded-full transition-all duration-[2000ms] ${isExiting ? 'rotate-180 opacity-0 scale-150' : 'rotate-0 opacity-100 scale-100'}`} />
                            </div>
                            
                            {/* Animated underline */}
                            <div className="w-48 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent">
                                <div className={`h-full bg-white transition-all duration-1000 delay-500 ${isExiting ? 'w-0 ml-auto' : 'w-full'}`} />
                            </div>
                        </div>
                    </div>

                    {/* Add this behind the logo container */}
                    <div className={`absolute inset-0 flex items-center justify-center select-none pointer-events-none transition-all duration-1000 delay-300 ${isExiting ? 'opacity-5 scale-110' : 'opacity-0 scale-100'}`}>
                        <h1 className="text-[20vw] font-bold text-indigo-900 leading-none">
                            KCRG
                        </h1>
                    </div>
                </div>
            </div>
            
            {/* 1. DECORATED LOADING SCREEN */}
            <div className={`absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[#fcfcfc] transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isLoaded ? '-translate-y-full' : 'translate-y-0'} `}>
                {/* ... (loader content remains the same) ... */}
                <div className="relative z-10 flex flex-col items-center max-w-3xl px-6">
                    <div className="mb-8 font-mono text-5xl md:text-7xl font-black text-gray-100 tabular-nums">
                        {loadingProgress}%
                    </div>
                    <div className="w-64 md:w-96 h-[3px] bg-gray-100 overflow-hidden relative rounded-full mb-6">
                        <div 
                            className="absolute h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 transition-all duration-200"
                            style={{ width: `${loadingProgress}%` }}
                        />
                    </div>
                    <div className="text-center space-y-3">
                        <h3 className="text-gray-800 text-sm md:text-base font-medium leading-relaxed tracking-wide">
                            <span className="opacity-80">"A platform dedicated to chemistry </span>
                            <span className="italic text-indigo-600">in service of life and advancement </span>
                            <span className="opacity-80">for the future."</span>
                        </h3>
                    </div>
                </div>
            </div>
            
            {/* 2. MAIN CONTENT */}
            <div className={`relative h-full w-full flex items-center justify-center transition-transform duration-1000 ${isExiting ? '-translate-x-10 opacity-0' : 'translate-x-0'}`}>
                {/* Background Video */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${startAnimation ? 'opacity-80' : 'opacity-0'}`}>
                    <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 w-full max-w-5xl px-8">
                    <div className="overflow-hidden h-6 mb-2">
                        <p className={`text-indigo-300 font-mono text-[10px] tracking-[0.4em] uppercase transition-transform duration-1000 ${startAnimation ? 'translate-y-0' : 'translate-y-full'}`}>
                            Research Group
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        <div className="flex flex-wrap py-1">
                            {"Welcome to the".split("").map((c, i) => (
                                <AnimatedLetter key={i} char={c} baseDelay={600 + (i * 20)} />
                            ))}
                        </div>
                        <div className="flex flex-wrap py-1">
                            {"KC Research Group".split("").map((c, i) => (
                                <AnimatedLetter key={i} char={c} baseDelay={850 + (i * 20)} />
                            ))}
                        </div>
                    </h1>

                    <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
                        <div className="max-w-sm">
                            <div className={`h-[1px] bg-white/40 transition-all duration-[1500ms] ${startAnimation ? 'w-full' : 'w-0'}`} />
                            <p className={`mt-4 text-white/80 text-sm leading-relaxed transition-all duration-1000 delay-1000 ${startAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                A collaborative environment dedicated to exploring the future of computational research and scientific discovery.
                            </p>
                        </div>

                        <div className={`transition-all duration-1000 delay-1200 ${startAnimation ? 'opacity-100' : 'opacity-0'}`}>
                            <button 
                                onClick={handleExplore}
                                className="px-8 py-3 bg-white text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-full text-sm font-semibold transition-all duration-300 group flex items-center gap-3 shadow-2xl"
                            >
                                Explore Us
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.08]" 
                 style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
            />
        </div>
    );
};

export default FirstPage;