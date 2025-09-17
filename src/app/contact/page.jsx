import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <section className="bg-gradient-to-r from-orange-700 to-orange-500 text-white text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions? We're here to help. Get in touch with the Beast Life
          team today!
        </p>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-2">📍 Address</h3>
          <p className="text-orange-600">
            123 Fitness Avenue, Beast Tower, Mumbai, India
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-2">📞 Phone</h3>
          <p className="text-orange-600">+91 98765 43210</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-2">📧 Email</h3>
          <p className="text-orange-600">support@beastlife.in</p>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-6">
          Send Us a Message
        </h2>
        <form className="bg-white rounded-xl shadow-md p-6 grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="px-6 pb-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-orange-800 text-center mb-6">
          Our Location
        </h2>
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.450914816197!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM0LjAiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1692700000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
