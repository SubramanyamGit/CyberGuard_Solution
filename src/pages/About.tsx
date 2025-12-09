import React from "react";
import { LightBulbIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import StoryImage from "../assets/story.png";

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-indigo-700 text-white py-32 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Learn more about CyberGuard Solutions, our mission, and how we
            deliver excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            CyberGuard Solutions was founded with the vision to provide seamless
            consultancy, logistics, real estate, and import/export services. Our
            dedication to quality, transparency, and efficiency has made us a
            trusted partner for businesses worldwide.
          </p>
          <p className="text-gray-700">
            With a team of experienced professionals, we ensure every project is
            delivered with precision and excellence, helping our clients achieve
            their business goals effectively.
          </p>
        </div>
        <div className="md:w-1/3 mt-10 md:mt-0">
          <img
            src={StoryImage}
            alt="Company Story"
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 rounded-lg p-8 shadow hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <LightBulbIcon className="h-12 w-12 text-indigo-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To provide innovative and reliable solutions in consultancy,
                logistics, and real estate that drive business success.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-8 shadow hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <GlobeAltIcon className="h-12 w-12 text-indigo-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To be recognized as a global leader in providing seamless and
                trustworthy business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Team Section */}
      {/* Can add later with hover effects and member cards */}
    </div>
  );
};

export default About;
