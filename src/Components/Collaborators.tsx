import { useEffect, useState } from "react";
import { Mail, Briefcase, GraduationCap, Users, Search } from "lucide-react";
import collaborators from "../jsonData/collaboration.json";

interface Collaborator {
  name: string;
  designation: string;
  email: string;
  academic_qualification?: string;
  industry_qualification?: string;
  image?: string;
}

interface CollaboratorData {
  academic: Collaborator[];
  industrial: Collaborator[];
}

const Collaborators = () => {
  const [academicList, setAcademicList] = useState<Collaborator[]>([]);
  const [industrialList, setIndustrialList] = useState<Collaborator[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const data = collaborators as CollaboratorData;
    setAcademicList(data.academic);
    setIndustrialList(data.industrial);
  }, []);

  const categories = [
    { id: "all", label: "All Collaborators", icon: Users },
    { id: "academic", label: "Academic", icon: GraduationCap },
    { id: "industrial", label: "Industrial", icon: Briefcase }
  ];

  const filterCollaborators = () => {
    let filtered: Collaborator[] = [];

    if (selectedCategory === "all" || selectedCategory === "academic") {
      filtered = [...filtered, ...academicList];
    }
    if (selectedCategory === "all" || selectedCategory === "industrial") {
      filtered = [...filtered, ...industrialList];
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.designation.toLowerCase().includes(query) ||
          item.email.toLowerCase().includes(query) ||
          item.academic_qualification?.toLowerCase().includes(query) ||
          item.industry_qualification?.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const filteredCollaborators = filterCollaborators();

  const CollaboratorCard = ({ item, isAcademic }: { item: Collaborator; isAcademic: boolean }) => (
    <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-24 h-24 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                      <svg class="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="text-purple-600 font-bold text-lg">${item.name}</p>
                  </div>
                </div>
              `;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-purple-600 font-bold text-lg">{item.name}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
          {item.name}
        </h3>

        <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
          <div className="p-1.5 bg-gray-100 rounded-lg group-hover:bg-purple-50 transition-colors duration-300">
            <Briefcase size={14} className="flex-shrink-0 text-purple-600" />
          </div>
          <span className="leading-relaxed">{item.designation}</span>
        </div>

        {(item.academic_qualification || item.industry_qualification) && (
          <div className="flex items-start gap-2 mb-4 text-sm text-gray-600">
            <div className="p-1.5 bg-gray-100 rounded-lg group-hover:bg-indigo-50 transition-colors duration-300">
              <GraduationCap size={14} className="flex-shrink-0 text-indigo-600" />
            </div>
            <span className="leading-relaxed">
              {item.academic_qualification || item.industry_qualification}
            </span>
          </div>
        )}

        <a
          href={`mailto:${item.email}`}
          className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-300 mb-4"
        >
          <Mail size={14} />
          {item.email}
        </a>

        <div className="flex flex-wrap gap-2">
          <span className={`px-4 py-1.5 text-xs font-bold rounded-full transition-colors duration-300 ${
            isAcademic
              ? "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-50"
              : "bg-purple-100 text-purple-700 group-hover:bg-purple-50"
          }`}>
            {isAcademic ? "Academic" : "Industrial"}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
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
              A diverse group of passionate researchers and industry experts pushing the boundaries of innovation and excellence
            </p>

            {/* Search Bar */}
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
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
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

      {/* Collaborators Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollaborators.length > 0 ? (
            filteredCollaborators.map((collaborator, index) => (
              <CollaboratorCard
                key={index}
                item={collaborator}
                isAcademic={academicList.includes(collaborator)}
              />
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