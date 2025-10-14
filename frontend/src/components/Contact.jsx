import React, { useState } from 'react';
import { Calendar, Send, Clock, CheckCircle } from 'lucide-react';
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
    // Mock submission
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
    // Mock booking
    console.log('Booking submitted:', bookingData);
    toast.success('Consultation scheduled! Check your email for confirmation.');
    setBookingData({ name: '', email: '', company: '', selectedSlot: null });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-6xl font-light tracking-tight mb-4 text-center"
          style={{ fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Get Started
        </h2>
        <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
          Let's discuss how we can accelerate your AI journey
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-6 h-6" />
              <h3 className="text-2xl font-light">Send us a message</h3>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Booking Scheduler */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6" />
              <h3 className="text-2xl font-light">Schedule a consultation</h3>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full mb-6 border-2 border-gray-300 hover:border-black transition-all duration-300"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  View Available Slots
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-light">Select a Time Slot</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {mockBookingSlots.map((slot, index) => (
                    <button
                      key={index}
                      disabled={!slot.available}
                      onClick={() => setBookingData({ ...bookingData, selectedSlot: slot })}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        !slot.available 
                          ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                          : bookingData.selectedSlot === slot
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      <div className="text-sm font-medium">{slot.date}</div>
                      <div className="text-lg">{slot.time}</div>
                      {!slot.available && <div className="text-xs mt-1">Booked</div>}
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <Label htmlFor="booking-name">Name</Label>
                <Input
                  id="booking-name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="booking-email">Email</Label>
                <Input
                  id="booking-email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="booking-company">Company</Label>
                <Input
                  id="booking-company"
                  value={bookingData.company}
                  onChange={(e) => setBookingData({ ...bookingData, company: e.target.value })}
                  className="mt-2"
                />
              </div>
              {bookingData.selectedSlot && (
                <div className="flex items-center gap-2 p-4 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Selected: {bookingData.selectedSlot.date}</p>
                    <p className="text-sm text-gray-500">{bookingData.selectedSlot.time}</p>
                  </div>
                </div>
              )}
              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-gray-800 text-white transition-all duration-300 hover:scale-105"
              >
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
