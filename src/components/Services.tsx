
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'hair', name: 'Hair Services' },
    { id: 'nails', name: 'Nail Services' },
    { id: 'facial', name: 'Facial Services' },
    { id: 'spa', name: 'Spa Services' }
  ];

  const services = [
    {
      category: 'hair',
      name: 'Women\'s Haircut',
      description: 'Professional cut and style tailored to your face shape and lifestyle',
      price: '$45',
      duration: '45 min',
      image: '💇‍♀️'
    },
    {
      category: 'hair',
      name: 'Men\'s Haircut',
      description: 'Classic and modern cuts for the modern gentleman',
      price: '$35',
      duration: '30 min',
      image: '💇‍♂️'
    },
    {
      category: 'hair',
      name: 'Hair Coloring',
      description: 'Full color transformation with premium color products',
      price: '$80',
      duration: '120 min',
      image: '🎨'
    },
    {
      category: 'hair',
      name: 'Highlights',
      description: 'Partial or full highlights to brighten your look',
      price: '$95',
      duration: '150 min',
      image: '✨'
    },
    {
      category: 'hair',
      name: 'Hair Treatment',
      description: 'Deep conditioning treatment for healthy, shiny hair',
      price: '$40',
      duration: '30 min',
      image: '🌿'
    },
    {
      category: 'nails',
      name: 'Classic Manicure',
      description: 'Traditional manicure with nail shaping and polish',
      price: '$25',
      duration: '30 min',
      image: '💅'
    },
    {
      category: 'nails',
      name: 'Gel Manicure',
      description: 'Long-lasting gel polish manicure',
      price: '$35',
      duration: '45 min',
      image: '💎'
    },
    {
      category: 'nails',
      name: 'Classic Pedicure',
      description: 'Relaxing foot treatment with nail care and polish',
      price: '$30',
      duration: '45 min',
      image: '🦶'
    },
    {
      category: 'nails',
      name: 'Nail Art',
      description: 'Custom nail art designs and decorations',
      price: '$15',
      duration: '20 min',
      image: '🎨'
    },
    {
      category: 'facial',
      name: 'Classic Facial',
      description: 'Deep cleansing facial for all skin types',
      price: '$60',
      duration: '60 min',
      image: '✨'
    },
    {
      category: 'facial',
      name: 'Anti-Aging Facial',
      description: 'Advanced treatment to reduce signs of aging',
      price: '$85',
      duration: '75 min',
      image: '🌟'
    },
    {
      category: 'facial',
      name: 'Acne Treatment',
      description: 'Specialized treatment for acne-prone skin',
      price: '$70',
      duration: '60 min',
      image: '🌱'
    },
    {
      category: 'spa',
      name: 'Eyebrow Shaping',
      description: 'Professional eyebrow waxing and shaping',
      price: '$20',
      duration: '15 min',
      image: '👁️'
    },
    {
      category: 'spa',
      name: 'Eyelash Extensions',
      description: 'Beautiful, natural-looking lash extensions',
      price: '$120',
      duration: '120 min',
      image: '👁️'
    },
    {
      category: 'spa',
      name: 'Makeup Application',
      description: 'Professional makeup for special occasions',
      price: '$50',
      duration: '45 min',
      image: '💄'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness services designed to help you look and feel your best
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-rose-300 hover:text-rose-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-center">{service.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-rose-600">{service.price}</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {service.duration}
                </div>
              </div>
              <Link
                to="/appointment"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 block text-center"
              >
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your appointment today and experience our exceptional services
          </p>
          <Link
            to="/appointment"
            className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
