import houseImage from "../../../public/images/home/house.jpg";
import gadgetImage from "../../../public/images/home/gadget.jpg";
import mobileImage from "../../../public/images/home/mobile.jpg";
import booksImage from "../../../public/images/home/books.jpg";
import carsImage from "../../../public/images/home/cars.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-[420px]">
      <div className="grid grid-cols-3 gap-1 h-full">
        <Link
          href="/"
          className="w-full h-full relative group rounded-l-lg overflow-hidden"
        >
          <Image
            src={houseImage}
            layout="fill"
            className="rounded-l-lg object-cover group-hover:scale-105 duration-300"
          />
          <div className="absolute text-white w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-l-lg flex flex-col gap-1 justify-end pl-4 pb-6">
            <p className="text-sm">Buy or Rent?</p>
            <h3 className="text-xl font-semibold">Houses & Apartments</h3>
          </div>
        </Link>
        <div className="space-y-1 flex flex-col">
          <Link href="/" className="h-1/2 relative group overflow-hidden">
            <Image
              src={gadgetImage}
              layout="fill"
              className="object-cover group-hover:scale-105 duration-300"
            />
            <div className="absolute text-white w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col gap-1 justify-end pl-4 pb-6">
              <p className="text-sm">Electronics?</p>
              <h3 className="text-xl font-semibold">Gadgets & Consoles</h3>
            </div>
          </Link>
          <Link href="/" className="h-1/2 relative group overflow-hidden">
            <Image
              src={booksImage}
              layout="fill"
              className="object-cover group-hover:scale-105 duration-300"
            />
            <div className="absolute text-white w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col gap-1 justify-end pl-4 pb-6">
              <p className="text-sm">Need to Read More?</p>
              <h3 className="text-xl font-semibold">Books & eBooks</h3>
            </div>
          </Link>
        </div>
        <div className="space-y-1 flex flex-col">
          <Link
            href="/"
            className="h-1/2 relative group rounded-tr-lg overflow-hidden"
          >
            <Image
              src={mobileImage}
              layout="fill"
              className="object-cover rounded-tr-lg group-hover:scale-105 duration-300"
            />
            <div className="absolute text-white w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-tr-lg flex flex-col gap-1 justify-end pl-4 pb-6">
              <p className="text-sm">Looking for a Phone?</p>
              <h3 className="text-xl font-semibold">Mobile Phones</h3>
            </div>
          </Link>
          <Link
            href="/"
            className="h-1/2 relative group rounded-br-lg overflow-hidden"
          >
            <Image
              src={carsImage}
              layout="fill"
              className="object-cover rounded-br-lg group-hover:scale-105 duration-300"
            />
            <div className="absolute text-white w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-br-lg flex flex-col gap-1 justify-end pl-4 pb-6">
              <p className="text-sm">Looking for a Car?</p>
              <h3 className="text-xl font-semibold">Cars & Scooters</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
