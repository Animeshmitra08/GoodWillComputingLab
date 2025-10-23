import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const icons = [
    { Icon: SiGithub, link: "https://github.com/" },
    { Icon: FaTwitter, link: "https://twitter.com/" },
    { Icon: SiLinkedin, link: "https://linkedin.com/" },
    { Icon: MdMailOutline, link: "mailto:contact@kcsresearch.org" },
  ];

  return (
    <footer className="py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              KCS Research Group
            </h3>
            <p className="text-gray-600">
              Making computing more accessible for everyone.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {icons.map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-2xl text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} KCS Research Group. All rights
            reserved. Advancing computing for society.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;