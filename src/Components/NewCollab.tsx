import { useEffect, useState } from "react";
import { Mail, Briefcase, GraduationCap, Users, Search, X, ExternalLink } from "lucide-react";

// Mock data - replace with your actual import
const collaborators = {
  academic: [
    {
      name: "Dr. Sarah Johnson",
      designation: "Professor of Computer Science",
      email: "sarah.johnson@university.edu",
      academic_qualification: "Ph.D. in Machine Learning, Stanford University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      institution: "Stanford University"
    },
    {
      name: "Prof. Michael Chen",
      designation: "Director of AI Research Lab",
      email: "m.chen@university.edu",
      academic_qualification: "Ph.D. in Artificial Intelligence, MIT",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      institution: "MIT"
    },
    {
      name: "Dr. Emily Rodriguez",
      designation: "Associate Professor",
      email: "emily.rodriguez@university.edu",
      academic_qualification: "Ph.D. in Data Science, UC Berkeley",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      institution: "UC Berkeley"
    },
    {
      name: "Dr. James Park",
      designation: "Research Scientist",
      email: "j.park@university.edu",
      academic_qualification: "Ph.D. in Computer Vision, CMU",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      institution: "CMU"
    },
    {
      name: "Dr. Lisa Anderson",
      designation: "Principal Investigator",
      email: "lisa.anderson@university.edu",
      academic_qualification: "Ph.D. in Neural Networks, Oxford",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      institution: "Oxford University"
    }
  ],
  industrial: [
    {
      name: "James Wilson",
      designation: "CTO, Tech Innovations Inc.",
      email: "james@techinnovations.com",
      industry_qualification: "15+ years in Software Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      company: "Tech Innovations Inc."
    },
    {
      name: "Lisa Kumar",
      designation: "VP Engineering, Digital Solutions",
      email: "lisa@digitalsolutions.com",
      industry_qualification: "12+ years in Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      company: "Digital Solutions"
    },
    {
      name: "David Martinez",
      designation: "Head of R&D, Innovation Labs",
      email: "david@innovationlabs.com",
      industry_qualification: "18+ years in Product Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      company: "Innovation Labs"
    },
    {
      name: "Sarah Thompson",
      designation: "Director of Research, TechCorp",
      email: "sarah@techcorp.com",
      industry_qualification: "14+ years in AI Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      company: "TechCorp"
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
}

interface CollaboratorWithType extends Collaborator {
  type: "academic" | "industrial";
}

const NewCollab = () => {
  const [allCollaborators, setAllCollaborators] = useState<CollaboratorWithType[]>([]);
  const [selectedCollaborator, setSelectedCollaborator] = useState<CollaboratorWithType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const data = collaborators as any;
    
    const combined: CollaboratorWithType[] = [
      ...data.academic.map((c: Collaborator) => ({ ...c, type: "academic" as const })),
      ...data.industrial.map((c: Collaborator) => ({ ...c, type: "industrial" as const }))
    ];
    
    setAllCollaborators(combined);
  }, []);

  const filteredCollaborators = allCollaborators.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate random positions for nodes
  const getNodePosition = (index: number) => {
    const seed = index;
    const angle = (seed * 137.5) % 360;
    const distance = 100 + (seed % 200);
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;
    return { x, y };
  };

  const NodeCircle = ({ collaborator, index }: { collaborator: CollaboratorWithType; index: number }) => {
    const pos = getNodePosition(index);
    const isAcademic = collaborator.type === "academic";

    return (
      <div
        className="absolute cursor-pointer transition-all duration-300"
        style={{
          transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
          left: "50%",
          top: "50%"
        }}
      >
        <div
          onClick={() => setSelectedCollaborator(collaborator)}
          onMouseEnter={() => setSelectedCollaborator(collaborator)}
          className={`relative w-20 h-20 rounded-full border-4 overflow-hidden transition-all duration-300 transform hover:scale-125 hover:shadow-2xl cursor-pointer group ${
            isAcademic
              ? "border-indigo-500 hover:border-indigo-600 shadow-lg shadow-indigo-500/30"
              : "border-purple-500 hover:border-purple-600 shadow-lg shadow-purple-500/30"
          }`}
        >
          {collaborator.image ? (
            <img
              src={collaborator.image}
              alt={collaborator.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${
              isAcademic ? "bg-indigo-100" : "bg-purple-100"
            }`}>
              <svg className={`w-10 h-10 ${isAcademic ? "text-indigo-600" : "text-purple-600"}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}

          {/* Badge */}
          <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center border-2 border-white text-white text-xs font-bold transition-all duration-300 ${
            isAcademic
              ? "bg-indigo-600 group-hover:bg-indigo-700"
              : "bg-purple-600 group-hover:bg-purple-700"
          }`}>
            {isAcademic ? "A" : "I"}
          </div>
        </div>

        {/* Tooltip on hover */}
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-xl">
            {collaborator.name}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Header Content */}
        <div className="max-w-7xl mx-auto text-center relative">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-8 group hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
                Our Collaborators
              </span>
            </h1>

            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mb-8"></div>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A diverse network of brilliant minds from academia and industry, connected through shared vision and innovation
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-12 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, expertise, or organization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:outline-none shadow-sm hover:shadow-md transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-indigo-500 bg-indigo-100"></div>
            <span className="text-gray-700 font-semibold">Academic</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-purple-500 bg-purple-100"></div>
            <span className="text-gray-700 font-semibold">Industrial</span>
          </div>
        </div>
      </section>

      {/* Network Visualization */}
      <section className="px-6 pb-24 relative">
        <div className="max-w-6xl mx-auto">
          {/* Connection Lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ height: "600px" }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {filteredCollaborators.map((_, i) => {
              const pos1 = getNodePosition(i);
              return (
                <line
                  key={`line-${i}`}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${pos1.x}px)`}
                  y2={`calc(50% + ${pos1.y}px)`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                />
              );
            })}
          </svg>

          {/* Center Circle */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl z-20">
              <Users className="w-12 h-12 text-white" />
            </div>

            {/* Collaborator Nodes */}
            <div className="relative w-full h-full">
              {filteredCollaborators.length > 0 ? (
                filteredCollaborators.map((collaborator, index) => (
                  <NodeCircle key={`node-${index}`} collaborator={collaborator} index={index} />
                ))
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-lg text-gray-500 font-semibold">No collaborators found</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedCollaborator && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCollaborator(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className={`relative h-64 bg-gradient-to-br overflow-hidden ${
              selectedCollaborator.type === "academic"
                ? "from-indigo-100 via-purple-100 to-pink-100"
                : "from-purple-100 via-pink-100 to-indigo-100"
            }`}>
              {selectedCollaborator.image ? (
                <img
                  src={selectedCollaborator.image}
                  alt={selectedCollaborator.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedCollaborator(null)}
                className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              {/* Type Badge */}
              <div className={`absolute bottom-6 right-6 px-6 py-2 rounded-full font-bold text-white transition-all ${
                selectedCollaborator.type === "academic"
                  ? "bg-indigo-600"
                  : "bg-purple-600"
              }`}>
                {selectedCollaborator.type === "academic" ? "Academic" : "Industrial"}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className={`text-4xl font-bold mb-2 ${
                selectedCollaborator.type === "academic"
                  ? "text-indigo-900"
                  : "text-purple-900"
              }`}>
                {selectedCollaborator.name}
              </h2>

              <p className="text-lg text-gray-600 font-semibold mb-6 flex items-center gap-2">
                <Briefcase className={`w-5 h-5 ${
                  selectedCollaborator.type === "academic" ? "text-indigo-600" : "text-purple-600"
                }`} />
                {selectedCollaborator.designation}
              </p>

              <div className="space-y-6">
                {/* Qualification */}
                <div>
                  <h3 className="flex items-center gap-2 text-gray-900 font-bold text-lg mb-2">
                    <GraduationCap className={`w-5 h-5 ${
                      selectedCollaborator.type === "academic" ? "text-indigo-600" : "text-purple-600"
                    }`} />
                    {selectedCollaborator.type === "academic" ? "Academic Background" : "Professional Experience"}
                  </h3>
                  <p className="text-gray-700 ml-7 leading-relaxed">
                    {selectedCollaborator.type === "academic"
                      ? selectedCollaborator.academic_qualification
                      : selectedCollaborator.industry_qualification}
                  </p>
                </div>

                {/* Organization */}
                <div>
                  <h3 className="flex items-center gap-2 text-gray-900 font-bold text-lg mb-2">
                    <ExternalLink className={`w-5 h-5 ${
                      selectedCollaborator.type === "academic" ? "text-indigo-600" : "text-purple-600"
                    }`} />
                    {selectedCollaborator.type === "academic" ? "Institution" : "Organization"}
                  </h3>
                  <p className="text-gray-700 ml-7 text-lg font-medium">
                    {selectedCollaborator.type === "academic"
                      ? selectedCollaborator.institution
                      : selectedCollaborator.company}
                  </p>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${selectedCollaborator.email}`}
                  className={`inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-2xl font-bold text-white transition-all hover:shadow-lg transform hover:scale-105 ${
                    selectedCollaborator.type === "academic"
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  {selectedCollaborator.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCollab;