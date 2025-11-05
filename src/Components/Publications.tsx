import { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, Award, TrendingUp, Search, Filter, ChevronDown, BookMarked, FileText } from 'lucide-react';
import { publicationsData } from "../jsonData/Publication.json";

const bookChaptersData = [
  {
    authors: "Reang, J.; Yadav, V.; Vinita; Majeed, J.; Sharma, P. C.; Tonk, R. K.; Sharma, K.",
    title: "Informatics: Tools and Databases in Drug Discovery",
    book: "CADD and Informatics in Drug Discovery",
    editors: "Rudrapal, M.; Khan, J., Eds.",
    publisher: "Springer Nature Singapore",
    location: "Singapore",
    year: 2023,
    pages: "53-77",
    doi: "#"
  },
  {
    authors: "Majeed, J.; Reang, J.; Sharma, K.; Acharya, P. C.; Chander Sharma, P.",
    title: "Chapter 12 - Antiamoebic drugs",
    book: "Medicinal Chemistry of Chemotherapeutic Agents",
    editors: "Acharya, P. C.; Kurosu, M., Eds.",
    publisher: "Academic Press",
    location: "",
    year: 2023,
    pages: "397-429",
    doi: "#"
  },
  {
    authors: "Sharma, P.; Sharma, K.; Nandave, M.",
    title: "Chapter 2 - Computational approaches in drug discovery and design",
    book: "Computational Approaches in Drug Discovery, Development and Systems Pharmacology",
    editors: "Gautam, R. K.; Kamal, M. A.; Mittal, P., Eds.",
    publisher: "Academic Press",
    location: "",
    year: 2023,
    pages: "53-93",
    doi: "#"
  }
];

const patentsData = [
  {
    inventors: "Rai, Santosh Kumar, Patil, Rakesh Iswar, Roy, Somnath Singha, Sharma, Kalicharan, Dwivedi, Rahul, Bapuram, Srinivasa Reddy, Kumar, Anil.",
    title: "Novel apoptosis signal regulation kinase inhibitors",
    assignee: "Mankind Pharma Ltd., India",
    pubNumber: "US 2022/0332700 A1",
    grantDate: "20/10/2022",
    link: "#"
  }
];

const Publications = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [displayCount, setDisplayCount] = useState(10);
  const [selectedYear, setSelectedYear] = useState('all');
  const [activeTab, setActiveTab] = useState('publications');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filter and sort publications
  const filteredAndSortedPubs = publicationsData
    .filter(pub => {
      const matchesSearch = 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
      
      return matchesSearch && matchesYear;
    });

  const displayedPubs = filteredAndSortedPubs.slice(0, displayCount);
  const hasMore = displayCount < filteredAndSortedPubs.length;

  const totalIF = publicationsData.reduce((sum, pub) => sum + parseFloat(pub.if), 0);
  const avgIF = (totalIF / publicationsData.length).toFixed(1);

  const years = ['all', ...new Set(publicationsData.map(pub => pub.year.toString()))];

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 10, filteredAndSortedPubs.length));
  };

  const resetFilters = () => {
    setDisplayCount(10);
    setSearchTerm('');
    setSelectedYear('all');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-8 group hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
                {/* Research Portfolio */}
                Publications
              </span>
            </h1>
            
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mb-8"></div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Research contributions, book chapters, and patents advancing pharmaceutical innovation
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="bg-white rounded-2xl px-8 py-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-2 text-purple-600 mb-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm font-semibold">Publications</span>
                </div>
                <p className="text-4xl font-black text-gray-900">{publicationsData.length}</p>
              </div>
              <div className="bg-white rounded-2xl px-8 py-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-2 text-indigo-600 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">Avg Impact Factor</span>
                </div>
                <p className="text-4xl font-black text-gray-900">{avgIF}</p>
              </div>
              <div className="bg-white rounded-2xl px-8 py-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-2 text-pink-600 mb-2">
                  <BookMarked className="w-5 h-5" />
                  <span className="text-sm font-semibold">Book Chapters</span>
                </div>
                <p className="text-4xl font-black text-gray-900">{bookChaptersData.length}</p>
              </div>
              <div className="bg-white rounded-2xl px-8 py-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-2 text-emerald-600 mb-2">
                  <FileText className="w-5 h-5" />
                  <span className="text-sm font-semibold">Patents</span>
                </div>
                <p className="text-4xl font-black text-gray-900">{patentsData.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => { setActiveTab('publications'); resetFilters(); }}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeTab === 'publications'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Journal Publications</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('chapters')}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeTab === 'chapters'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5" />
                <span>Book Chapters</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('patents')}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeTab === 'patents'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Patents</span>
              </div>
            </button>
          </div>

          {/* Search and Filter - Only for Publications */}
          {activeTab === 'publications' && (
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by title, author, or journal..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="pl-12 pr-10 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white cursor-pointer"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>
                        {year === 'all' ? 'All Years' : year}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-6 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="if-high">Highest IF</option>
                  <option value="if-low">Lowest IF</option>
                </select>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Showing {displayedPubs.length} of {filteredAndSortedPubs.length} publications
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Publications Tab */}
          {activeTab === 'publications' && (
            <>
              <div className="space-y-6">
                {displayedPubs.map((pub, index) => (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black rounded-2xl text-lg group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-2xl group-hover:bg-purple-50 transition-colors duration-300">
                        <Award className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-bold text-gray-900">
                          IF: {pub.if}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {pub.authors}
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 leading-relaxed group-hover:text-purple-700 transition-colors duration-300">
                      {pub.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-5">
                      <span className="font-semibold text-purple-600">{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      <span>•</span>
                      <span>Volume {pub.volume}{pub.issue ? ` (${pub.issue})` : ''}</span>
                      <span>•</span>
                      <span>{pub.pages}</span>
                    </div>

                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <span className="text-sm">View Publication</span>
                      <ExternalLink className={`w-4 h-4 transition-transform ${hoveredIndex === index ? 'translate-x-1 -translate-y-1' : ''}`} />
                    </a>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span>Load More Publications</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  <p className="mt-4 text-sm text-gray-600">
                    {filteredAndSortedPubs.length - displayCount} more publications available
                  </p>
                </div>
              )}

              {filteredAndSortedPubs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No publications found matching your criteria.</p>
                </div>
              )}
            </>
          )}

          {/* Book Chapters Tab */}
          {activeTab === 'chapters' && (
            <div className="space-y-6">
              {bookChaptersData.map((chapter, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black rounded-2xl text-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {chapter.authors}
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 leading-relaxed group-hover:text-pink-700 transition-colors duration-300">
                    {chapter.title}
                  </h3>

                  <div className="space-y-2 mb-5">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-pink-600">In:</span> {chapter.book}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Editors:</span> {chapter.editors}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                      <span className="font-semibold">{chapter.publisher}</span>
                      {chapter.location && (
                        <>
                          <span>•</span>
                          <span>{chapter.location}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>{chapter.year}</span>
                      <span>•</span>
                      <span>pp. {chapter.pages}</span>
                    </div>
                  </div>

                  {chapter.doi !== '#' && (
                    <a
                      href={chapter.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white font-bold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <span className="text-sm">View Chapter</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Patents Tab */}
          {activeTab === 'patents' && (
            <div className="space-y-6">
              {patentsData.map((patent, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black rounded-2xl text-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    <span className="font-semibold">Inventors:</span> {patent.inventors}
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 leading-relaxed group-hover:text-emerald-700 transition-colors duration-300">
                    {patent.title}
                  </h3>

                  <div className="space-y-2 mb-5">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-emerald-600">Assignee:</span> {patent.assignee}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                      <span><span className="font-semibold">Pub No.:</span> {patent.pubNumber}</span>
                      <span>•</span>
                      <span><span className="font-semibold">Grant Date:</span> {patent.grantDate}</span>
                    </div>
                  </div>

                  {patent.link !== '#' && (
                    <a
                      href={patent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl text-white font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <span className="text-sm">View Patent</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;