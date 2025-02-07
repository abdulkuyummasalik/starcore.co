import React from 'react';

const AboutSection = () => {
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

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-100">
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-tahiti">
            About Starcore
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              StarCore Analytics (PT Exorty Indonesia) was founded in 2013 by experts in
              analytics and market research technology. Since then, we have evolved into a
              leading data science company, building our capabilities in data engineering,
              analytics, machine learning, and artificial intelligence. In 2015, we became
              a trusted partner of SAS, a leader in analytics technology, helping their
              clients maximize the impact of their sophisticated analytics solutions.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-tahiti">
            Meet Our Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 group-hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-bermuda">
                      {member.role}
                    </p>
                  </div>
                  <div className="h-1 w-full bg-tahiti transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
