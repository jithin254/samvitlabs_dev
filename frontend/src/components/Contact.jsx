import React, { useState } from 'react';
import { Calendar, Send, Clock, CheckCircle, Mail, Building, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { mockBookingSlots } from '../mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    company: '',
    selectedSlot: null
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingData.selectedSlot) {
      toast.error('Please select a time slot');
      return;
    }
    console.log('Booking submitted:', bookingData);
    toast.success('Consultation scheduled! Check your email for confirmation.');
    setBookingData({ name: '', email: '', company: '', selectedSlot: null });
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200">
            Get Started
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can accelerate your AI journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-10 hover:border-cyan-400/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-3xl transition-all duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send us a message</h3>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" /> Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-300 mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4" /> Company
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Booking Scheduler */}
          <div className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-10 hover:border-purple-400/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Schedule a consultation</h3>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full mb-8 border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 py-6 rounded-xl font-semibold transition-all"
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    View Available Slots
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-gray-900 border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">Select a Time Slot</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {mockBookingSlots.map((slot, index) => (
                      <button
                        key={index}
                        disabled={!slot.available}
                        onClick={() => setBookingData({ ...bookingData, selectedSlot: slot })}
                        className={`p-5 rounded-xl border-2 transition-all duration-300 ${
                          !slot.available 
                            ? 'border-gray-700 bg-gray-800/50 text-gray-500 cursor-not-allowed'
                            : bookingData.selectedSlot === slot
                            ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-white shadow-lg shadow-cyan-500/20'
                            : 'border-white/20 bg-white/5 text-white hover:border-cyan-400/50 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-sm font-semibold mb-1">{slot.date}</div>
                        <div className="text-lg font-bold">{slot.time}</div>
                        {!slot.available && <div className="text-xs mt-1">Booked</div>}
                      </button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="booking-name" className="text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" /> Name
                  </Label>
                  <Input
                    id="booking-name"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="booking-email" className="text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </Label>
                  <Input
                    id="booking-email"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="booking-company" className="text-gray-300 mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4" /> Company
                  </Label>
                  <Input
                    id="booking-company"
                    value={bookingData.company}
                    onChange={(e) => setBookingData({ ...bookingData, company: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 transition-all"
                    placeholder="Your company"
                  />
                </div>
                {bookingData.selectedSlot && (
                  <div className="flex items-center gap-3 p-5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white">{bookingData.selectedSlot.date}</p>
                      <p className="text-sm text-cyan-300">{bookingData.selectedSlot.time}</p>
                    </div>
                  </div>
                )}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
                >
                  Confirm Booking
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
