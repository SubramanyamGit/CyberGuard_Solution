import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
<div className="border rounded-lg p-6 shadow hover:shadow-2xl hover:scale-105 transition transform duration-300 bg-transparent text-black">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
