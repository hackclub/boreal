import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#C3C6A1] py-10 px-20">
      <p>Built with ❤️ by teenagers, for teenagers @ Hack Club</p>
      <div className="flex items-center gap-2">
        <a href="https://hackclub.com">Home</a>
        <div className="w-px h-4 bg-black" />
        <a href="https://hackclub.com/slack">Slack</a>
        <div className="w-px h-4 bg-black" />
        <a href="https://www.youtube.com/@HackClubHQ">YouTube</a>
        <div className="w-px h-4 bg-black" />
        <a href="https://www.instagram.com/starthackclub/">Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
