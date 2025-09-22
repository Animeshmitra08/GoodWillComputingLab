import { useEffect, useState } from "react";
import { ArrowRight, Code, Github, Layers, Linkedin, Mail, Shield, Star, TrendingUp, Twitter, Users, Zap } from "lucide-react";

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
                Welcome to the Goodwill Computing Lab
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Goodwill Lab's mission is making high performance computing (HPC) and quantum computing systems better and more accessible. 
            </p>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Goodwill Lab also focuses on preparing next generation of students and educators to take advantage of parallel computing systems to solve problems of societal importance.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
            News
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">April, 2023</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Tirthak Patel successfully defended his Ph.D. thesis and graduated with his Ph.D.! He'll be soon on his way to his faculty position at Rice University.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">March 1, 2023</h3>
                  <p className="text-gray-700 leading-relaxed">
                    William Cutler presented SliQ at a poster session for MathWorks Day @ Northeastern
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-pink-500 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">February 12, 2023</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Daniel Silver presented his poster on Quantum Image Similarity Networks (SliQ) at AAAI-23, coauthored with Tirthak Patel, Aditya Ranjan, Harshitta Gandhi, and William Cutler
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                ... see all News
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
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
                icon: <Zap className="w-8 h-8 text-yellow-600" />,
                title: "High Performance Computing",
                description: "Optimizing parallel computing systems for maximum performance and efficiency across diverse applications."
              },
              {
                icon: <Shield className="w-8 h-8 text-green-600" />,
                title: "Quantum Computing",
                description: "Advancing quantum computing systems and algorithms to solve complex computational problems."
              },
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "System Architecture",
                description: "Designing innovative computing architectures that bridge classical and quantum systems."
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Education & Training",
                description: "Preparing the next generation of students and educators in parallel computing technologies."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
                title: "Performance Analysis",
                description: "Developing tools and methodologies for analyzing and optimizing computing system performance."
              },
              {
                icon: <Layers className="w-8 h-8 text-indigo-600" />,
                title: "Societal Applications",
                description: "Applying advanced computing solutions to address problems of significant societal importance."
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

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Goodwill Computing Lab
              </h3>
              <p className="text-gray-600">Making computing more accessible for everyone.</p>
            </div>
            
            <div className="flex space-x-6">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="p-3 bg-gray-100 rounded-2xl text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; 2024 Goodwill Computing Lab. All rights reserved. Advancing computing for society.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;