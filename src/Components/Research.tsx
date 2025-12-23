import { useState, useEffect } from "react";
import {
  Microscope,
  Biohazard as Virus,
  Zap,
  Droplet,
  Search,
  ArrowRight,
} from "lucide-react";

interface ResearchProject {
  id: string;
  title: string;
  category: "TB" | "Biosensors" | "Virals" | "Others";
  description: string;
  icon: React.ReactNode;
}

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Research categories with icons
  const categories = [
    { 
      id: "all", 
      label: "All Research", 
      icon: Microscope,
      color: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-100"
    },
    { 
      id: "TB", 
      label: "TB Research", 
      icon: Virus,
      color: "from-red-600 to-pink-600",
      bgColor: "bg-red-100"
    },
    { 
      id: "Biosensors", 
      label: "Biosensors", 
      icon: Zap,
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-100"
    },
    { 
      id: "Virals", 
      label: "Viral Studies", 
      icon: Droplet,
      color: "from-orange-600 to-yellow-600",
      bgColor: "bg-orange-100"
    },
    { 
      id: "Others", 
      label: "Other Research", 
      icon: Microscope,
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-100"
    }
  ];

  // Sample research projects data
  const researchProjects: ResearchProject[] = [
    {
      id: "tb1",
      title: "Novel Drug Development for TB",
      category: "TB",
      description: "Advanced research on developing novel therapeutic compounds to combat drug-resistant tuberculosis strains.",
      icon: <Virus className="w-8 h-8" />
    },
    {
      id: "tb2",
      title: "TB Diagnosis Enhancement",
      category: "TB",
      description: "Improving diagnostic methods for early detection and accurate identification of tuberculosis cases.",
      icon: <Microscope className="w-8 h-8" />
    },
    {
      id: "bs1",
      title: "Electrochemical Biosensors",
      category: "Biosensors",
      description: "Development of sensitive electrochemical biosensor platforms for rapid pathogen detection.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: "bs2",
      title: "Point-of-Care Diagnostics",
      category: "Biosensors",
      description: "Creating portable biosensing devices for on-site clinical and environmental monitoring.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: "viral1",
      title: "Viral Protein Characterization",
      category: "Virals",
      description: "Comprehensive study of viral protein structures and their interactions with host cells.",
      icon: <Droplet className="w-8 h-8" />
    },
    {
      id: "viral2",
      title: "Antiviral Compound Screening",
      category: "Virals",
      description: "High-throughput screening of chemical libraries against various viral targets.",
      icon: <Droplet className="w-8 h-8" />
    },
    {
      id: "other1",
      title: "Pharmaceutical Analysis",
      category: "Others",
      description: "Quality control and analytical validation of pharmaceutical compounds and formulations.",
      icon: <Microscope className="w-8 h-8" />
    },
    {
      id: "other2",
      title: "Biomarker Discovery",
      category: "Others",
      description: "Identification of novel biomarkers for disease prognosis and treatment response prediction.",
      icon: <Microscope className="w-8 h-8" />
    }
  ];

  const filteredProjects = researchProjects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Header Content */}
        <div className="max-w-7xl mx-auto text-center relative">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-8 group hover:scale-110 transition-transform duration-300">
              <Microscope className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
                Our Research
              </span>
            </h1>
            
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mb-8"></div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering pharmaceutical and chemical research driving innovation in healthcare and diagnostics
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-12 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search research projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:outline-none shadow-sm hover:shadow-md transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Research Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => {
              const categoryInfo = getCategoryColor(project.category);
              return (
                <div
                  key={project.id}
                  className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm"
                >
                  {/* Header with Icon */}
                  <div className={`relative p-8 ${categoryInfo?.bgColor} bg-opacity-50 flex items-center justify-between`}>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${categoryInfo?.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Category Badge */}
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-4 py-1.5 bg-gradient-to-r ${categoryInfo?.color} text-white text-xs font-bold rounded-full group-hover:shadow-md transition-all duration-300`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Learn More Link */}
                    <button className="mt-4 w-full py-2 px-4 bg-gray-50 text-gray-700 font-semibold rounded-xl hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 col-span-full">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-2xl mb-6">
                <Microscope className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                No research projects found
              </h3>
              <p className="text-lg text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Research;