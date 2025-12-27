import { useEffect, useState } from "react";
import { Activity, Cpu, FlaskConical, TestTube } from "lucide-react";
import professor from "../assets/KC Sir web.png";
// import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   navigate("/contact");
  // };

  return (
    <div className="min-h-screen bg-white">
      

      {/* Professor Section */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white">
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
            {/* Professor Profile Section */}
            <div className="flex flex-col items-center justify-center text-center gap-8 max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
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

                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 hover:translate-x-2 transition-transform duration-300">
                    <span className="text-purple-600 text-2xl">🎓</span>
                    <p className="text-lg font-semibold text-gray-800">
                      Professor, Dept. Pharmaceutical Chemistry and Analysis
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3 hover:translate-x-2 transition-transform duration-300">
                    <span className="text-indigo-600 text-2xl">🏛️</span>
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
                icon: <FlaskConical className="w-8 h-8 text-pink-600" />,
                title: "Medicinal Chemistry",
                description:
                  "Designing and synthesizing biologically active molecules to discover new therapeutic agents targeting complex diseases.",
              },
              {
                icon: <Cpu className="w-8 h-8 text-green-600" />,
                title: "Computer-Aided Drug Design",
                description:
                  "Leveraging molecular modeling, docking, and simulation tools to predict drug-target interactions and optimize lead compounds.",
              },
              {
                icon: <Activity className="w-8 h-8 text-blue-600" />,
                title: "Biosensors",
                description:
                  "Developing smart biosensing platforms for rapid detection of biomarkers, pathogens, and environmental contaminants.",
              },
              {
                icon: <TestTube className="w-8 h-8 text-amber-600" />,
                title: "Synthetic Organic Chemistry",
                description:
                  "Designing efficient synthetic routes to create complex organic molecules, focusing on medicinally significant scaffolds and analogues.",
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

      {/* CTA Section
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-3xl border border-gray-200 p-12 md:p-16 shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-8 group hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Join Our Research
            </h2>
            
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              Collaborate with us to advance the frontiers of pharmaceutical chemistry and molecular innovation. We're always looking for passionate researchers and students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                Learn More
              </button>
              <button 
              onClick={() => handleButtonClick()}
              className="px-10 py-4 bg-white border-2 border-gray-300 rounded-2xl text-gray-700 font-bold text-lg hover:bg-gray-50 hover:border-purple-400 hover:text-purple-700 transition-all duration-300 active:scale-95">
                Contact Us
              </button>
              {/* <a
                href="mailto:sharmakcpt@gmail.com?subject=Contact%20Request&body=Hi%20Team,"
                className="inline-block px-10 py-4 bg-white border-2 border-gray-300 rounded-2xl text-gray-700 font-bold text-lg hover:bg-gray-50 hover:border-purple-400 hover:text-purple-700 transition-all duration-300 active:scale-95"
              >
                Contact Us
              </a> 
            </div>
          </div>
        </div>
      </section> */}

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .group:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;