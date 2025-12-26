import { useState, useEffect } from "react";
import {
  BookOpen,
  Award,
  GraduationCap,
  Users,
  Search,
  ArrowLeft,
  Briefcase,
  // Icon
} from "lucide-react";
import type { TeamData, TeamMember } from "../types/team";

const TeamMembers = () => {
  const [selectedBatch, setSelectedBatch] = useState("current");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  
  // NEW: State for viewing a specific member's details
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    fetch("/data/teamData.json")
      .then((res) => res.json())
      .then((data: TeamData) => setTeamData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (selectedMember) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedMember]);


  const handleImageError = (memberName: string) => {
    setFailedImages((prev) => new Set(prev).add(memberName));
  };

  const allMembers: TeamMember[] = teamData
    ? [...teamData.currentMembers, ...teamData.newMembers]
    : [];

  const categories = [
    { id: "all", label: "All", icon: Users },
    { id: "Master's in Pharmaceutical Chemistry", label: "Chemistry", icon: BookOpen },
    { id: "Master's in Pharmaceutical Analysis", label: "Analysis", icon: Award },
    { id: "Master's in Pharmacognosy", label: "Pharmacognosy", icon: GraduationCap },
  ];

  if (!teamData) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const filteredMembers = allMembers.filter((member) => {
    const matchesBatch = member.batch === selectedBatch;
    const matchesCategory = selectedCategory === "all" || member.expertise === selectedCategory;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.expertise?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesBatch && matchesCategory && matchesSearch;
  });

  // --- SUB-COMPONENTS ---

  const MemberImage = ({ member, className }: { member: TeamMember; className?: string }) => {
    const isFailed = !member.image || failedImages.has(member.name);
    if (isFailed) {
      return (
        <div className={`flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 ${className}`}>
          <div className="text-center p-4">
            <Users className="w-12 h-12 text-purple-200 mx-auto mb-2" />
            <p className="text-purple-400 font-bold text-xs uppercase tracking-widest">{member.name.split(' ')[0]}</p>
          </div>
        </div>
      );
    }
    return (
      <img
        src={member.image}
        alt={member.name}
        className={`object-cover object-top ${className}`}
        onError={() => handleImageError(member.name)}
      />
    );
  };

  // --- RENDER DETAIL VIEW ---
  if (selectedMember) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => setSelectedMember(null)}
            className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 font-semibold"
          >
            <ArrowLeft size={20} /> Back to Team
          </button>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <MemberImage member={selectedMember} className="w-full h-full" />
            </div>

            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold uppercase tracking-widest">
                  Batch {selectedMember.batch}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">{selectedMember.name}</h1>
                {selectedMember.currentRole && (
                  <p className="text-xl text-indigo-600 font-bold mt-2 flex items-center gap-2">
                    <Briefcase size={22} /> {selectedMember.currentRole}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-gray-400 text-xs font-bold uppercase mb-1">Expertise</p>
                  <p className="text-gray-900 font-semibold">{selectedMember.expertise}</p>
                </div>
                {selectedMember.researchArea && (
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-gray-400 text-xs font-bold uppercase mb-1">Research Area</p>
                    <p className="text-gray-900 font-semibold">{selectedMember.researchArea}</p>
                  </div>
                )}
              </div>

              <div className="prose prose-purple">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen size={20} className="text-purple-600" /> Biography
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  {selectedMember.description || "Research profile information is currently being updated for this member."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER GRID VIEW ---
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-8 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
                Our Team Members
              </span>
            </h1>

            {/* Divider */}
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mb-8" />

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the students and researchers contributing to innovative work in
              pharmaceutical chemistry, analysis, and allied sciences.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto mt-12 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, expertise, or research area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:outline-none shadow-sm hover:shadow-md transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            {["current", "2023-2025"].map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBatch(b)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  selectedBatch === b ? "bg-white text-purple-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {b === "current" ? "Current" : b}
              </button>
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
                    selectedCategory === cat.id 
                      ? "bg-purple-600 border-purple-600 text-white" 
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={16} className="inline-block mr-2 mb-0.5" />
                  {cat.label}
                </button>
            )})}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, i) => (
              <div
                key={member.name + i}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <MemberImage member={member} className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white font-bold flex items-center gap-2">
                      View Profile <ChevronRight size={18} />
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">{member.expertise}</p>
                  {member.researchArea && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                      <BookOpen size={14} />
                      <span className="truncate">{member.researchArea}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- FALLBACK COMPONENT --- */
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">No members found</h3>
            <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
              We couldn't find any team members matching <span className="text-purple-600 font-semibold italic">"{searchQuery}"</span> in the <span className="font-semibold">{selectedCategory}</span> category.
            </p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-8 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl border border-gray-200 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

// Simple Chevron for the hover effect
const ChevronRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default TeamMembers;