import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#C3C6A1] py-6 px-12 text-[#6D5C55] font-medium text-lg">
      <p className="text-center">Built with love by teenagers, for teenagers @ Hack Club</p>
      <div className="flex items-center gap-2 justify-center">
        <a href="https://hackclub.com">Home</a>
        <div className="w-[2px] h-4 bg-[#6D5C55]" />
        <a href="https://hackclub.com/slack">Slack</a>
        <div className="w-[2px] h-4 bg-[#6D5C55]" />
        <a href="https://www.youtube.com/@HackClubHQ">YouTube</a>
        <div className="w-[2px] h-4 bg-[#6D5C55]" />
        <a href="https://www.instagram.com/starthackclub/">Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
