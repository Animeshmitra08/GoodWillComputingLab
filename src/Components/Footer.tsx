import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { SiLinkedin } from "react-icons/si";
import { MdMailOutline, MdLocationOn } from "react-icons/md";

const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: SiLinkedin, link: "https://www.linkedin.com/in/dr-kalicharan-sharma-11424147/" },
    { Icon: MdMailOutline, link: "mailto:sharmakcpt@gmail.com" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/researches" },
    { name: "Publications", path: "/publications" },
    { name: "Team Members", path: "/group/team-members" },
    { name: "Collaborators", path: "/group/collaborators" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer 
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(./assets/bg2.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main 3-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col space-y-5">
            <div>
              <Link to="/">
                <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  KC Research Group
                </h3>
              </Link>
              <p className="text-xs font-medium text-indigo-300 tracking-widest uppercase">
                Research • Publications
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm max-w-xs">
              A collaborative environment dedicated to exploring the future of computational research and scientific discovery.
            </p>
          </div>

          {/* Column 2: Navigation Links using Link */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <div className="flex space-x-3 mb-2">
              {/* Note: Social icons still use <a> because they are external links */}
              {socialIcons.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl text-white hover:bg-indigo-600 transition-all duration-300 backdrop-blur-md border border-white/10"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center">
                <MdMailOutline className="mr-3 text-indigo-400" size={18} />
                sharmakcpt@gmail.com
              </p>
              <p className="flex items-center">
                <MdLocationOn className="mr-3 text-indigo-400" size={18} />
                I.S.F College of Pharmacy, Moga, Punjab, India
              </p>
            </div>
          </div>
        </div>

        {/* Sub-Footer Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">KC Research Group</span>. 
            All rights reserved.
          </div>

          <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <span className="mr-2 italic text-gray-500">Developed by</span>
            <span className="text-indigo-400 font-bold tracking-tight">Animesh Mitra</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { SiLinkedin } from "react-icons/si";
// import { MdMailOutline } from "react-icons/md";
// // import { FaTwitter } from "react-icons/fa6";

// const Footer: React.FC = () => {
//   const icons = [
//     { Icon: SiLinkedin, link: "https://www.linkedin.com/in/dr-kalicharan-sharma-11424147/" },
//     { Icon: MdMailOutline, link: "mailto:sharmakcpt@gmail.com" },
//   ];

//   return (
//     <footer className="py-16 px-6 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {/* Left Section */}
//           <div className="mb-8 md:mb-0 text-center md:text-left">
//             <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
//               KC Research Group
//             </h3>
//             <p className="text-gray-600">
//               Making computing more accessible for everyone.
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex space-x-6">
//             {icons.map(({ Icon, link }, i) => (
//               <a
//                 key={i}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 bg-gray-100 rounded-2xl text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
//               >
//                 <Icon size={22} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
//           <p>
//             &copy; {new Date().getFullYear()} KC Research Group. All rights reserved.
//             Advancing computing for society.
//           </p>

//           <div className="flex justify-center items-center mt-4 text-sm text-gray-400">
//             <span className="h-px w-10 bg-gray-300 mr-3"></span>
//             Developed by <span className="ml-1 text-gray-600 font-medium">Animesh Mitra</span>
//             <span className="h-px w-10 bg-gray-300 ml-3"></span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;