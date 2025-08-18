import { FaLinkedin, FaInstagram, FaHashtag } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import footerlogo from "../../assets/footerimage.jpg";
function Footer() {
  return (
    <body>
      <footer className="bg-black text-white py-5">
        <div className="flex justify-between flex-wrap w-full mx-auto px-5">
          {/* <!-- Info Section --> */}
          <div className="flex-1 basis-[200px] m-[25px] ml-20">
            <h4 className="text-[20px] font-bold mb-[10px] text-[#f4f4f4]">
              Quick Links
            </h4>
            <ul className="text-[17px] font-bold my-[5px] leading-[1.6] list-none p-0">
              <li className="pb-1">
                <a
                  className="text-[#d0cdcd] no-underline transition-colors duration-300 ease-in-out hover:text-[#f4f4f4]"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="pb-1">
                <a
                  className="text-[#d0cdcd] no-underline transition-colors duration-300 ease-in-out hover:text-[#f4f4f4]"
                  href="/"
                >
                  Service
                </a>
              </li>
              <li className="pb-1">
                <a
                  className="text-[#d0cdcd] no-underline transition-colors duration-300 ease-in-out hover:text-[#f4f4f4]"
                  href="/"
                >
                  Works
                </a>
              </li>
              <li className="pb-1">
                <a
                  className="text-[#d0cdcd] no-underline transition-colors duration-300 ease-in-out hover:text-[#f4f4f4]"
                  href="/"
                >
                  Our Story
                </a>
              </li>
              <li className="pb-1">
                <a
                  className="text-[#d0cdcd] no-underline transition-colors duration-300 ease-in-out hover:text-[#f4f4f4]"
                  href="/"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Customer Service Section --> */}
          <div className="flex-1 basis-[200px] m-[25px]">
            <h4 className="text-[20px] font-bold mb-[10px] text-[#f4f4f4]">
              Services
            </h4>
            <ul className="text-[17px] font-semibold my-[5px] leading-[1.6] list-none p-0">
              {/* <!-- <li>Gen AI</li> --> */}
              <li className="pb-1">UI/UX Design</li>
              {/* <!-- <li>Data Analytics </li> --> */}
              <li className="pb-1">Web Development </li>
              <li className="pb-1">Android Development </li>
              <li className="pb-1">Software Development</li>
              <li className="pb-1">Artificial Intelligence</li>
              <li className="pb-1">Blockchain Development</li>
              <li className="pb-1">Cloud Computing Solutions</li>
              <li className="pb-1">IT Infrastructure & Security</li>
              <li className="pb-1">IT Support and Maintainence</li>
            </ul>
          </div>

          {/* <!-- packages section  --> */}
          <div className="flex-1 basis-[200px] m-[25px]">
            <h4 className="text-[20px] font-bold mb-[10px] text-[#f4f4f4]">
              {" "}
              Packages{" "}
            </h4>
            <ul className="text-[17px] font-semibold my-[5px] leading-[1.6] list-none p-0">
              <li className="pb-1"> Design</li>
              <li className="pb-1"> Development</li>
              <li className="pb-1">IT Support and Maintainence</li>
            </ul>
          </div>

          {/* <!-- Contact Section --> */}
          <div className="flex-1 basis-[200px] ml-[25px]">
            {/* <!-- <h4>Contact Us</h4> --> */}
            <div className="mb-[8px] mt-[px]">
              <img
                className="w-[100px] h-[95px] pl-[0px]"
                src={footerlogo}
                alt="Logo"
              />
            </div>

            <div className="text-[17px] font-semibold my-[5px] leading-[1.6] list-none p-0">
              <p className="text-[15px] font-bold mb-[10px] flex items-center gap-2">
                <FaEnvelope className="text-gray-300" /> hr@webblocks.in
              </p>

              <p className="text-[15px] font-bold mb-[10px] flex items-center gap-2">
                <FaPhone className="text-gray-300" /> +91 7385171681
              </p>
              {/* <!-- <h3><i class="fa fa-envelope"></i> :  Pune, India</h3> --> */}
            </div>

            <div className="mb-[5px] pt-[25px]">
              <p className="text-[17px] font-bold mb-[10px]">Social Links</p>
              <a href="#" className="mx-[5px] inline-block">
                <FaLinkedin className="w-6 h-6 text-blue-500 hover:text-blue-700 transition-colors" />
              </a>
              <a href="#" className="mx-[5px] inline-block ml-6">
                <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-700 transition-colors" />
              </a>
              {/* <a href="#" className="mx-[5px] inline-block">
                <FaHashtag className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
              </a> */}

              <div className="mt-4">
                <button className="bg-black text-white border-[1.5px] border-white px-[10px] py-[6px] mt-[5px] rounded-lg text-center text-[13px] cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
                  schedule meeting
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center px-5 py-[10px] border-t border-[#444] mt-5">
          {/* <!-- <div class="social-media">
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-hashtag"></i></a>

          </div> --> */}
          <p>© 2021 WebBlocks • Privacy • Terms</p>
        </div>
      </footer>
    </body>
  );
}

export default Footer;
