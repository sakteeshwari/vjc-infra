import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-center p-10 lg:p-20 bg-white">
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">We build possibilities.</h2>
      </div>
      <div className="lg:w-1/2 text-gray-700   leading-relaxed">
        <p className="mb-4">
          In 1997, VJC INFRA opened its doors in a rented storefront in suburban Chicago. We had four staff, a handful of carpenters, two folding card tables, and a computer. We also had drive, commitment, energy, and a vision.
        </p>
        <p className="mb-4">
          Two decades later, we’ve grown to become a comprehensive construction management team and general contractor working in 15 states and counting. We do more than build spaces—we create environments where your team can grow, thrive, and innovate. Our superpower as a company is the ability to hear your need, envision it, and deliver against it.
        </p>
        <p className="mb-4">
          To do that, we create customized solutions for new construction, additions, and renovations. We’ve built a team of in-house experts as well as a broad network of specialists so that we can deliver exactly what you need in creative solutions, technology, and materials. With every project, we strive to create—and realize—a vision that fulfills the client’s needs and results in an extraordinary environment.
        </p>
        <p className="mb-4">
          While we’ve grown, a few fundamentals have remained constant. We’re still a family-owned business with client commitment and superior partnership foremost in mind on every job. We’re still driven to bring creative solutions and expertise to every challenge. We also love what we do—and it shows, in both the quality of our work and in the enduring relationships that have fueled our company growth.
        </p>
        <p className="mb-4">
          We’re always looking to build the next great thing. Is it yours? 
          <a href="#" className="text-red-500 font-semibold hover:underline">Let’s talk.</a>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
