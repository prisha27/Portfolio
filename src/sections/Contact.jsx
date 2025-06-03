import React, { useState, useRef, useEffect } from 'react';
import { Send, MapPin, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (window.location.hash === '#contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitError('');
    if (!validateForm()) return;

    setIsSubmitting(true);

    const SERVICE_ID ='service_ozzjt3r';
    const TEMPLATE_ID ='template_dag0e5h';
    const USER_ID = 'HIenRvkaaQT0zD8sR'
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});

        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitError('Failed to send the message. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Feel free to contact me!</p>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-300 rounded-lg">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-800/30 text-red-700 dark:text-red-300 rounded-lg">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white shadow-lg hover:shadow-blue-500/20`}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A7.96 7.96 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-lg mr-4">
                    <MapPin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Jamshedpur, Jharkhand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-lg mr-4">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">prishasinghxic16@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
