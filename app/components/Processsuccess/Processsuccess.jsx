'use client';

import { motion } from "framer-motion";

export default function ProcessSection() {
  const projects = [
    {
      id: '01',
      title: 'Goals and Vision',
      description: 'Every project starts by discovering where you are—and where you want to go. By understanding what you want, we can start to build your vision.',
      image: '/assets/goal.jpg',
    },
    {
      id: '02',
      title: 'Proposal',
      description: 'To quote your project, we scope it and send it out to bid. With our industry expertise, we can value engineer elements of the proposal to fit both your vision and budget.',
      image: '/assets/proposal.png',
    },
    {
      id: '03',
      title: 'Planning and Logistics',
      description: 'Next, we create a plan for the work with timelines and schedules. Because we’re highly experienced in working in occupied spaces, we’ll ensure everything is business as usual for you.',
      image: '/assets/planning.png',
    },
    {
      id: '04',
      title: 'Project Kickoff',
      description: 'We attend to all necessary documents and permits in preconstruction meetings so your work proceeds smoothly. We also place long lead-time and submittal orders.',
      image: '/assets/projects.png',
    },
    {
      id: '05',
      title: 'Building Begins',
      description: 'When our tradesmen arrive, everything is in place, from temporary partitions to plans and permits. Our attentive team handles ongoing on-site adjustments and maintains a clean and safe work site. Weekly construction meetings keep things proceeding smoothly.',
      image: '/assets/building.png',
    },
    {
      id: '06',
      title: 'Project Completion',
      description: 'From creating a punch list to walking the entire project, we fine-tune every detail so your site is in tip-top shape. You receive a closeout book with as-builts, warranties, and operating manuals.',
      image: '/assets/complete.png',
    }
  ];

  return (
    <div className="relative w-full px-8 md:px-16 tracking-wider lg:px-48 py-16 bg-white">
      {/* Left & Right Vertical Lines */}
      <div className="absolute top-0 left-8 md:left-32 h-full lg:border-l border-gray-300"></div>
      <div className="absolute top-0 right-8 md:right-32 h-full lg:border-r border-gray-300"></div>

      {/* Title Section with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl lg:text-5xl font-bold text-orange-600">
          Success comes <br className="hidden md:block" /> from process
        </h2>
        <div className="flex flex-col md:flex-row justify-center mt-8 text-gray-600">
          <motion.p 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="md:w-2/5 px-4"
          >
            A disciplined, thorough process ensures creativity becomes reality. That’s why we cover every step and detail, from the first call to the final walk-through.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.4 }}
            className="md:w-2/5 px-4 mt-4 md:mt-0"
          >
            At every point along the way, we’re focused on safety, attentive to evolving on-site needs, and dedicated to a stunning end result. Learn more about each step in our process.
          </motion.p>
        </div>
      </motion.div>

      {/* Dynamic Content Sections with Animation */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Text Content with Animation */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-left"
            >
              <p className="text-sm font-bold text-gray-700">{project.id}</p>
              <h3 className="text-xl lg:text-3xl font-bold text-orange-600 mt-2">{project.title}</h3>
              <p className="text-gray-600 mt-4">{project.description}</p>
            </motion.div>

            {/* Image Section with Animation */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
