
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Clock, Contact, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-2 rounded-full">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Abby Salon</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Transform your look with our premium salon services. Beauty redefined since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">📘</a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">📷</a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">🐦</a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">📌</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-rose-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-rose-400 transition-colors">Services</Link></li>
              <li><Link to="/appointment" className="text-gray-300 hover:text-rose-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-rose-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Hair Cut & Style</span></li>
              <li><span className="text-gray-300">Hair Coloring</span></li>
              <li><span className="text-gray-300">Braiding Services</span></li>
              <li><span className="text-gray-300">Manicure & Pedicure</span></li>
              <li><span className="text-gray-300">Facial Treatments</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-rose-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">123 Beauty Boulevard</p>
                  <p className="text-gray-300">Salon District, SD 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Contact className="h-5 w-5 text-rose-400" />
                <p className="text-gray-300">0700747101</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-rose-400">✉️</span>
                <p className="text-gray-300">abigaelmoraa100@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-rose-400" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 9AM-7PM</p>
                  <p className="text-gray-300">Sat-Sun: 8AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Abby Salon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-rose-400 text-sm transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
