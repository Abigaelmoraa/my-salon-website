
import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Appointment = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    service: '',
    date: '',
    time: '',
    stylist: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = [
    { name: "Women's Haircut", price: 45, duration: 45 },
    { name: "Men's Haircut", price: 35, duration: 30 },
    { name: "Hair Coloring", price: 80, duration: 120 },
    { name: "Highlights", price: 95, duration: 150 },
    { name: "Manicure", price: 25, duration: 30 },
    { name: "Pedicure", price: 30, duration: 45 },
    { name: "Facial Treatment", price: 60, duration: 60 },
    { name: "Eyebrow Shaping", price: 20, duration: 15 }
  ];

  const stylists = [
    { name: 'Sarah Johnson', specialty: 'Hair Styling & Color' },
    { name: 'Maria Garcia', specialty: 'Bridal & Events' },
    { name: 'Jessica Chen', specialty: 'Nail Services' },
    { name: 'Amanda Wilson', specialty: 'Skincare & Facials' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', appointmentData);
    toast({
      title: "Appointment Booked!",
      description: "Your appointment has been scheduled. You'll receive a confirmation email shortly.",
    });
    
    // Redirect to payment after successful booking
    setTimeout(() => {
      window.location.href = '/payment';
    }, 2000);
  };

  const selectedService = services.find(s => s.name === appointmentData.service);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600">Follow the simple steps to schedule your visit</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber 
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-20 h-1 ${
                    step > stepNumber ? 'bg-gradient-to-r from-rose-500 to-pink-500' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-center space-x-16 mt-4">
            <span className={`text-sm font-medium ${step >= 1 ? 'text-rose-600' : 'text-gray-500'}`}>
              Service & Time
            </span>
            <span className={`text-sm font-medium ${step >= 2 ? 'text-rose-600' : 'text-gray-500'}`}>
              Stylist
            </span>
            <span className={`text-sm font-medium ${step >= 3 ? 'text-rose-600' : 'text-gray-500'}`}>
              Contact Info
            </span>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service & Time */}
            {step === 1 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Service & Time</h2>
                
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Choose Your Service
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.name}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          appointmentData.service === service.name
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-gray-200 hover:border-rose-300'
                        }`}
                        onClick={() => setAppointmentData({...appointmentData, service: service.name})}
                      >
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-rose-600 font-bold">${service.price}</p>
                        <p className="text-gray-500 text-sm">{service.duration} minutes</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={appointmentData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-2" />
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={appointmentData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Stylist Selection */}
            {step === 2 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Stylist</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {stylists.map((stylist) => (
                    <div
                      key={stylist.name}
                      className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        appointmentData.stylist === stylist.name
                          ? 'border-rose-500 bg-rose-50'
                          : 'border-gray-200 hover:border-rose-300'
                      }`}
                      onClick={() => setAppointmentData({...appointmentData, stylist: stylist.name})}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{stylist.name}</h3>
                          <p className="text-gray-600 text-sm">{stylist.specialty}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      appointmentData.stylist === 'Any Available'
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-rose-300'
                    }`}
                    onClick={() => setAppointmentData({...appointmentData, stylist: 'Any Available'})}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-gray-400 to-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-xl">✨</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Any Available</h3>
                        <p className="text-gray-600 text-sm">First available stylist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
                
                {/* Appointment Summary */}
                <div className="bg-rose-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Appointment Summary</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Service:</span> {appointmentData.service}</p>
                    <p><span className="font-medium">Date:</span> {appointmentData.date}</p>
                    <p><span className="font-medium">Time:</span> {appointmentData.time}</p>
                    <p><span className="font-medium">Stylist:</span> {appointmentData.stylist}</p>
                    {selectedService && (
                      <p><span className="font-medium">Price:</span> ${selectedService.price}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={appointmentData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={appointmentData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={appointmentData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={appointmentData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                    placeholder="Any special requests or notes for your stylist..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Back
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={
                    (step === 1 && (!appointmentData.service || !appointmentData.date || !appointmentData.time)) ||
                    (step === 2 && !appointmentData.stylist)
                  }
                  className="ml-auto px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                >
                  Book Appointment
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
