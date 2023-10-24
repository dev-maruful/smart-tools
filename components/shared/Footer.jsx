import Image from "next/image";
import logo from "../../public/images/shared/header-logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="py-9 bg-[#37475a]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8 w-full">
            <Image src={logo} height={1080} width={1920} className="h-9 w-40" />
            <div className="space-y-3">
              <h3 className="text-lg font-bold">About Us</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                ullam voluptatibus <br /> nobis itaque ipsum voluptatem!
              </p>
            </div>
          </div>

          {/* social icons */}
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-slate-700 hover:bg-[#3b5998] rounded-lg cursor-pointer">
              <FaFacebook className="w-5 h-5" />
            </div>
            <div className="p-2 bg-slate-700 hover:bg-[#1DA1F2] rounded-lg cursor-pointer">
              <FaTwitter className="w-5 h-5" />
            </div>
            <div className="p-2 bg-slate-700 hover:bg-[#c4302b] rounded-lg cursor-pointer">
              <FaYoutube className="w-5 h-5" />
            </div>
            <div className="p-2 bg-slate-700 hover:bg-gradient-to-r from-[#962fbf] via-[#fa7e1e] to-[#d62976] rounded-lg cursor-pointer">
              <FaInstagram className="w-5 h-5" />
            </div>
            <div className="p-2 bg-slate-700 hover:bg-[#c8232c] rounded-lg cursor-pointer">
              <FaPinterest className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-[#1c2634]">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="w-full flex items-center gap-2">
            <p>Design by -</p>
            <p className="cursor-pointer hover:text-[#ff9800]">
              Shadate Hossen
            </p>
          </div>

          <div className="w-full flex items-center justify-end gap-7">
            <Link href="/" className="hover:text-[#ff9800]">
              Home
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              About Us
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
