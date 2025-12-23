import { useState, useEffect } from "react";
import {
  Trophy,
  Users,
  Beaker,
  Zap,
  Search,
  ArrowRight,
  Star,
} from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  category: "Conference" | "Formulations" | "Device" | "Others";
  description: string;
  icon: React.ReactNode;
  date?: string;
}

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Achievement categories with icons
  const categories = [
    { 
      id: "all", 
      label: "All Achievements", 
      icon: Trophy,
      color: "from-yellow-600 to-amber-600",
      bgColor: "bg-yellow-100"
    },
    { 
      id: "Conference", 
      label: "Conference", 
      icon: Users,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-100"
    },
    { 
      id: "Formulations", 
      label: "Formulations", 
      icon: Beaker,
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-100"
    },
    { 
      id: "Device", 
      label: "Device", 
      icon: Zap,
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-100"
    },
    { 
      id: "Others", 
      label: "Other Achievements", 
      icon: Star,
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-100"
    }
  ];

  // Sample achievements data
  const achievements: Achievement[] = [
    {
      id: "conf1",
      title: "International Pharmaceutical Conference 2024",
      category: "Conference",
      description: "Presented groundbreaking research on novel anti-inflammatory agents at the Global Pharma Summit in London.",
      icon: <Users className="w-8 h-8" />,
      date: "March 2024"
    },
    {
      id: "conf2",
      title: "National Chemistry Symposium",
      category: "Conference",
      description: "Delivered keynote address on advances in pharmaceutical chemistry and drug development strategies.",
      icon: <Users className="w-8 h-8" />,
      date: "February 2024"
    },
    {
      id: "form1",
      title: "Novel Curcumin Formulation Patent",
      category: "Formulations",
      description: "Successfully developed and patented a novel curcumin-loaded carbon dot formulation with enhanced bioavailability.",
      icon: <Beaker className="w-8 h-8" />,
      date: "January 2024"
    },
    {
      id: "form2",
      title: "Aceclofenac Delivery System",
      category: "Formulations",
      description: "Pioneering work on developing advanced aceclofenac-loaded nanoparticles for targeted drug delivery.",
      icon: <Beaker className="w-8 h-8" />,
      date: "December 2023"
    },
    {
      id: "dev1",
      title: "Electrochemical Biosensor Device",
      category: "Device",
      description: "Developed and validated a portable electrochemical biosensor device for rapid pathogen detection and analysis.",
      icon: <Zap className="w-8 h-8" />,
      date: "November 2023"
    },
    {
      id: "dev2",
      title: "Point-of-Care Testing Device",
      category: "Device",
      description: "Engineered an innovative point-of-care diagnostic device for on-site clinical sample analysis and reporting.",
      icon: <Zap className="w-8 h-8" />,
      date: "October 2023"
    },
    {
      id: "other1",
      title: "Best Research Paper Award",
      category: "Others",
      description: "Received recognition for outstanding research contribution in pharmaceutical sciences from the National Academy.",
      icon: <Trophy className="w-8 h-8" />,
      date: "September 2023"
    },
    {
      id: "other2",
      title: "Young Scientist Achievement",
      category: "Others",
      description: "Honored as one of the most promising young researchers in the field of pharmaceutical and chemical sciences.",
      icon: <Star className="w-8 h-8" />,
      date: "August 2023"
    }
  ];

  const filteredAchievements = achievements.filter((achievement) => {
    const matchesCategory = selectedCategory === "all" || achievement.category === selectedCategory;
    const matchesSearch =
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.description.toLowerCase().includes(searchQuery.toLowerCase());
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
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Header Content */}
        <div className="max-w-7xl mx-auto text-center relative">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-2xl mb-8 group hover:scale-110 transition-transform duration-300">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-yellow-800 to-amber-800 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h1>
            
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full mb-8"></div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating our milestones, breakthroughs, and recognition in the pharmaceutical and scientific community
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-12 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:border-yellow-500 focus:outline-none shadow-sm hover:shadow-md transition-all duration-300"
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

      {/* Achievements Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.length > 0 ? (
            filteredAchievements.map((achievement) => {
              const categoryInfo = getCategoryColor(achievement.category);
              return (
                <div
                  key={achievement.id}
                  className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm"
                >
                  {/* Header with Icon */}
                  <div className={`relative p-8 ${categoryInfo?.bgColor} bg-opacity-50 flex items-center justify-between`}>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${categoryInfo?.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300 line-clamp-2">
                      {achievement.title}
                    </h3>

                    {achievement.date && (
                      <p className="text-xs text-gray-500 mb-3 font-medium">
                        📅 {achievement.date}
                      </p>
                    )}
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Category Badge */}
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-4 py-1.5 bg-gradient-to-r ${categoryInfo?.color} text-white text-xs font-bold rounded-full group-hover:shadow-md transition-all duration-300`}>
                        {achievement.category}
                      </span>
                    </div>

                    {/* View Details Link */}
                    <button className="mt-4 w-full py-2 px-4 bg-gray-50 text-gray-700 font-semibold rounded-xl hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 col-span-full">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-2xl mb-6">
                <Trophy className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                No achievements found
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

export default Achievements;