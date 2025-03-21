'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';

const projects = [
  {
    title: 'High Security Spaces & Data Centers',
    description: 'Many of our projects cannot be featured due to security levels...',
    client: 'Many',
    industry: 'Commercial',
    sector: 'Corporate',
    image: '/images/project1.jpg',
  },
  {
    title: 'Modern Office Spaces',
    description: 'We build dynamic work environments with a modern touch...',
    client: 'TechCorp',
    industry: 'Technology',
    sector: 'Corporate',
    image: '/images/project2.jpg',
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  return (
    <div className="relative w-full min-h-screen bg-white p-6">
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        direction="vertical" 
        className="w-full h-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-red-600 text-4xl font-bold">{project.title}</h2>
                <p className="text-gray-600 mt-4">{project.description}</p>
                <div className="mt-6 bg-red-600 text-white p-4 rounded">
                  <p><strong>Client:</strong> {project.client}</p>
                  <p><strong>Industry:</strong> {project.industry}</p>
                  <p><strong>Sector:</strong> {project.sector}</p>
                </div>
              </div>
              <div>
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg">
        ↑
      </button>
    </div>
  );
}