"use client"; // Required for Next.js App Router

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema
const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contactNo: yup.string()
        .matches(/^\d{10}$/, "Contact No. must be 10 digits")
        .required("Contact No. is required"),
    companyName: yup.string().required("Company Name is required"),
    projectDetails: yup.string().min(10, "Project details must be at least 10 characters long"),
    privacyPolicy: yup.boolean().oneOf([true], "You must accept the privacy policy"),
});

const Contactus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [file, setFile] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const formData = new FormData();
        
        // Append form fields
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        // Append file if uploaded
        if (file) {
            formData.append("attachment", file);
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Message sent successfully!");
                reset();
                setFile(null);
            } else {
                alert("Error sending message. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="h-full w-full py-10 flex items-center justify-center px-4 bg-gray-200">
            <div className="max-w-2xl w-full h-full bg-white p-8  shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out">
                <h1 className="text-3xl text-center font-semibold text-orange-600 mb-6">
                    GET IN TOUCH <span className="text-red-600 font-bold">.</span>
                </h1>
                <form className="space-y-6 mt-10" onSubmit={handleSubmit(onSubmit)}>
                    {/* Input Fields */}
                    {[
                        { label: "First Name", name: "firstName" },
                        { label: "Last Name", name: "lastName" },
                        { label: "Email", name: "email", type: "email" },
                        { label: "Phone No", name: "contactNo", type: "tel" },
                        { label: "Company Name", name: "companyName" },
                    ].map(({ label, name, type = "text" }) => (
                        <div key={name} className="pt-4">
                            <label className="block text-sm font-semibold text-orange-800 italic">
                                {label}
                            </label>
                            <input
                                type={type}
                                {...register(name)}
                                className="mt-6 block w-full border border-gray-300 py-6 px-3 focus:ring-gray-500 focus:border-gray-500 outline-none hover:shadow-lg"
                                placeholder={`Enter your ${label.toLowerCase()}`}
                            />
                            <p className="text-red-500 text-sm">{errors[name]?.message}</p>
                        </div>
                    ))}

                    {/* Project Details */}
                    <div className="pt-4">
                        <label className="block text-sm font-semibold text-orange-800 italic">
                            Something about your project
                        </label>
                        <textarea
                            {...register("projectDetails")}
                            rows="4"
                            className="mt-6 block w-full border border-gray-300 hover:shadow-lg py-2 px-3 focus:ring-gray-500 focus:border-gray-500 outline-none"
                            placeholder="Describe your project here"
                        ></textarea>
                        <p className="text-red-500 text-sm">{errors.projectDetails?.message}</p>
                    </div>

                    {/* File Upload */}
                    <div className="pt-4">
                        <label className="block text-sm font-semibold text-orange-800 italic">
                            Attach a file (optional)
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-2 block w-full border border-gray-300 py-2 px-3 focus:ring-gray-500 focus:border-gray-500 outline-none hover:shadow-lg"
                        />
                        {file && <p className="text-green-600 text-sm">Selected file: {file.name}</p>}
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-center pt-4">
                        <input
                            type="checkbox"
                            {...register("privacyPolicy")}
                            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                            I confirm, I have read and agree to <span className="underline text-orange-700 font-semibold">KALVEN's Privacy Policy</span>.
                        </label>
                    </div>
                    <p className="text-red-500 text-sm">{errors.privacyPolicy?.message}</p>

                    {/* Submit Button with Animation */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className={`w-40 py-2 px-4 rounded-md font-medium transition-all duration-300 transform active:scale-95 
                                ${isValid ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"}`}
                        >
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contactus;
