import React from "react";

const ContactForm = () => {
  return (
    <div id="contact-us" className="bg-gray-100 py-12  px-4 md:px-16 lg:px-32 ">
      <form className="max-w-4xl mx-auto text-gray-600  tracking-widest bg-white p-8 shadow-lg rounded-lg hover:scale-105 transition-transform duration-400 ease-in-out">
        <h1 className="text-orange-600 pb-10 font-bold text-center text-xl md:text-3xl lg:text-4xl">GET IN TOUCH.</h1>
        {/* Name Section */}
        <div className="mb-6">
          <label className="block font-bold text-lg mb-2">Name<span className="text-red-500">*</span></label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border border-gray-200 p-5  w-full outline-none focus:ring-2 focus:ring-gray-400" />
            <input type="text" placeholder="Name of your company" className="border border-gray-200 p-5 outline-none focus:ring-2 focus:ring-gray-400  w-full" />
          </div>
        </div>
        
        {/* Info Section */}
        <div className="mb-6 ">
          <label className="block font-bold text-lg mb-2">Info<span className="text-red-500">*</span></label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email" className="border border-gray-200 p-5 outline-none focus:ring-2 focus:ring-gra3-400  w-full" />
            <input type="text" placeholder="Phone" className="border border-gray-200 p-5 outline-none focus:ring-2 focus:ring-gray-400  w-full" />
            <input type="text" placeholder="Address" className="border border-gray-200 p-5  outline-none focus:ring-2 focus:ring-gray-400 w-full" />
            <input type="text" placeholder="Best time to call" className="border border-gray-200 p-5 outline-none focus:ring-2 focus:ring-gray-400 w-full" />
          </div>
        </div>
        
        {/* Message Section */}
        <div className="mb-6">
          <label className="block font-bold text-lg mb-2">Your message</label>
          <textarea placeholder="Type your request here" className="border border-gray-200 p-5 outline-none focus:ring-2 focus:ring-gray-400 w-full h-32"></textarea>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
  {/* Send Message Button */}
  <button className="bg-gray-900 text-white px-6 py-3 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-900">
    <span className="transition-transform duration-300 group-hover:translate-x-1">➤</span> 
    Send message
  </button>

  {/* Join a File Button */}
  <button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-red-600">
    <span className="transition-transform duration-300 group-hover:rotate-12">📎</span> 
    Join a file
  </button>
</div>
        <p className="p-2 mt-4 text-gray-500"> *The attach a file should be able to receive .doc, .docx, and .pdf file formats.</p>
      </form>
    </div>
  );
};

export default ContactForm;
