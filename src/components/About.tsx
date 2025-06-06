import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Master Stylist',
      experience: '15 years',
      specialty: 'Color & Cuts',
      image: '👩‍💼'
    },
    {
      name: 'Maria Garcia',
      role: 'Senior Stylist',
      experience: '10 years',
      specialty: 'Bridal & Events',
      image: '👩‍🎨'
    },
    {
      name: 'Jessica Chen',
      role: 'Nail Technician',
      experience: '8 years',
      specialty: 'Nail Art',
      image: '👩‍💻'
    },
    {
      name: 'Amanda Wilson',
      role: 'Aesthetician',
      experience: '12 years',
      specialty: 'Skincare',
      image: '👩‍⚕️'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Abby Salon</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2024, we've been dedicated to helping our clients look and feel their absolute best
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2024, Abby Salon began as a small neighborhood beauty shop with a big dream: 
                to create a space where everyone could feel beautiful, confident, and pampered.
              </p>
              <p>
                What started as a single chair operation has grown into a full-service salon offering 
                everything from cutting-edge hair styling to relaxing spa treatments. Our success comes 
                from our unwavering commitment to excellence and our genuine care for each client who 
                walks through our doors.
              </p>
              <p>
                Today, we continue to stay at the forefront of beauty trends while maintaining the 
                personal touch and warm atmosphere that our clients have come to love and expect.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional beauty services in a welcoming environment where every client 
              leaves feeling more beautiful and confident than when they arrived.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every service we provide, using only the highest quality products and techniques.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Care</h3>
              <p className="text-gray-600">
                Every client is treated like family, with personalized attention and genuine care for their unique needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay current with the latest trends and techniques to offer our clients the best in modern beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Our talented professionals are here to make you look and feel amazing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-rose-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.experience} experience</p>
                <p className="text-gray-500 text-sm">Specialty: {member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
