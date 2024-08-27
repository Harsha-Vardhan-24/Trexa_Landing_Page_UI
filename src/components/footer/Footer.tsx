import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import IMAGE_LINK from "../../assets/TrExa.png";
import { FiYoutube } from "react-icons/fi";

export const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer className="p-4 border border-1 border-solid border-slate-200 rounded-lg flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between bg-white">
      <img src={IMAGE_LINK} alt="Logo" className="h-6" />
      <p className="font-semibold text-sm">
        {CURRENT_YEAR} Man2Web, All Rights Reserved
      </p>
      <div className="flex gap-6 items-center">
        <a href="#" target="_blank" className="text-xl rounded-lg">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" className="text-xl rounded-lg">
          <FaTwitter />
        </a>
        <a href="#" target="_blank" className="text-xl rounded-lg">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" className="text-xl rounded-lg">
          <FiYoutube />
        </a>
      </div>
    </footer>
  );
};
