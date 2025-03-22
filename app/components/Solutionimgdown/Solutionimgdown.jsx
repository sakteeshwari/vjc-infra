'use client';

export default function ConstructionSection() {
  return (
    <div className="relative w-full px-6 md:px-16 lg:px-32 py-16 bg-white">
      {/* Image Container */}
      <div className="relative flex flex-col md:flex-row gap-6 md:gap-0">
        {/* Large Image */}
        <div className="md:w-2/3 w-full">
          <img
            src="/assets/carpenter1.png"
            alt="Carpenter Working"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Small Image */}
        <div className="md:w-1/3 w-full md:absolute md:bottom-0 md:top-80 md:right-0 md:translate-x-16 translate-y-6">
          <img
            src="/assets/carpenter2.png"
            alt="Factory Interior"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-12 md:mt-16 max-w-2xl">
        <h2 className="text-xl md:text-3xl font-bold text-orange-600">
          Ours is a labor of love.
        </h2>
        <p className="mt-4 text-gray-600 md:text-lg">
          Let’s face it—the work we do with clients isn’t just about the walls. It’s about
          everything that happens within them: productivity, innovation, breakthroughs, and
          progress. That’s why we work with each and every client to create spaces keyed to
          business needs.
        </p>
        <p className="mt-4 text-gray-600 md:text-lg">
          We combine our knowledge of technology and trends with our construction expertise
          to build innovative and functional spaces.
        </p>
      </div>
    </div>
  );
}
