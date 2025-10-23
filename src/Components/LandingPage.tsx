import { useEffect, useState } from "react";
import { Code, Layers, Shield, Star, TrendingUp } from "lucide-react";
import professor from "../assets/Dr. Kalicharan Sharma.png";

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero + Professor Section with Animated Background */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Welcome Section */}
            <div className="mb-20 space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="block mb-4">
                  <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
                    Welcome to the
                  </span>
                </span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-800 bg-clip-text text-transparent animate-gradient">
                    KCS Research Group
                  </span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed">
                Advancing pharmaceutical innovation through cutting-edge computational chemistry and drug design
              </p>
            </div>

            {/* Professor Profile Section (centered) */}
            <div className="flex flex-col items-center justify-center text-center gap-8 max-w-3xl mx-auto pt-12 border-t-2 border-gray-100">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  src={professor} 
                  alt="Dr. Kalicharan Sharma" 
                  className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-5">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-2">
                  Dr. Kalicharan Sharma
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-4"></div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-purple-600 text-xl mt-1">🎓</span>
                    <p className="text-lg font-semibold text-gray-800">
                      Professor, Dept. Pharmaceutical Chemistry and Analysis
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <span className="text-indigo-600 text-xl mt-1">🏛️</span>
                    <p className="text-lg text-gray-700">
                      I.S.F College of Pharmacy, Moga, Punjab, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-15 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring cutting-edge technologies to advance high performance and quantum computing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8 text-yellow-600" />,
                title: "Medicinal Chemistry",
                description: "Developing novel drug compounds and therapeutic agents through computational modeling and molecular design."
              },
              {
                icon: <Code className="w-8 h-8 text-green-600" />,
                title: "Computer Aided Drug Design",

                description: "Utilizing advanced computational methods to simulate molecular interactions and predict chemical properties."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: "Biosensors",
                description: "Creating innovative sensing technologies for rapid detection and monitoring of biological and chemical analytes."
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-600" />,
                title: "Pharmaceutical Analysis",
                description: "Ensuring drug quality and safety through advanced analytical techniques and method development."
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-600" />,
                title: "Synthetic Organic Chemistry",
                description: "Ensuring drug quality and safety through advanced analytical techniques and method development."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm">
                <div className="mb-6 p-3 bg-gray-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 group-hover:bg-gray-200">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl border border-gray-200 p-12 md:p-16 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-8">
              <Star className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Join Our Research
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Collaborate with us to advance the frontiers of high performance and quantum computing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
              <button className="px-10 py-4 bg-white border-2 border-gray-300 rounded-2xl text-gray-700 font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;