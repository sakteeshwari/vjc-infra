"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";

// Validation Schema
const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contactNo: yup.string().matches(/^\d{10}$/, "Contact No. must be 10 digits").required("Contact No. is required"),
    companyName: yup.string().required("Company Name is required"),
    projectDetails: yup.string().min(10, "Project details must be at least 10 characters long"),
    privacyPolicy: yup.boolean().oneOf([true], "You must accept the privacy policy"),
});

const Contactus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const formData = new FormData();

        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        if (selectedFile) {
            formData.append("file", selectedFile);
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Message sent successfully!");
                reset();
                setSelectedFile(null);
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
        <motion.div 
            id="contact-us"
            className="h-full w-full py-10 flex items-center justify-center px-4 bg-gradient-to-r from-gray-100 to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <motion.div 
                className="max-w-2xl w-full h-full bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
            >
                <h1 className="text-3xl text-center font-semibold text-orange-600 mb-6">
                    GET IN TOUCH <span className="text-red-600 font-bold">.</span>
                </h1>
                <form 
                    className="space-y-6 mt-10" 
                    onSubmit={handleSubmit(onSubmit)} 
                    encType="multipart/form-data"
                >
                    {["firstName", "lastName", "email", "contactNo", "companyName"].map((name, index) => (
                        <div key={index} className="relative">
                            <label 
                                htmlFor={name} 
                                className="block text-sm font-semibold text-orange-800 italic"
                            >
                                {name.replace(/([A-Z])/g, " $1").trim()}
                            </label>
                            <motion.input
                                id={name}
                                type={name === "email" ? "email" : name === "contactNo" ? "tel" : "text"}
                                {...register(name)}
                                className="mt-2 block w-full border border-gray-300 py-4 px-3  focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300 hover:shadow-lg"
                                placeholder={`Enter your ${name}`}
                                whileFocus={{ scale: 1.02 }}
                            />
                            <p className="text-red-500 text-xs mt-1">{errors[name]?.message}</p>
                        </div>
                    ))}

                    {/* Project Details */}
                    <div className="relative">
                        <label 
                            htmlFor="projectDetails" 
                            className="block text-sm font-semibold text-orange-800 italic"
                        >
                            Your Message
                        </label>
                        <motion.textarea
                            id="projectDetails"
                            {...register("projectDetails")}
                            rows="4"
                            className="mt-2 block w-full border border-gray-300  py-2 px-3 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300 hover:shadow-lg"
                            placeholder="Describe your project here"
                            whileFocus={{ scale: 1.02 }}
                        ></motion.textarea>
                        <p className="text-red-500 text-xs mt-1">{errors.projectDetails?.message}</p>
                    </div>

                    {/* File Upload */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-orange-800 italic">Attach File</label>
                        <motion.input
                            type="file"
                            accept=".jpg,.png,.pdf,.docx"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                            className="mt-2 block w-full border border-gray-300  py-4 px-3 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300 hover:shadow-lg"
                            whileFocus={{ scale: 1.02 }}
                        />
                        {selectedFile && <p className="text-gray-600 text-xs mt-1">Selected File: {selectedFile.name}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <motion.button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className={`w-40 py-2 px-4 rounded-md font-medium transition-all duration-300 transform active:scale-95 
                                ${isValid ? "bg-orange-500 text-white hover:bg-orange-600 shadow-md" : "bg-gray-400 cursor-not-allowed"}`}
                            whileHover={isValid ? { scale: 1.05 } : {}}
                            whileTap={isValid ? { scale: 0.95 } : {}}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Contactus;
