'use client';

export default function ExpertsSection() {
  const experts = [
    {
      title: 'PROJECT MANAGEMENT',
      description: 'The art and science of making things happen',
      icon: '/assets/closure.png', // Replace with actual icon path
    },
    {
      title: 'CARPENTRY',
      description: 'Shaping spaces with craftsmanship and attention to detail',
      icon: '/assets/tools.png', // Replace with actual icon path
    },
    {
      title: 'AUDIOVISUAL',
      description: 'Technical expertise for basic to fully equipped spaces',
      icon: '/assets/video.png', // Replace with actual icon path
    },
    {
      title: 'HARDWARE',
      description: 'High-security hardware knowledge and custom finishing details',
      icon: '/assets/cpu.png', // Replace with actual icon path
    },
  ];

  return (
    <section className="bg-red-700 text-white py-16 px-8 md:px-16 lg:px-32">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Our in-house experts</h2>
        <p className="mt-2  lg:text-xl">
          With expertise on the team, we can offer creative and complete construction solutions.
        </p>
      </div>

      {/* Grid Layout for Desktop and Mobile */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {experts.map((expert, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={expert.icon} alt={expert.title} className="w-16 h-16 md:w-20 md:h-20 mb-4" />
            <h3 className=" lg:text-lg font-semibold">{expert.title}</h3>
            <p className="mt-2 text-gray-400 text-sm md:text-base">{expert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
