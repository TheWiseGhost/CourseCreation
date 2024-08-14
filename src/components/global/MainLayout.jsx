import React from "react";
import { motion } from "framer-motion";

const CircleText = ({ text }) => (
  <div className="flex flex-row items-center">
    <div className="bg-gray-400 p-2 rounded-full mr-2"></div>
    <div className="text-gray-500 text-sm">{text}</div>
  </div>
);

const Header = ({ title, subtitle }) => (
  <div className="flex flex-col space-y-6">
    <div className="flex items-center gap-2">
      <CircleText text="Coursard" />
      <span>/</span>
      <span className="text-black">{subtitle}</span>
    </div>
    <div>
      <h1 className="text-4xl font-medium">{title}</h1>
    </div>
  </div>
);

const SideInfoBox = ({ content, value, width = 170 }) => (
  <div className="relative h-20 -mt-6" style={{ width: `${width}px` }}>
    <div className="absolute bg-gray-300 w-full h-full rounded-2xl top-2"></div>
    <motion.div
      initial={{ top: "0px" }}
      whileHover={{ top: "-1px" }}
      transition={{ duration: 0.05, ease: "easeInOut" }}
      className="relative bg-white w-full h-full rounded-2xl p-4 flex flex-col items-center"
    >
      <div className="text-xl font-medium">{content}</div>
      <div className="text-gray-700">{value}</div>
    </motion.div>
  </div>
);

const TimeDisplay = () => (
  <div className="font-dm justify-center space-y-2 text-center pr-6">
    <div className="text-4xl">9:57</div>
    <div className="text-md text-gray-700">August 9th, 2024</div>
  </div>
);

const FooterLogo = () => (
  <div className="flex items-center justify-center">
    <div className="bg-black rounded-full p-2"></div>
    <span className="ml-2 font-dm font-medium">Coursard</span>
  </div>
);

const MainLayout = ({ children, title, subtitle }) => (
  <div className="font-dm pt-8 pb-6 rounded-tl-[60px] mt-1 mr-1 px-10 flex flex-col h-screen w-full bg-white">
    {/* Top Header */}
    <div className="flex justify-between items-center">
      <Header title={title} subtitle={subtitle} />
      <div className="flex items-center gap-16">
        <SideInfoBox content="4923 / 5000" value="Users" width="200" />
        <SideInfoBox content="215 / 500" value="Storage" width="200" />
      </div>
      <TimeDisplay />
    </div>

    {/* Main Content with Right Sidebar */}
    <div className="flex-grow flex pt-6">
      {/* 2x2 Grid for Courses */}
      {children}

      {/* Right Sidebar */}
      <div className="w-1/4 items-end flex flex-col pt-6 pb-2 justify-between">
        <SideInfoBox content="4 / 4" value="Courses" width="170" />
        <FooterLogo />
      </div>
    </div>
  </div>
);

export default MainLayout;
