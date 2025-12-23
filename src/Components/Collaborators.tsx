import { useState, useEffect } from "react";
import {
  Mail,
  Briefcase,
  GraduationCap,
  Users,
  Search,
} from "lucide-react";

const collaboratorsData: { academic: Collaborator[]; industrial: Collaborator[] } = {
  academic: [
    {
      name: "Dr. Sarah Johnson",
      designation: "Professor of Computer Science",
      email: "sarah.johnson@university.edu",
      academic_qualification: "Ph.D. in Machine Learning",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      institution: "Stanford University",
      type: "academic"
    },
    {
      name: "Prof. Michael Chen",
      designation: "Director of AI Research Lab",
      email: "m.chen@university.edu",
      academic_qualification: "Ph.D. in Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      institution: "MIT",
      type: "academic"
    },
    {
      name: "Dr. Emily Rodriguez",
      designation: "Associate Professor",
      email: "emily.rodriguez@university.edu",
      academic_qualification: "Ph.D. in Data Science",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      institution: "UC Berkeley",
      type: "academic"
    },
    {
      name: "Dr. James Park",
      designation: "Research Scientist",
      email: "j.park@university.edu",
      academic_qualification: "Ph.D. in Computer Vision",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      institution: "CMU",
      type: "academic"
    },
    {
      name: "Dr. Lisa Anderson",
      designation: "Principal Investigator",
      email: "lisa.anderson@university.edu",
      academic_qualification: "Ph.D. in Neural Networks",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      institution: "Oxford University",
      type: "academic"
    }
  ],
  industrial: [
    {
      name: "James Wilson",
      designation: "CTO, Tech Innovations Inc.",
      email: "james@techinnovations.com",
      industry_qualification: "15+ years in Software Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      company: "Tech Innovations Inc.",
      type: "industrial"
    },    
    {
      name: "Lisa Kumar",
      designation: "VP Engineering, Digital Solutions",
      email: "lisa@digitalsolutions.com",
      industry_qualification: "12+ years in Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      company: "Digital Solutions",
      type: "industrial"
    },
    {
      name: "David Martinez",
      designation: "Head of R&D, Innovation Labs",
      email: "david@innovationlabs.com",
      industry_qualification: "18+ years in Product Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      company: "Innovation Labs",
      type: "industrial"
    },
    {
      name: "Sarah Thompson",
      designation: "Director of Research, TechCorp",
      email: "sarah@techcorp.com",
      industry_qualification: "14+ years in AI Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      company: "TechCorp",
      type: "industrial"
    }
  ]
};

interface Collaborator {
  name: string;
  designation: string;
  email: string;
  academic_qualification?: string;
  industry_qualification?: string;
  image?: string;
  institution?: string;
  company?: string;
  type: "academic" | "industrial";
}

const Collaborators = () => {
  const [allCollaborators, setAllCollaborators] = useState<Collaborator[]>([]);
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const combined: Collaborator[] = [
      ...collaboratorsData.academic,
      ...collaboratorsData.industrial
    ];
    setAllCollaborators(combined);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageError = (collaboratorName: string) => {
    setFailedImages(prev => new Set(prev).add(collaboratorName));
  };

  const filteredCollaborators = allCollaborators.filter((collab) => {
    const matchesType = selectedType === "all" || collab.type === selectedType;
    const matchesSearch =
      collab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collab.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (collab.institution?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (collab.company?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesType && matchesSearch;
  });

  // Component to render profile image or fallback
  const CollaboratorImage = ({ collaborator }: { collaborator: Collaborator }) => {
    const shouldShowFallback = !collaborator.image || failedImages.has(collaborator.name);

    if (shouldShowFallback) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-indigo-600 font-bold text-lg">{collaborator.name}</p>
          </div>
        </div>
      );
    }

    return (
      <img
        src={collaborator.image}
        alt={collaborator.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        onError={() => handleImageError(collaborator.name)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Header Content */}
        <div className="max-w-7xl mx-auto text-center relative">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl mb-8 group hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-cyan-800 bg-clip-text text-transparent">
                Our Collaborators
              </span>
            </h1>
            
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full mb-8"></div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A global network of brilliant minds from academia and industry working together towards innovation
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-12 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, designation, institution, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:outline-none shadow-sm hover:shadow-md transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Type Selector */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 flex-wrap">
          {["all", "academic", "industrial"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                selectedType === type
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {type === "all"
                ? "All Collaborators"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Collaborators Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollaborators.length > 0 ? (
            filteredCollaborators.map((collaborator, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm"
              >
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-indigo-100 via-cyan-100 to-blue-100">
                  <CollaboratorImage collaborator={collaborator} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                    {collaborator.name}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                    <div className="p-1.5 bg-gray-100 rounded-lg group-hover:bg-indigo-50 transition-colors duration-300">
                      <Briefcase
                        size={14}
                        className="flex-shrink-0 text-indigo-600"
                      />
                    </div>
                    <span className="leading-relaxed">{collaborator.designation}</span>
                  </div>

                  <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
                    <div className="p-1.5 bg-gray-100 rounded-lg group-hover:bg-cyan-50 transition-colors duration-300">
                      <GraduationCap
                        size={14}
                        className="flex-shrink-0 text-cyan-600"
                      />
                    </div>
                    <span className="leading-relaxed">
                      {collaborator.type === "academic"
                        ? collaborator.academic_qualification
                        : collaborator.industry_qualification}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <div className="p-1.5 bg-gray-100 rounded-lg group-hover:bg-indigo-50 transition-colors duration-300">
                      <svg className="w-3.5 h-3.5 flex-shrink-0 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">
                      {collaborator.type === "academic"
                        ? collaborator.institution
                        : collaborator.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`mailto:${collaborator.email}`}
                      className={`flex-1 px-4 py-2 rounded-xl text-xs font-bold text-center transition-all inline-flex items-center justify-center gap-2 ${
                        collaborator.type === "academic"
                          ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 group-hover:bg-indigo-100"
                          : "bg-cyan-50 text-cyan-700 hover:bg-cyan-100 group-hover:bg-cyan-100"
                      }`}
                    >
                      <Mail size={14} />
                      Contact
                    </a>
                    <span className={`px-4 py-2 rounded-xl text-xs font-bold ${
                      collaborator.type === "academic"
                        ? "bg-gray-100 text-indigo-700"
                        : "bg-gray-100 text-cyan-700"
                    }`}>
                      {collaborator.type === "academic" ? "Academic" : "Industry"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 col-span-full">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-2xl mb-6">
                <Users className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                No collaborators found
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

export default Collaborators;