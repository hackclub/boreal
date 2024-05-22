import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#C3C6A1] py-6 px-12 text-[#6D5C55] font-medium text-lg">
      <p className="text-center mt-3 mb-1 font-bold">Built with love by teenagers, for teenagers at Hack Club.</p>
      <div className="flex items-center gap-2 justify-center">
        <a href="https://hackclub.com" className="underline">Hack&nbsp;Club</a>
        <div className="w-[2px] h-3 bg-[#6D5C55]/40" />
        <a href="https://hackclub.com/slack?event=The%20Boreal%20Express" className="underline">Slack</a>
        <div className="w-[2px] h-3 bg-[#6D5C55]/40" />
        <a href="https://www.youtube.com/@HackClubHQ" className="underline">YouTube</a>
        <div className="w-[2px] h-3 bg-[#6D5C55]/40" />
        <a href="https://www.instagram.com/starthackclub/" className="underline">Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
