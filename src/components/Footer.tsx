import React from 'react';
import { MessageCircle, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <MessageCircle className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">LiLi Desk</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your customer support with our powerful, easy-to-use platform. 
              Join thousands of companies delivering exceptional customer experiences.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe to our newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest updates, tips, and industry insights.</p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col md:items-end">
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Legal</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2024 LiLi Desk. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Made with ❤️ for amazing support teams
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;