export default function ContactBox() {
    return (
      <div
        className="relative mt-20 h-screen w-full bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: "url('/assets/about.png')" }} // Replace with your actual image path
      >
        {/* Red Box */}
        <div className="w-[80%] bg-red-600 text-white shadow-lg p-6">
          {/* Header */}
          <div className="bg-red-700 py-4 px-6 bg-opacity-80">
            <h2 className="text-lg font-bold">Any request ?</h2>
          </div>
  
          {/* Contact Information */}
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Get in touch !</h3>
            <p>Maman Corp.</p>
            <p>1055 Arthur Ave</p>
            <p>Elk Grove Village, IL 60007</p>
            <p className="font-semibold mt-3">Phone:</p>
            <p>847-358-2688</p>
            <p className="font-semibold mt-3">Email:</p>
            <p>maman@maman-corp.com</p>
  
            {/* Divider */}
            <hr className="my-6 border-white opacity-50" />
  
            {/* Join Team Section */}
            <h3 className="font-semibold text-lg mb-2">Want to join the team ?</h3>
            <p>Use the form. All applicants must complete the online form.</p>
          </div>
        </div>
      </div>
    );
  }
  