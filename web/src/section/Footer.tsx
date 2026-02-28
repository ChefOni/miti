import React from 'react';
import LogoSVG from '../assets/miti.logo';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" p-15 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column (Spans 2 columns on large screens) */}
          <div className="">
            <div className="flex items-center gap-3 mb-6">
              {/* Using the LogoSVG with a light emerald color for the dark background */}
              <LogoSVG size={200} color="#082408" /> 
              {/* <span className="text-2xl font-bold  tracking-tight">Miti</span> */}
            </div>
            {/* <p className="text-emerald-200/80 text-sm leading-relaxed max-w-sm mb-6">
              Bridging the gap between ancestral wisdom and modern safety. We are building the digital infrastructure for Africa's informal herbal market.
            </p> */}
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h3 className=" font-semibold text-sm tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Herb Directory</a></li>
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Safety Checker</a></li>
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Health Passport</a></li>
              <li>
                <a href="#" className=" hover: transition-colors duration-200 text-sm flex items-center gap-2">
                  Wisdom Exchange <span className="bg-emerald-800 text-emerald-100 text-[10px] px-2 py-0.5 rounded-full">Beta</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div>
            <h3 className=" font-semibold text-sm tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Partner Bios</a></li>
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Careers</a></li>
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div>
            <h3 className=" font-semibold text-sm tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Terms of Service</a></li>
              <li><a href="#" className=" hover: transition-colors duration-200 text-sm">Medical Disclaimer</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-8 border-t border-emerald-950 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className=" text-sm text-center md:text-left">
            &copy; {currentYear}   <span className='font-bold '>26 Labs. </span> All rights reserved.
          </p>
          
      
          
        </div>
      </div>
    </footer>
  );
};