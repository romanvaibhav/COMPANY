import React from "react";
import { useNavigate } from "react-router-dom";

import bgimage from "../../assets/bgimage.png";
function ContactForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => navigate("/thank-you"))
      .catch((error) => alert(error));
  };
  return (
    <div className="w-full flex justify-center items-center pt-14 pb-14">
      <div
        className="flex justify-start w-[80vw] rounded-md items-center h-[500px] bg-cover bg-center px-8"
        style={{ backgroundImage: `url(${bgimage})` }} // Replace with your image
      >
        <div className="bg-white/10 backdrop-blur-md p-8  h-95 w-70 rounded-2xl shadow-xl   lg:w-[45vw] ml-0 lg:ml-[15vw]">
          <h2 className="text-center text-base lg:font-bold lg:text-3xl mt-[-10px] mb-4 lg:mb-6 text-white">
            Get into the Conversation
          </h2>

          <form
            name="contact v1"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact v1" />

            {/* First + Last Name */}
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="lg:w-full w-25 bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="lg:w-full w-25 bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="lg:w-full w-25 bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
              />
              <input
                type="tel"
                placeholder="Phone No"
                className="lg:w-full w-25 bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="2"
                placeholder="Message"
                className="w-full bg-transparent border-b border-gray-300 focus:border-white focus:outline-none text-white placeholder-gray-300 py-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
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
