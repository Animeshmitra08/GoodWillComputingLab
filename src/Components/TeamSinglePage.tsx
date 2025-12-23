import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Briefcase, 
  GraduationCap, 
  Microscope, 
  User, 
  Mail,
} from "lucide-react";
import type { TeamData, TeamMember } from "../types/team";

const TeamPage: React.FC = () => {
  const { memberName } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/teamData.json")
      .then((res) => res.json())
      .then((data: TeamData) => {
        const all = [...data.currentMembers, ...data.newMembers, ...data.alumni];
        const found = all.find(m => m.name === decodeURIComponent(memberName || ""));
        setMember(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [memberName]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading Profile...</div>;
  if (!member) return <div className="min-h-screen flex items-center justify-center">Member not found</div>;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-all mb-12 font-bold"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Research Group
        </button>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Left: Image Section */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center text-purple-200">
                  <User size={100} />
                </div>
              )}
            </div>

            {/* Quick Facts Sidebar */}
            <div className="bg-gray-50 rounded-3xl p-6 space-y-4 border border-gray-100">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Affiliation</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <GraduationCap className="text-purple-600 flex-shrink-0" size={18} />
                  <span className="text-gray-700 font-medium">Batch {member.batch}</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Microscope className="text-indigo-600 flex-shrink-0" size={18} />
                  <span className="text-gray-700 font-medium">{member.expertise}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Content */}
          <div className="flex-grow space-y-8">
            <div className="border-b border-gray-100 pb-8">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
                {member.name}
              </h1>
              {member.currentRole && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-2xl font-bold text-sm">
                  <Briefcase size={16} />
                  {member.currentRole}
                </div>
              )}
            </div>

            {/* Research Focus */}
            {member.researchArea && (
              <div className="space-y-3">
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight flex items-center gap-2">
                   <div className="w-8 h-1 bg-purple-600 rounded-full"></div>
                   Current Research Focus
                </h3>
                <p className="text-2xl font-bold text-purple-800 leading-tight">
                  {member.researchArea}
                </p>
              </div>
            )}

            {/* Biography Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight flex items-center gap-2">
                 <div className="w-8 h-1 bg-indigo-600 rounded-full"></div>
                 Professional Summary
              </h3>
              <div className="relative">
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {member.description || "The detailed research profile and professional summary for this member are currently being finalized and will be updated shortly."}
                </p>
              </div>
            </div>

            {/* Call to Action / Contact */}
            <div className="pt-8">
               <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-purple-700 transition-colors flex items-center gap-3">
                 <Mail size={18} />
                 Contact Researcher
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;