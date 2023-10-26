"use client";

import Image from "next/image";
import adImage from "../../../public/images/shared/ads/ad.png";
import Link from "next/link";

const Ad = () => {
  return (
    <div className="relative">
      <Link href="/">
        <Image src={adImage} height={500} width={500} className="w-full" />
      </Link>
    </div>
  );
};

export default Ad;
