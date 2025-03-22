'use client';

export default function EmergencyService() {
  return (
    <div className="relative w-full mb-10 -mt-10 flex items-center px-8 md:px-16 lg:px-32 bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover opacity-10" 
           style={{ backgroundImage: "url('/assets/loadingbg.png')" }}>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="md:text-2xl lg:text-3xl font-bold text-orange-600">
            VJC INFRA Emergency <br /> Service Team
          </h2>
          <hr className="w-24 border-t-2 border-gray-300 mt-2" />
        </div>

        {/* Right Content */}
        <div className=" md:w-1/2   mt-6 md:mt-0 text-gray-600 lg:text-lg">
          <p>
            We know emergencies don’t happen when it’s convenient, so we offer 24/7 
            service staff to handle the unexpected at your site. With our team, 
            you’re covered for fast response and recovery.
          </p>
        </div>
      </div>
    </div>
  );
}
