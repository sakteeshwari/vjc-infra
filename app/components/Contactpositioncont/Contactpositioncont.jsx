"use client";
import React, { useState, useRef } from "react";

const Solutionimg = () => {
    const [showMore, setShowMore] = useState(false);
    const moreInfoRef = useRef(null);

    // Fixed: Define state and ref for Carpenters section
    const [isExpanded, setIsExpanded] = useState(false);
    const extraContentRef = useRef(null);

    const toggleMoreInfo = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            setTimeout(() => {
                extraContentRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 200);
        }
    };

    const scrollToContactForm = () => {
        const contactSection = document.getElementById("contact-us");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="relative tracking-widest w-full mb-20 px-4 md:px-10 lg:px-20">
            {/* Job Listings */}
            <div className=" space-y-10">
                {/* Job Item */}
                <div className="border-t border-gray-300 pt-10">
                    <h2 className="text-orange-600 font-bold text-lg tracking-widest">
                        Construction Project Assistant
                    </h2>
                    <p className="text-gray-500 mt-4 uppercase tracking-wider text-sm leading-7">
                    VJC INFRA is a reputed and growing construction company in India committed to delivering excellence in every project. We are currently looking for a Construction Project Assistant to join our dynamic team. This role involves providing comprehensive support to project managers and ensuring smooth coordination across departments.<span> </span>
                        <span>
                            <button
                                onClick={toggleMoreInfo}
                                className="text-black tracking-widest font-semibold text-sm cursor-pointer transition-all duration-300 hover:text-orange-600"
                            >
                                {isExpanded ? " Show Less" : " More Info"}
                            </button>
                        </span>
                    </p>

                    {isExpanded && (
                        <div ref={extraContentRef} className="mt-4 text-gray-500 text-sm leading-7">

                            <p className="mt-4"><strong className=""> ROLE AND RESPONSIBILITIES</strong></p>
                            <p className="mt- text-sm leading-7 tracking-wider">This position will be responsible for a varied and complex project support and procedural assistance to project managers. S/he is expected to demonstrate sincere desire to serve our customers and assist with the overall safety, direction completion and financial outcome of construction projects. They must have the ability to work with co-workers in a cooperative manner while remaining flexible, resourceful, proactive, and efficient with a high level of professionalism, and confidentiality. The ideal candidate is one who can work independently with little to no supervision and has experience supporting supervisors in daily administrative construction tasks.
                                and candidates considered for the position must possess excellent organizational abilities, meticulous attention to detail, strong verbal and written communication skills and demonstrate success in building interpersonal relationships required to work in a fast- paced, creative and collaborative team environment.</p>

                            <p className="mt-2">

                                <br />• Provide administrative support to project managers, including documentation, scheduling, and communication with contractors/vendors.
                                <br />• Manage project files, ensure proper documentation, and assist in preparation of reports and spreadsheets.
                                <br />• Coordinate project timelines, resources, and subcontractor activities.
                                <br />• Maintain updated records and track project milestones.
                                <br />• Assist with procurement and vendor communications.
                                <br />• Help organize meetings, prepare agendas, and manage follow-ups.
                               

                            </p>

                           

                            <p className="mt-4"><strong className=""> QUALIFICATIONS AND REQUIREMENTS- THE CANDIDATE MUST POSSESS THE FOLLOWING REQUIREMENTS AND SKILLS:</strong></p>
                            <p className="mt-2 text-sm leading-7 tracking-wider">Our Construction Project Assistant integrity is very important to VJC INFRA, we enjoy a reputation for complete and accurate project records and follow thru, while treating our vendors, suppliers and subcontractors in a fair and honest manner. Our Construction Project Assistant must be highly motivated and have a history of integrity, honesty, loyalty and recognize the confidential nature of their role in the business operations.</p>
                            <ul className="list-disc pl-6 space-y-4 mt-6 text-gray-700">
                                <li>Proficient in MS Excel (including formulas and functions).</li>
                                <li>2–10 years of experience in the construction industry.</li>
                                <li>Excellent communication, time management, and organizational skills.</li>
                                <li>Ability to work independently and handle multiple tasks under deadlines.</li>
                                <li>Ability to build and maintain strong working relationships</li>
                                <li>Experience working with digital tools and documentation software.</li>
                                <li>Strong attention to detail and ability to maintain confidentiality.</li>
                                <li>Knowledge of construction contracts and terminology.</li>
                                <li>Candidates must be able to provide valid ID and address proof and pass a background check if required.</li>
                                
                            </ul>


                            {/* Preferred Skills Section */}

                            <p className="mt-4"><strong className="">Preferred Skills </strong></p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-800">
                                <li>Bachelor's degree or diploma in civil engineering/construction management or related field.</li>
                                <li>Familiarity with construction management software.</li>
                                <li>Prior experience supporting project managers in construction or infrastructure sectors.</li>
                            </ul>

                            {/* Benefits Section */}

                            <p className="mt-4"><strong className="">Benefits</strong></p>
                            <p className="text-gray-700">We offer our employees the following competitive benefits package:</p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-800 mt-3">
                                <li>Competitive salary based on experience.</li>
                                <li>Provident Fund (PF) and Employee State Insurance (ESI).</li>
                                <li>Paid leaves and other statutory benefits.</li>
                                <li>Opportunity to grow within a supportive and professional work environment.</li>
                            </ul>

                            {/* Footer Note */}
                            <p className=" mt-6 leading-10 text-sm">
                                <strong>NOTE: VJC INFRA does not entertain unsolicited resumes from third-party agencies.</strong>
                                <br />
                                <strong>Please do not call.</strong>
                                <br />
                                <strong>VJC INFRA is an equal opportunity employer.</strong>
                            </p>
                        </div>
                    )}

                    <div className="mt-6 flex justify-start items-center group">
                        <button
                            onClick={scrollToContactForm}
                            className="font-bold uppercase text-xs pr-4 cursor-pointer tracking-widest relative transition-all duration-300 ease-in-out 
                        hover:text-red-600 hover:scale-105"
                        >
                            Apply Now
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 ease-in-out"></span>
                        </button>

                        <div className="border-b border-gray-400 w-1/3 lg:w-[10%] transition-all duration-300 ease-in-out group-hover:w-1/2 group-hover:border-red-600"></div>
                    </div>
                </div>

                {/* Job Item */}
                <div className="border-t border-gray-300 pt-10">
                    <h2 className="text-orange-600 font-bold text-lg tracking-widest">
                        Carpenters
                    </h2>
                    <p className="text-gray-500 mt-4 tracking-wider text-sm leading-7">
                    VJC INFRA welcomes applications from experienced Carpenters to join our construction teams across India. Interested candidates are encouraged to submit their resumes along with project experience and certifications (if any).
                        <span>
                            <button
                                onClick={toggleMoreInfo}
                                className="text-black tracking-widest font-semibold text-sm cursor-pointer transition-all duration-300 hover:text-red-600"
                            >
                                {isExpanded ? " Show Less" : " More Info"}
                            </button>
                        </span>
                    </p>

                    {isExpanded && (
                        <div ref={extraContentRef} className="mt-4 text-gray-500 text-sm leading-7">
                            <p>
                                <strong>Examples of Desired Candidate Qualification:</strong>
                                <br />• Detail Oriented
                                <br />• Proven to be highly self-motivated, strong personal initiative and solid judgment
                                <br />• Timely & Self-Motivated
                            </p>
                            <p className="mt-2">
                                <strong>REQUIREMENTS</strong>
                                <br />• Valid identity and address proof.
                                <br />• Ability to follow safety standards and quality protocols.
                                <br />• Must be willing to work at project sites across different locations.
                                <br />• Prior experience in similar roles will be an added advantage.
                                
                            </p>
                           
                            <h2 className=" font-bold tracking-wider text-orange-600 mt-6">
                                DISCLAIMER
                            </h2>
                            <p className="mt-4 text-sm leading-7 tracking-wider">
                            This job listing does not imply a contract of employment. The company retains the right to update or modify roles and responsibilities based on project requirements. Candidates are expected to follow professional conduct and comply with company policies at all times.
                            </p>
                            <p className="mt-4 text-sm leading-7 tracking-wider">
                                I understand that if an employment relationship is established, I have a right to terminate my employment at any time. I also understand that the company retains the right to terminate my employment at any time. This job description is subject to change at any time.
                            </p>

                            <p className="mt-6 font-semibold text-sm ">
                            NO AGENCIES PLEASE.
                            </p>
                            <p className="mt-6 font-semibold text-sm ">
                            VJC INFRA is an equal opportunity employer committed to diversity and inclusion.
                            </p>
                        </div>
                    )}

                    <div className="mt-6 flex justify-start items-center group">
                        <button
                            onClick={scrollToContactForm}
                            className="font-bold uppercase text-xs pr-4 cursor-pointer tracking-widest relative transition-all duration-300 ease-in-out 
                        hover:text-red-600 hover:scale-105"
                        >
                            Apply Now
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 ease-in-out"></span>
                        </button>

                        <div className="border-b border-gray-400 w-1/3 lg:w-[10%] transition-all duration-300 ease-in-out group-hover:w-1/2 group-hover:border-red-600"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutionimg;
