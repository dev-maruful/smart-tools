import Image from "next/image";
import logo from "../../public/images/header-logo.png";
import Link from "next/link";
import {
  ChevronDownIcon,
  SunIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="text-white">
      <div className="py-3 bg-[#232f3e]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-7 w-full text-base font-semibold">
            <Link href="/">
              <Image
                src={logo}
                height={1080}
                width={1920}
                className="h-9 w-40"
              />
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Home
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#ff9800]"
            >
              <span>Features</span>{" "}
              <ChevronDownIcon className="h-4 w-4 stroke-2" />
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Blogger Templates
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Typography
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Shortcodes
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <SunIcon className="h-5 w-5 stroke-2 hover:text-[#ff9800] cursor-pointer" />
            <div className="relative">
              <HeartIcon className="h-5 w-5 stroke-2 hover:text-[#ff9800] cursor-pointer" />
              <div className="absolute bg-white text-black rounded-xl px-1 font-semibold text-xs -top-1  -right-2">
                0
              </div>
            </div>
            <div className="p-2 bg-[#37475a] text-white rounded-lg">
              <MagnifyingGlassIcon className="h-5 w-5 stroke-2 hover:text-[#ff9800] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-2.5 bg-[#37475a]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center text-sm">
            <Link href="/" className="hover:text-[#ff9800]">
              Home
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Best Sellers
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Books
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Electronics
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Fashion
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              Computers
            </Link>
            <Link href="/" className="hover:text-[#ff9800]">
              New Releases
            </Link>
          </div>

          <div className="hover:text-[#ff9800] flex items-center gap-1 cursor-pointer">
            <span>Follow Us</span>
            <ChevronDownIcon className="h-4 w-4 stroke-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
