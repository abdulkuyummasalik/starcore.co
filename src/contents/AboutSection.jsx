import React from "react";

// Data tim
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Chief Executive Officer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Maria Garcia",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "John Doe",
    role: "Chief Operating Officer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Chief Analytics Officer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const AboutContent = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Starcore</h1>
      <p className="text-lg text-gray-600">
        StarCore Analytics (PT Exorty Indonesia) was founded in 2013 by experts in
        analytics and market research technology. Since then, we have evolved into a
        leading data science company, building our capabilities in data engineering,
        analytics, machine learning, and artificial intelligence. In 2015, we became
        a trusted partner of SAS, a leader in analytics technology, helping their
        clients maximize the impact of their sophisticated analytics solutions.
      </p>
    </div>
  );
};

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Core Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <AboutContent />
      <TeamSection />
    </div>
  );
};

export default AboutSection;
