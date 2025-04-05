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
                    <p className="text-gray-500 mt-4 tracking-wider text-sm leading-7">
                        VJC INFRA IS AN ESTABLISHED, SUCCESSFUL AND GROWING COMMERCIAL GENERAL CONTRACTOR SERVING CHICAGOLAND AND NATIONAL CLIENTELE. WE ARE SEEKING TO ADD TO OUR TEAM A CONSTRUCTION PROJECT ADMINISTRATOR WITH A PROVEN TRACK RECORD OF SUCCESS... <span> </span>
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

                                <br />• Support the project managers with document control procedures and electronic job file archiving
                                <br />•  Responsible for office reception area, answering phones, greeting guests and refer callers to appropriate parties.
                                <br />• Facilitate the subcontractor bid process to include processing, distribution and tracking of all project bidding documentation.
                                <br />• Follow up to ensure timely receipt of on correspondences and outstanding requests.
                                <br />• Utilize software programs and templates to process, distribute and track all project documentation.
                                <br />• Setup job binders and subcontractor files
                                <br />• Negotiate subcontracts.
                                <br />• Plan and schedule projects

                            </p>

                            <p className="mt-2">

                                <br />• Manage jobs in progress including subcontractor coordination, conflict resolution, documentation and ensuring quality and safety on every job.
                                <br />• Assist with the support, maintenance and preparation of reports, calendars, files and spreadsheets.
                                <br />• Perform project closeout.
                                <br />• Preparing 3-week look ahead schedules.
                                <br />• Prepare agendas and make arrangements for meetings.
                                <br />• Creating/preparing various items such as letters, bid instructions, meeting minutes, weekly updates, memos, proposals, outlines. Attending meetings when requested by PM.


                            </p>

                            <p className="mt-4"><strong className=""> QUALIFICATIONS AND REQUIREMENTS- THE CANDIDATE MUST POSSESS THE FOLLOWING REQUIREMENTS AND SKILLS:</strong></p>
                            <p className="mt-2 text-sm leading-7 tracking-wider">Our Construction Project Assistant integrity is very important to VJC INFRA, we enjoy a reputation for complete and accurate project records and follow thru, while treating our vendors, suppliers and subcontractors in a fair and honest manner. Our Construction Project Assistant must be highly motivated and have a history of integrity, honesty, loyalty and recognize the confidential nature of their role in the business operations.</p>
                            <ul className="list-disc pl-6 space-y-4 mt-6 text-gray-700">
                                <li><strong>Master in Excel</strong> (Must understand and be able to enter formulas and functions)</li>
                                <li>2-10 years of experience in the construction field</li>
                                <li>Proven to be highly self-motivated, strong personal initiative, and solid judgment</li>
                                <li>Proven to work accurately while under pressure of deadline</li>
                                <li>Ability to build and maintain strong working relationships</li>
                                <li>Excellent proficiency with the MS Office Suite, including Word, Excel, SharePoint, PowerPoint, OneDrive, Outlook, and Project Scheduling (preferred), with an emphasis on complex Excel spreadsheet capabilities and Word processing.</li>
                                <li>Proven leadership and managerial abilities to interact with all levels of management</li>
                                <li>Proven analytical skills as a problem predictor, not just a problem solver</li>
                                <li>Comfortable interacting/interfacing with subcontractors, suppliers, and designers</li>
                                <li>Self-motivated with the ability to work independently and as part of a team</li>
                                <li>Ability to manage multiple projects simultaneously and be flexible in prioritizing work tasks</li>
                                <li>Experience working in web-based applications</li>
                                <li>Contract reading and comprehension</li>
                                <li>Timely, professional, and polished in appearance</li>
                                <li>Must be able to pass a pre-employment drug screen test (paid for by the company)</li>
                                <li>In compliance with federal law, all persons hired will be required to verify identity and eligibility to work in the United States and to complete the required employment eligibility verification form upon hire.</li>
                                <li>Knowledge of Licenses, Bonds, COI’s, and permits</li>
                            </ul>


                            {/* Preferred Skills Section */}

                            <p className="mt-4"><strong className="">Preferred Skills </strong></p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-800">
                                <li>Working knowledge of Foundations construction software</li>
                                <li>Associates plus experience or Bachelor’s degree in related field</li>
                                <li>3+ years’ experience in a Project Manager’s Assistant or related position</li>
                            </ul>

                            {/* Benefits Section */}

                            <p className="mt-4"><strong className="">Benefits</strong></p>
                            <p className="text-gray-700">We offer our employees the following competitive benefits package:</p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-800 mt-3">
                                <li>Medical (company paid for Employee Coverage), Dental, Vision Insurance</li>
                                <li>Basic Life and AD&D Insurance</li>
                                <li>Short Term Disability Insurance</li>
                                <li>401(k) with company match</li>
                            </ul>

                            {/* Footer Note */}
                            <p className=" mt-6 leading-10 text-sm">
                                <strong>NO AGENCIES PLEASE: Unsolicited resumes from third-party agencies will not be accepted.</strong>
                                <br />
                                <strong>PLEASE NO PHONE CALLS.</strong>
                                <br />
                                <strong>VJC INFRA is an equal opportunity affirmative action employer, including veterans and disability status.</strong>
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
                        VJC INFRA is always accepting Carpenter applications & we are signatory to
                        the Chicago Regional Council of Carpenters. Please submit your resume and
                        work history so when we have a specific need we can find the right candidate.
                        Be sure to include any knowledge or certifications regarding use of... <span> </span>
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
                                <strong>Required Qualifications (not all inclusive):</strong>
                                <br />• Successfully perform carpentry tasks as outlined and defined by the CRCC
                                <br />• Provide email address
                                <br />• Be able to enter online time cards and receive electronic pay stubs
                                <br />• Must be able to pass pre-employment drug screen test and Background Testing
                                <br />• In compliance with federal law, all persons hired will be required to verify identity and eligibility.
                            </p>
                            <p className="mt-4"><strong className=""> DRUG/ALCOHOL SCREENING: </strong></p>
                            <p className="mt- text-sm leading-7 tracking-wider">

                                It is the policy of VJC Infra to maintain a safe, healthy, and productive work environment for all its employees; to produce quality goods and services for its customers in an efficient manner; to maintain the integrity and security of its facilities and property, and to perform all these functions in a fashion consistent with the interests and concerns of the communities in which it is located.
                            </p>
                            <p className="mt-4 text-sm leading-7 tracking-wider">
                                Pursuant to these goals, VJC Infra requires candidates for employment to pass a drug/alcohol screening test covering illegal substances and legal substances subject to abuse. This requires the candidate to submit a urine, hair, and/or blood specimen and to sign a consent and release statement provided by VJC INFRA Refusal will result in the candidate’s disqualification for further employment consideration.
                            </p>

                            <h2 className=" font-bold tracking-wider text-orange-600 mt-6">
                                DISCLAIMER
                            </h2>
                            <p className="mt-4 text-sm leading-7 tracking-wider">
                                I understand that nothing in this employment application, in the company’s statements or personnel guidelines, or in my communications with any company official is intended to create an employment contract between the company and me. I also understand that the company has the right to modify its policies without giving me any notice of the change(s). No promises regarding employment have been made to me, and I understand that no such promise or guarantee is binding upon the company unless it is made in writing and signed by a company officer.
                            </p>
                            <p className="mt-4 text-sm leading-7 tracking-wider">
                                I understand that if an employment relationship is established, I have a right to terminate my employment at any time. I also understand that the company retains the right to terminate my employment at any time. This job description is subject to change at any time.
                            </p>

                            <p className="mt-6 font-semibold text-sm ">
                                NO AGENCIES PLEASE: UNSOLICITED RESUMES FROM THIRD PARTY AGENCIES WILL NOT BE ACCEPTED.
                            </p>
                            <p className="mt-6 font-semibold text-sm ">
                                PLEASE NO PHONE CALLS. VJC Infra IS AN EQUAL OPPORTUNITY AFFIRMATIVE ACTION EMPLOYER, INCLUDING VETERANS AND DISABILITY STATUS.
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
