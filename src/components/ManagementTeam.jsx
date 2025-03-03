"use client"
import { useInstantTransition } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const teamMembers = [
  {
    name: "Jean-Boris ROUX",
    role: "Founder",
    shortDescription: "Jean-Boris ROUX, aka 'JB', is a seasoned leader with over 25 years of experience...",
    image: "/Team/Member_1.png",
  },
  {
    name: "Parag Wasnik",
    role: "CEO",
    shortDescription: "An engineer and an MBA, Parag has over two decades of experience in FMCG, Retail...",
    image: "/Team/Member_2.png",
  },
];

function ManagementTeam() {
  
  return (
    <div  style={{
      background: "linear-gradient(to bottom, white 0%, #581c87 10%, #581c87 90%, white 100%)"
    }} className="w-[100%] pb-16 pt-10 md:px-16 px-8  ">
    <h2 className="md:text-5xl md:mt-2 text-4xl   mb-14 font-bold text-center text-white">Management Team</h2>
    <div className=" md:mb-4  md:flex md:overflow-visible flex-row flex overflow-x-scroll space-x-4 md:justify-center gap-6">
    {/* <div className="grid md:flex  md:justify-center gap-6"> */}
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="p-8 md:w-[90%] w-[100vw] border rounded-xl  shadow-lg bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="flex items-center gap-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-25 rounded-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{member.shortDescription}</p>
          {/* <Link to={`/about#${member.name === "Jean-Boris ROUX"?'1':'2'}`} className="mt-4 text-base font-medium text-neutral-900 hover:bg-neutral-300">Read More</Link> */}
          <Link to={`/about#${member.name === "Jean-Boris ROUX" ? '1' : '2'}`} 
      className="mt-4 text-base font-medium text-neutral-900 hover:bg-neutral-300">
  Read More
</Link>

        </div>
      ))}
    </div>
  </div>
  );
}

export default ManagementTeam;
