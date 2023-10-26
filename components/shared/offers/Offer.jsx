"use client";

import Image from "next/image";
import bookmarkImage from "../../../public/images/shared/offers/bookmark.jpg";
import gadgetImage from "../../../public/images/shared/offers/gadgets.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Offer = () => {
  const router = useRouter();

  return (
    <div className="py-8 w-full">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <Link
          href="/"
          className="w-1/2 h-48 relative group rounded-lg overflow-hidden shadow shadow-black"
        >
          <Image
            src={bookmarkImage}
            layout="fill"
            className="rounded-lg object-cover group-hover:scale-105 duration-300"
          />
          <div className="absolute text-black w-full h-full bg-gradient-to-r from-[#FFFFFF] to-[rgba(21, 21, 21, 0)] rounded-lg flex flex-col gap-4 p-5 w-2/3">
            <h3 className="text-2xl text-[#232f3e] font-semibold">
              Books: Up to 15% Off Top Reads
            </h3>
            <button
              onClick={() => router.push("/")}
              className="bg-[#ff9800] hover:bg-[#ffa825] px-4 py-1 rounded-lg text-center w-32 text-white"
            >
              Browse Now
            </button>
          </div>
        </Link>

        <Link
          href="/"
          className="w-1/2 h-48 relative group rounded-lg overflow-hidden shadow shadow-black"
        >
          <Image
            src={gadgetImage}
            layout="fill"
            className="rounded-lg object-cover group-hover:scale-105 duration-300"
          />
          <div className="absolute text-black w-full h-full bg-gradient-to-r from-[#FFFFFF] to-[rgba(21, 21, 21, 0)] rounded-lg flex flex-col gap-4 p-5 w-2/3">
            <h3 className="text-2xl text-[#232f3e] font-semibold">
              Gadgets: Up to 20% Off Best Selling
            </h3>
            <button
              onClick={() => router.push("/")}
              className="bg-[#ff9800] hover:bg-[#ffa825] px-4 py-1 rounded-lg text-center w-32 text-white"
            >
              Browse Now
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Offer;
