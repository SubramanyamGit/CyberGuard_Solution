import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white w-full h-[50vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl px-6">
          We’d love to hear from you! Reach out to us for any inquiries or
          services.
        </p>
      </section>

      {/* Contact Details & Form */}
      <section className="py-20 w-full flex flex-col md:flex-row gap-10 px-6 md:px-20">
        {/* Contact Details */}
        <div className="md:w-1/3 bg-white rounded-lg p-8 shadow">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-2">
            <span className="font-semibold">Name:</span> Jayanth{" "}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:jaihind29@gmail.com"
              className="text-indigo-700 hover:underline"
            >
              {" "}
              jaihind29@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +353 892335491
          </p>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 bg-white rounded-lg p-8 shadow">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-700 transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-700 transition"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-700 transition"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
               style={{ backgroundColor: '#4F46E5', color: 'white' }}
              className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
