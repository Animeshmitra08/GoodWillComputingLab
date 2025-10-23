import { useState } from "react";
import {
  BookOpen,
  Award,
  GraduationCap,
  Users,
  Search,
} from "lucide-react";

const TeamMembers = () => {
  const [selectedBatch, setSelectedBatch] = useState("current");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator",
      category: "faculty",
      batch: "current",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Leading research in computational chemistry and drug discovery with 15+ years of experience.",
      expertise: ["Medicinal Chemistry", "Molecular Modeling", "Drug Design"],
      education: "PhD in Chemistry, MIT",
      publications: 45,
      email: "sarah.j@kcsgroup.edu",
      linkedin: "#",
      scholar: "#",
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Researcher",
      category: "faculty",
      batch: "current",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Expert in quantum chemistry simulations and pharmaceutical analysis methods.",
      expertise: ["Quantum Chemistry", "Pharmaceutical Analysis", "Spectroscopy"],
      education: "PhD in Physical Chemistry, Stanford",
      publications: 38,
      email: "m.chen@kcsgroup.edu",
      linkedin: "#",
      scholar: "#",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Scientist",
      category: "postdoc",
      batch: "2022-2025",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Specializing in biosensor development and nanomaterial applications in medicine.",
      expertise: ["Biosensors", "Nanotechnology", "Bioanalytical Chemistry"],
      education: "PhD in Biomedical Engineering, Johns Hopkins",
      publications: 22,
      email: "e.rodriguez@kcsgroup.edu",
      linkedin: "#",
      scholar: "#",
    },
    {
      name: "Alex Thompson",
      role: "PhD Candidate",
      category: "phd",
      batch: "2023-2025",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Developing novel computational methods for predicting drug-target interactions.",
      expertise: ["Machine Learning", "Computational Biology", "Drug Discovery"],
      education: "MS in Computer Science, Carnegie Mellon",
      publications: 8,
      email: "a.thompson@kcsgroup.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Priya Patel",
      role: "PhD Candidate",
      category: "phd",
      batch: "2023-2025",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      bio: "Researching advanced biosensor technologies for rapid disease detection.",
      expertise: ["Biosensors", "Electrochemistry", "Point-of-Care Diagnostics"],
      education: "MS in Chemistry, Oxford",
      publications: 12,
      email: "p.patel@kcsgroup.edu",
      linkedin: "#",
      scholar: "#",
    },
    {
      name: "James Wilson",
      role: "Master's Student",
      category: "masters",
      batch: "2022-2025",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Worked on computational approaches to optimize pharmaceutical formulations.",
      expertise: ["Computational Chemistry", "Pharmaceutical Sciences"],
      education: "BS in Chemistry, UC Berkeley",
      publications: 3,
      email: "j.wilson@kcsgroup.edu",
      github: "#",
    },
    {
      name: "Sofia Martinez",
      role: "Research Assistant",
      category: "undergrad",
      batch: "current",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      bio: "Undergraduate researcher exploring medicinal chemistry and synthesis techniques.",
      expertise: ["Organic Synthesis", "Analytical Chemistry"],
      education: "BS in Chemistry (Expected 2026)",
      publications: 1,
      email: "s.martinez@kcsgroup.edu",
      linkedin: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Members", icon: Users },
    { id: "faculty", label: "Faculty", icon: GraduationCap },
    { id: "postdoc", label: "Postdoctoral", icon: Award },
    { id: "phd", label: "PhD Students", icon: BookOpen },
    { id: "masters", label: "Master's Students", icon: BookOpen },
    { id: "undergrad", label: "Undergraduate", icon: Users },
  ];

  const filteredMembers = teamMembers.filter((member) => {
    const matchesBatch = member.batch === selectedBatch;
    const matchesCategory =
      selectedCategory === "all" || member.category === selectedCategory;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.some((exp) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
        <div className="max-w-2xl mx-auto mb-8 relative">
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
          {["current", "2023-2025", "2022-2025"].map((batch) => (
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
                : `Batch of ${batch.replace("-", "–")}`}
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
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{member.bio}</p>

                  <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                    <GraduationCap
                      size={16}
                      className="mt-1 flex-shrink-0 text-purple-600"
                    />
                    <span>{member.education}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <BookOpen
                      size={16}
                      className="flex-shrink-0 text-indigo-600"
                    />
                    <span>{member.publications} Publications</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
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