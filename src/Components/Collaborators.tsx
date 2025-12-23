import { useState, useEffect } from "react";
import {
  Mail,
  Briefcase,
  GraduationCap,
  Users,
  Search,
} from "lucide-react";

// Updated Data with your provided collaborators
const collaboratorsData: { academic: Collaborator[]; industrial: Collaborator[] } = {
  academic: [
    {
      name: "Prof. (Dr) Mymoona Akhter",
      designation: "Professor and Director",
      email: "mymoonaakhter@gmail.com",
      academic_qualification: "M. Pharm (Pharmaceutical Chemistry), PhD",
      institution: "Jamia Hamdard",
      image: "", // Add image URL if available
      type: "academic"
    },
    {
      name: "Prof. (Dr) Ramesh K. Goyal",
      designation: "Honorable ex Vice-Chancellor & Professor",
      email: "goyalrk@gmail.com",
      academic_qualification: "B.Sc. (Hon.), M.Sc. (Medical), Ph.D. (Pharmacy)",
      institution: "DPSRU",
      image: "",
      type: "academic"
    },
    {
      name: "Prof. (Dr) Ajay Sharma",
      designation: "Officiating Director, SPS & Director IQAC",
      email: "asharma@dpsru.edu.in",
      academic_qualification: "M. Pharm, PhD, Post-Doctorate",
      institution: "DPSRU",
      image: "",
      type: "academic"
    },
    {
      name: "Dr. Arya Lakshmi Marisetti",
      designation: "Assistant Professor",
      email: "maryalakshmi@dpsru.edu.in",
      academic_qualification: "Ph.D.",
      institution: "DPSRU",
      image: "",
      type: "academic"
    },
    {
      name: "Dr. Anoop Kumar",
      designation: "Assistant Professor",
      email: "anoopdpsru@dpsru.edu.in",
      academic_qualification: "M.Pharm, PhD (Pharmacy)",
      institution: "DPSRU",
      image: "",
      type: "academic"
    },
    {
      name: "Dr. Omprakash Tanwar",
      designation: "Assistant Professor, Dept. of Pharmacy",
      email: "otanwar@sgstis.ac.in",
      academic_qualification: "PhD",
      institution: "SGSITS, Indore",
      image: "",
      type: "academic"
    }
  ],
  industrial: [
    {
      name: "REMEDIUM THERAPEUTICS",
      company: "Remedium Therapeutics Inc.",
      website: "https://remediumtherapeutics.com/",
      type: "industrial"
    },
    {
      name: "VGENOMICS",
      company: "VGENOMICS",
      website: "https://vgenomics.in/",
      type: "industrial"
    }
  ]
};

interface Collaborator {
  name: string;
  designation?: string;
  email?: string;
  website?: string;
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
      (collab.designation?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (collab.institution?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (collab.company?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesType && matchesSearch;
  });

  const CollaboratorImage = ({ collaborator }: { collaborator: Collaborator }) => {
    const shouldShowFallback = !collaborator.image || failedImages.has(collaborator.name);

    if (shouldShowFallback) {
      return (
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg border-4 border-indigo-50">
              <Users className="w-12 h-12 text-indigo-400" />
            </div>
            <p className="text-indigo-900 font-bold text-xl leading-tight px-4">{collaborator.name}</p>
            <p className="text-indigo-500 text-sm mt-2 font-medium">
                {collaborator.institution || collaborator.company}
            </p>
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
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl mb-8">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-cyan-800 bg-clip-text text-transparent">
                Expert Collaborators
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between pharmaceutical research and clinical excellence through strategic partnerships.
            </p>

            <div className="max-w-2xl mx-auto mt-12 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, institution, or qualification..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 focus:border-indigo-500 focus:outline-none shadow-sm transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 flex-wrap">
          {["all", "academic", "industrial"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                selectedType === type
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-300"
              }`}
            >
              {type === "all" ? "All Experts" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollaborators.length > 0 ? (
            filteredCollaborators.map((collaborator, index) => {
              const isAcademic = collaborator.type === "academic";

              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-indigo-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm flex flex-col"
                >
                  {/* Top Visual Section */}
                  <div className={`relative ${isAcademic ? 'h-64' : 'h-48'} overflow-hidden bg-gradient-to-br ${isAcademic ? 'from-indigo-50 to-blue-50' : 'from-cyan-50 to-emerald-50'}`}>
                    <CollaboratorImage collaborator={collaborator} />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h3 className={`text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 ${isAcademic ? 'group-hover:text-indigo-700' : 'group-hover:text-cyan-700'}`}>
                        {collaborator.name}
                      </h3>
                      
                      <p className={`text-sm font-semibold mb-4 ${isAcademic ? 'text-indigo-600' : 'text-cyan-600'}`}>
                        {isAcademic ? collaborator.institution : "Industrial Partner"}
                      </p>
                      
                      {/* Detailed Info for Academic only */}
                      {isAcademic ? (
                        <div className="space-y-3 mb-6">
                          <div className="flex items-start gap-3 text-sm text-gray-600">
                            <Briefcase size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{collaborator.designation}</span>
                          </div>
                          <div className="flex items-start gap-3 text-sm text-gray-600">
                            <GraduationCap size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{collaborator.academic_qualification}</span>
                          </div>
                        </div>
                      ) : (
                        /* Minimalist view for Industrial */
                        <div className="mb-6">
                          <p className="text-sm text-gray-500 italic">
                            Strategic collaboration in pharmaceutical innovation and research development.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-gray-100">
                      {isAcademic ? (
                        <a
                          href={`mailto:${collaborator.email}`}
                          className="w-full px-4 py-3 rounded-xl text-xs font-bold text-center bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                          <Mail size={14} />
                          Email Expert
                        </a>
                      ) : (
                        <a
                          href={collaborator.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 py-3 rounded-xl text-xs font-bold text-center bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Search size={14} />
                          Visit Company Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 col-span-full">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">No matches found</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collaborators;