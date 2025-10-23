import { useState } from "react";
import {
  BookOpen,
  Award,
  GraduationCap,
  Users,
  Search,
} from "lucide-react";

interface TeamMember {
  name: string;
  expertise: string;
  image: string;
  batch: string;
  researchArea?: string;
}

const TeamMembers = () => {
  const [selectedBatch, setSelectedBatch] = useState("current");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const team: TeamMember[] = [
    {
      name: "Arshdeep Singh",
      researchArea: "Anti-Inflammatory Agents",
      expertise: "Pharmaceutical Chemistry",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      batch: "2022-2024"
    },
    {
      name: "Anjali Sharma",
      researchArea: "Anti-Alzheimer Agents",
      expertise: "Pharmaceutical Chemistry",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
      batch: "2022-2024"
    },
    {
      name: "Deepak Bisht",
      researchArea: "Anti-Inflammatory Agents",
      expertise: "Pharmaceutical Chemistry",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
      batch: "2022-2024"
    },
    {
      name: "Aniket Saini",
      researchArea: "Curcumin Loaded Carbon Dots",
      expertise: "Pharmaceutical Analysis",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      batch: "2022-2024"
    },
    {
      name: "Rabin Debnath",
      researchArea: "Anti-Breast cancer Agents",
      expertise: "Pharmaceutical Chemistry",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      batch: "2022-2024"
    },
    {
      name: "Kushal Seni",
      researchArea: "Aceclofenac Loaded Carbon Dots",
      expertise: "Pharmaceutical Analysis",
      image: "",
      batch: "2022-2024"
    }
  ];

  const newMembers: TeamMember[] = [
    {
      name: "Diviyanshi",
      expertise: "Pharmaceutical Chemistry",
      image: "",
      batch: "2023-2025"
    },
    {
      name: "Yash Kumar Gaur",
      expertise: "Pharmaceutical Chemistry",
      image: "",
      batch: "2023-2025"
    },
    {
      name: "Aniket Nandi",
      expertise: "Pharmaceutical Analysis",
      image: "",
      batch: "2023-2025"
    },
    {
      name: "Ashish Kumar",
      expertise: "Pharmacognosy",
      image: "",
      batch: "2023-2025"
    },
    {
      name: "Shreya Kumari",
      expertise: "Pharmaceutical Chemistry",
      image: "",
      batch: "2023-2025"
    },
    {
      name: "Mukesh Kumar",
      expertise: "Pharmaceutical Analysis",
      image: "",
      batch: "2023-2025"
    },
    {
      name: "Archana Kumari",
      expertise: "Pharmacognosy",
      image: "",
      batch: "2023-2025"
    }
  ];

  const currentMembers: TeamMember[] = [
    {
      name: "Atanu Saha",
      expertise: "Pharmaceutical Analysis",
      image: "",
      batch: "current"
    },
    {
      name: "Ganesh Pd Sahu",
      expertise: "Pharmaceutical Analysis",
      image: "",
      batch: "current"
    },
    {
      name: "Swagnik Chakroborty",
      expertise: "Pharmaceutical Analysis",
      image: "",
      batch: "current"
    },
    {
      name: "Shivam Nag",
      expertise: "Pharmaceutical Chemistry",
      image: "",
      batch: "current"
    },
    {
      name: "Mohit Sharma",
      expertise: "Pharmaceutical Chemistry",
      image: "",
      batch: "current"
    },
    {
      name: "Mangaldip Ghosh",
      expertise: "Pharmaceutical Chemistry",
      image: "",
      batch: "current"
    }
  ];

  // Combine all members
  const allMembers = [...team, ...newMembers, ...currentMembers];

  // Define categories based on expertise
  const categories = [
    { id: "all", label: "All", icon: Users },
    { id: "Pharmaceutical Chemistry", label: "Chemistry", icon: BookOpen },
    { id: "Pharmaceutical Analysis", label: "Analysis", icon: Award },
    { id: "Pharmacognosy", label: "Pharmacognosy", icon: GraduationCap }
  ];

  const filteredMembers = allMembers.filter((member) => {
    const matchesBatch = member.batch === selectedBatch;
    const matchesCategory =
      selectedCategory === "all" || member.expertise === selectedCategory;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.researchArea?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesBatch && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
          Meet Our Team
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
          A diverse group of passionate researchers pushing the boundaries of
          chemistry and pharmaceutical sciences.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-4 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or expertise..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:outline-none shadow-sm hover:shadow-md"
          />
        </div>
      </section>

      {/* Batch Selector */}
      <section className="px-6 pb-6">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 flex-wrap">
          {["current", "2023-2025", "2022-2024"].map((batch) => (
            <button
              key={batch}
              onClick={() => setSelectedBatch(batch)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedBatch === batch
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {batch === "current"
                ? "Current Members"
                : `Batch of ${batch}`}
            </button>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-24 h-24 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                                <svg class="w-12 h-12 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <p class="text-indigo-600 font-semibold">${member.name}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                          <svg className="w-12 h-12 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-indigo-600 font-semibold">{member.name}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {member.researchArea && (
                    <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                      <BookOpen
                        size={16}
                        className="mt-1 flex-shrink-0 text-indigo-600"
                      />
                      <span>{member.researchArea}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <GraduationCap
                      size={16}
                      className="flex-shrink-0 text-purple-600"
                    />
                    <span>{member.expertise}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">
                      {member.batch === "current" ? "Current" : member.batch}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 col-span-full">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <Users className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No team members found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TeamMembers;