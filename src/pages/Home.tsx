import React from "react";
import ServiceCard from "../components/ServiceCard";
import BussinessImage from "../assets/bussiness_illu.png";
import ContactImage from "../assets/contact_us.png"

const Home: React.FC = () => {
const services = [
  { 
    title: "Consultancy", 
    description: "Professional consultancy services tailored to your business needs, offering strategic guidance, market insights, and actionable solutions to help you grow and stay ahead of the competition." 
  },
  { 
    title: "Real Estate", 
    description: "Comprehensive property services including buying, selling, and investment consultation, ensuring transparent processes, expert advice, and smooth transactions for residential and commercial properties." 
  },
  { 
    title: "Logistics", 
    description: "End-to-end import and export solutions, designed to streamline your supply chain, optimize transportation, and ensure timely delivery, so your business operations run seamlessly across borders." 
  },
];


  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CyberGuard Solutions
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Your trusted partner in Consultancy, Logistics, Real Estate & Import/Export services.
            </p>
            <a
              href="/contact"
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={BussinessImage}
              alt="Business illustration"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={ContactImage}
              alt="About us"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-10 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">About CyberGuard</h2>
            <p className="text-gray-700 mb-4">
              CyberGuard Solutions is a trusted consultancy and service provider, delivering top-notch solutions in logistics, real estate, and international trade. Our mission is to make your business processes seamless and efficient.
            </p>
            <a
              href="/about"
              className="text-indigo-700 font-semibold hover:underline"
            >
              Learn more about us →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
