import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'hair', name: 'Hair Services' },
    { id: 'braiding', name: 'Braiding' },
    { id: 'nails', name: 'Nail Services' },
    { id: 'facial', name: 'Facial Services' }
  ];

  const services = [
    {
      category: 'hair',
      name: 'Women\'s Haircut',
      description: 'Professional cut and style tailored to your face shape',
      price: 'KSH 500',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1560869713-bf165a1ed779?w=300&h=200&fit=crop'
    },
    {
      category: 'hair',
      name: 'Men\'s Haircut',
      description: 'Classic and modern cuts for the modern gentleman',
      price: 'KSH 400',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=200&fit=crop'
    },
    {
      category: 'hair',
      name: 'Hair Coloring',
      description: 'Full color transformation with premium products',
      price: 'KSH 1,200',
      duration: '120 min',
      image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=200&fit=crop'
    },
    {
      category: 'hair',
      name: 'Highlights',
      description: 'Partial or full highlights to brighten your look',
      price: 'KSH 1,400',
      duration: '150 min',
      image: 'https://images.unsplash.com/photo-1529896596740-10c28652f2db?w=300&h=200&fit=crop'
    },
    {
      category: 'braiding',
      name: 'Box Braids',
      description: 'Classic protective box braids in various sizes',
      price: 'KSH 1,600',
      duration: '4-6 hours',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=200&fit=crop'
    },
    {
      category: 'braiding',
      name: 'Cornrows',
      description: 'Traditional cornrow braiding in creative patterns',
      price: 'KSH 1,200',
      duration: '2-3 hours',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
    },
    {
      category: 'braiding',
      name: 'French Braids',
      description: 'Elegant French braids for special occasions',
      price: 'KSH 800',
      duration: '1-2 hours',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop'
    },
    {
      category: 'braiding',
      name: 'Ghana Braids',
      description: 'Beautiful Ghana braids with intricate patterns',
      price: 'KSH 1,800',
      duration: '5-7 hours',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=200&fit=crop'
    },
    {
      category: 'braiding',
      name: 'Twist Braids',
      description: 'Stylish twist braids for a modern look',
      price: 'KSH 1,400',
      duration: '3-4 hours',
      image: 'https://images.unsplash.com/photo-1594736797933-d0d89d87cd89?w=300&h=200&fit=crop'
    },
    {
      category: 'braiding',
      name: 'Fulani Braids',
      description: 'Traditional Fulani braids with beads and accessories',
      price: 'KSH 2,000',
      duration: '6-8 hours',
      image: 'https://images.unsplash.com/photo-1580618671485-2e52e5f0f04d?w=300&h=200&fit=crop'
    },
    {
      category: 'nails',
      name: 'Classic Manicure',
      description: 'Traditional manicure with nail shaping and polish',
      price: 'KSH 300',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=200&fit=crop'
    },
    {
      category: 'nails',
      name: 'Gel Manicure',
      description: 'Long-lasting gel polish manicure',
      price: 'KSH 450',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1610992015782-3b0e2ec94cb4?w=300&h=200&fit=crop'
    },
    {
      category: 'nails',
      name: 'Classic Pedicure',
      description: 'Relaxing foot treatment with nail care and polish',
      price: 'KSH 400',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop'
    },
    {
      category: 'facial',
      name: 'Classic Facial',
      description: 'Deep cleansing facial for all skin types',
      price: 'KSH 800',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=200&fit=crop'
    },
    {
      category: 'facial',
      name: 'Anti-Aging Facial',
      description: 'Advanced treatment to reduce signs of aging',
      price: 'KSH 1,200',
      duration: '75 min',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=200&fit=crop'
    },
    {
      category: 'facial',
      name: 'Eyebrow Shaping',
      description: 'Professional eyebrow waxing and shaping',
      price: 'KSH 250',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop'
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
            Discover our comprehensive range of beauty services including expert braiding
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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="h-32 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-3 text-xs">{service.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-rose-600">{service.price}</span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {service.duration}
                  </div>
                </div>
                <Link
                  to="/appointment"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-3 rounded-lg text-sm font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 block text-center"
                >
                  Book This Service
                </Link>
              </div>
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
