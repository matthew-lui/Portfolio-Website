import React, { useState } from 'react';
import NYCMidtown from './NYCMidtown.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mqkodzoz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div class="flex flex-col md:flex-row items-center justify-center">
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
      <img className="h-80 w-full md:w-auto md:mr-14 md:p-0 md:pl-10" src={NYCMidtown} alt="NYC" />
      <section className="container mx-auto px-4 py-8 pt-36">
        <h2 className="text-2xl font-semibold mb-6 text-center sm:text-3xl">Let's Connect</h2>
        {status === 'success' && (
          <p className="text-green-500 text-center mb-4">Talk to you soon!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center mb-4">
            Error sending message. Please try again.
          </p>
        )}
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
          <div className="mb-2">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              rows="6"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full sm:w-auto">
            Send
          </button>
        </form>
      </section>
    </div>
    </div>
  );
}

export default Contact;
