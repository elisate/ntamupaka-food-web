import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram, FaPhone } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

function Footer() {
  return (
    <div className="bg-[#093A3E] text-gray-200 pt-10 pb-8 px-6 sm:px-10 lg:px-20 relative z-50">
      <div className="text-xl md:text-2xl text-white font-semibold mb-4 md:mb-6">
        TOGETHER WE SHAPE YOUR FUTURE
      </div>
      <hr className="border-none h-[1px] bg-[#2d2c2c] mb-4 md:mb-6" />

      <div className="flex flex-col md:flex-row md:justify-between py-4 md:py-6">
        {/* Find Us */}
        <div className="flex flex-col gap-2 text-sm md:text-base mt-4 md:mt-0">
          <div className="font-normal text-[#b3b3b3] mb-2">Find Us</div>
          <div className="border-b border-gray-600 w-8 md:w-9 mb-2 h-2 rounded-full"></div>

          <div className="flex items-center text-gray-400  cursor-pointer">
            <IoLogoLinkedin className="text-xl md:text-2xl mr-2" />
            LinkedIn
          </div>

          <div className="flex items-center text-gray-400  cursor-pointer">
            <FaInstagram className="text-xl md:text-2xl mr-2" />
            Instagram
          </div>

          <div className="flex items-center text-gray-400  cursor-pointer">
            <RiTiktokFill className="text-xl md:text-2xl mr-2" />
            TikTok
          </div>

          <div className="flex items-center text-gray-400  cursor-pointer">
            <BsTwitterX className="text-xl md:text-2xl mr-2" />
            Twitter
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-1 text-[15px] md:text-[17px] mt-4 md:mt-0">
          <div className="font-normal text-[#b3b3b3] mb-2">Quick Links</div>
          <div className="border-b border-gray-600 w-8 md:w-9 mb-2 h-2 rounded-full"></div>

          <div className="text-gray-400  cursor-pointer">Home</div>
          <div className="text-gray-400  cursor-pointer">All Courses</div>
          <div className="text-gray-400  cursor-pointer">About Us</div>
          <div className="text-gray-400  cursor-pointer">Training</div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-1 text-sm md:text-base mt-4 md:mt-0">
          <div className="font-normal text-[#b3b3b3] mb-2">Contact Us</div>
          <div className="border-b border-gray-600 w-8 md:w-9 mb-2 h-2 rounded-full"></div>
          <div className="flex items-center text-gray-400  cursor-pointer">
            <FaPhone className="text-lg md:text-xl mr-2" />
            +250788513789
          </div>
          <div className="flex items-center text-gray-400  cursor-pointer">
            <MdOutlineEmail className="text-lg md:text-xl mr-2" />
            esthen2307@gmail.com
          </div>
          <div className="flex items-center text-gray-400  cursor-pointer">
            <ImLocation2 className="text-lg md:text-xl mr-2" />
            Kigali-Gasabo KG33 AVE
          </div>
        </div>
      </div>
      <hr className="border-none h-[1px] bg-[#2d2c2c] mb-4 md:mb-6" />

      <div className="text-center text-base md:text-lg text-[#b3b3b3]">
        &copy; 2024 NTAMUPAKA FOOD WEB. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
