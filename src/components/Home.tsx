
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Easy Booking',
      description: 'Book your appointments online 24/7'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Flexible Hours',
      description: 'Open 7 days a week with extended hours'
    },
    {
      icon: <User className="h-8 w-8" />,
      title: 'Expert Stylists',
      description: 'Certified professionals with years of experience'
    }
  ];

  const services = [
    { 
      name: 'Hair Cut & Style', 
      price: 'KSH 1,200', 
      image: 'https://.unsplash.com/photo-1560869713-bf165a1ed779?w=300&h=200&fit=crop'
    },
    { 
      name: 'Box Braids', 
      price: 'KSH 3,500', 
      image: 'https://.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=200&fit=crop'
    },
    { 
      name: 'Manicure & Pedicure', 
      price: 'KSH 900', 
      image: 'https://.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=200&fit=crop'
    },
    { 
      name: 'Facial Treatment', 
      price: 'KSH 1,800', 
      image: 'https://.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Abby Salon
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            Beauty & Style
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Transform your look with our premium salon services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Abby Salon?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Discover our most popular treatments</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-rose-600 mb-4">{service.price}</p>
                  <Link
                    to="/appointment"
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 block text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready for a New Look?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and let our experts transform your style
          </p>
          <Link
            to="/appointment"
            className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
