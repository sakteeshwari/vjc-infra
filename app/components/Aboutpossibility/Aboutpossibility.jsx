import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-center p-10 lg:p-20 bg-white">
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">We build possibilities.</h2>
      </div>
      <div className="lg:w-1/2 text-gray-700   leading-relaxed">
        <p className="mb-4">
        In 2009, VJC INFRA began its journey from a modest setup with a small but passionate team, a couple of desks, and a shared vision. What we lacked in size, we made up for with drive, determination, and a commitment to excellence.
        </p>
        <p className="mb-4">
        Over the years, we have grown into a full-fledged construction management firm and general contractor, operating across multiple states. We go beyond just building structures—we craft environments where businesses can thrive, teams can grow, and innovation can flourish. Our true strength lies in understanding your vision, shaping it, and delivering results that exceed expectations.
        </p>
        <p className="mb-4">
        We specialize in tailored solutions for new constructions, additions, and renovations. Our success is built on a foundation of in-house talent and a strong network of experts, enabling us to offer the right blend of creativity, technology, and materials for every project. With each endeavor, we aim to bring your vision to life in a way that’s functional, inspiring, and aligned with your goals.
        </p>
        <p className="mb-4">
        Despite our growth, our core values remain unchanged. We are still a family-owned business rooted in integrity, client commitment, and long-term partnerships. We continue to approach every project with fresh thinking, expert insight, and a passion for what we do. This passion is reflected in the quality of our work and in the trusted relationships that have driven our success.
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
