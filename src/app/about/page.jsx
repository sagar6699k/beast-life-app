import React from "react";

const AboutPage = () => {
  const team = [
    {
      name: "Jake Thompson",
      role: "Founder & Head Coach",
      image: "https://picsum.photos/seed/user1/200",
    },
    {
      name: "Sophia Lee",
      role: "Nutrition Expert",
      image: "https://picsum.photos/seed/user2/200",
    },
    {
      name: "Ryan Carter",
      role: "Supplement Specialist",
      image: "https://picsum.photos/seed/user3/200",
    },
    {
      name: "Emily Johnson",
      role: "Marketing & Community Manager",
      image: "https://picsum.photos/seed/user4/200",
    },
  ];

  const values = [
    {
      title: "Performance",
      description:
        "Our products and programs are designed to help you build strength, stamina, and confidence.",
      icon: "💪",
    },
    {
      title: "Quality Nutrition",
      description:
        "We provide top-quality supplements and diet plans backed by science and trusted by athletes.",
      icon: "🥗",
    },
    {
      title: "Community Support",
      description:
        "Join a community that motivates and pushes you to achieve your health and fitness goals.",
      icon: "🤝",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center bg-orange-50 px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-orange-900">
          About Beast Life
        </h1>
        <p className="text-lg text-orange-700 max-w-2xl mx-auto">
          At <span className="font-semibold">Beast Life</span>, we believe that fitness is more than just a workout — it’s a lifestyle. 
          From advanced training programs to high-quality supplements, we help you fuel your body and mind to perform at your best.
        </p>
        <img
          src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          alt="Gym training"
          className="rounded-2xl shadow-lg mt-6"
        />
      </section>

      {/* Mission & Values */}
      <section className="max-w-5xl w-full">
        <h2 className="text-3xl font-semibold text-orange-900 mb-6 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition"
            >
              <div className="text-4xl">{val.icon}</div>
              <h3 className="text-xl font-bold text-orange-800">{val.title}</h3>
              <p className="text-orange-700">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl w-full">
        <h2 className="text-3xl font-semibold text-orange-900 mb-6 text-center">
          Meet Our Experts
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center space-y-4 hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-24 h-24 object-cover shadow"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-orange-800">
                  {member.name}
                </h3>
                <p className="text-orange-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="max-w-4xl w-full text-center">
        <h2 className="text-3xl font-semibold text-orange-900 mb-4">
          Our Journey
        </h2>
        <p className="text-orange-700 mb-4">
          From a small garage gym to a nationwide fitness brand, Beast Life has been helping athletes, 
          bodybuilders, and fitness enthusiasts achieve their goals with a mix of effective training, 
          science-backed nutrition, and community-driven support.
        </p>
        <img
          src="https://images.unsplash.com/photo-1734668490540-e98ee11f5b4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bSUyMG1lbWJlcnN8ZW58MHx8MHx8fDA%3D"
          alt="Company growth"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Footer */}
      <footer className="text-center text-orange-700 py-6 border-t border-orange-200 w-full">
        © 2025 Beast Life. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AboutPage;
