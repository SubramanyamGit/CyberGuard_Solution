import React from "react";
import { BriefcaseIcon, HomeIcon, TruckIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Consultancy",
    description: "Professional consultancy services to optimize your business operations and strategy.",
    icon: <BriefcaseIcon className="h-12 w-12 text-indigo-700 mb-4" />,
  },
  {
    title: "Real Estate",
    description: "Property buy & sell with transparency and expert guidance.",
    icon: <HomeIcon className="h-12 w-12 text-indigo-700 mb-4" />,
  },
  {
    title: "Logistics",
    description: "Efficient import & export solutions for seamless supply chain management.",
    icon: <TruckIcon className="h-12 w-12 text-indigo-700 mb-4" />,
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            At CyberGuard Solutions, we offer a wide range of services to help your business grow and succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow hover:shadow-2xl hover:scale-105 transform transition duration-300 text-center"
            >
              <div className="flex flex-col items-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to know more?</h2>
          <p className="mb-6">
            Reach out to us today and discover how CyberGuard Solutions can help your business thrive.
          </p>
          <a
            href="/contact"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
