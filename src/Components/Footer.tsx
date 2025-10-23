import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
    {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                KCS Research Group
              </h3>
              <p className="text-gray-600">Making computing more accessible for everyone.</p>
            </div>
            
            <div className="flex space-x-6">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="p-3 bg-gray-100 rounded-2xl text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} KCS Research Group. All rights reserved. Advancing computing for society.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer