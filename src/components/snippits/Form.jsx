import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import bgimage from "../../assets/bgimage.png";
function ContactForm() {
  const {
    register, // Register inputs
    handleSubmit, // Handles form submission
    reset, // Resets form values
    formState: { errors }, // Form state, includes errors
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
        // Optionally redirect
        // navigate("/thank-you");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="w-full flex justify-center items-center pt-14 pb-14">
      <div
        className="flex justify-start w-[80vw] rounded-md items-center h-[500px] bg-cover bg-center px-8"
        style={{ backgroundImage: `url(${bgimage})` }} // Replace with your image
      >
        <div className="bg-white/10 backdrop-blur-md p-8  h-100 w-70 rounded-2xl shadow-xl   lg:w-[45vw] ml-0 lg:ml-[15vw]">
          <h2 className="text-center text-base lg:font-bold lg:text-3xl mt-[-10px] mb-4 lg:mb-6 text-white">
            Get into the Conversation
          </h2>

          <form
            name="contact-v1"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact-v1" />

            {/* First + Last Name */}
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6">
              <div className="h-10">
                <input
                  type="text"
                  placeholder="First Name"
                  name="First Name"
                  {...register("name", { required: "First Name is required" })}
                  className="lg:w-full w-25 bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
                />
                {errors.name && (
                  <p className="text-red-500 min-h-[5px]">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="h-10">
                <input
                  type="text"
                  name="Last Name"
                  {...register("LastName", {
                    required: "Last Name is required",
                  })}
                  placeholder="Last Name"
                  className="lg:w-full w-25 bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
                />
                {errors.LastName && (
                  <p className="text-red-500 min-h-[2px]">
                    {errors.LastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6">
              <div className="h-10">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                  className="lg:w-full w-25 bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="h-10">
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone No"
                  {...register("phone", { required: "Phone  No is required" })}
                  className="lg:w-full w-25 bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="h-20">
              <textarea
                rows="2"
                placeholder="Message"
                name="Message"
                {...register("message", { required: "Message is required" })}
                className="w-full bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                name="submit"
                className="lg:w-full px-2 py-1  lg:px-6 lg:py-3 bg-black/70 border text- border-white rounded-lg text-white font-medium hover:bg-gradient-to-b from-black to-teal-900 transition  cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
