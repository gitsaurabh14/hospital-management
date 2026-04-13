import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" md:mx-10">
      <div className=" flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        {/* left */}
        <div>
          <img className=" mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            officia, sit amet iure quam tempore magni voluptatibus quas
          </p>
        </div>
        {/* middle */}
        <div>
          <p className=" text-xl font-medium mb-5">Company</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li> Contact Us</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
        {/* right */}
        <div>
          <p className=" text-xl font-medium mb-5">Get In Touch</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>123-121-212-1</li>
            <li>h@h.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* copyright text */}
        <hr />
        <p className="py-5 text-sm text-center">
          copyright 2024@ Curasys - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
