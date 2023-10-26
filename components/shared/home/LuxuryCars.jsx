import Link from "next/link";

const LuxuryCars = () => {
  return (
    <div>
      <div className="flex gap-2 items-baseline mb-4">
        <h3 className="text-[#232f3e] text-lg font-bold">Luxury Cars</h3>
        <Link href="/luxuryCars" className="text-[#ff9800] text-sm">
          View all
        </Link>
      </div>

      <div className="my-5">
        <p className="text-[#97979d] text-sm">No Results Found</p>
      </div>
    </div>
  );
};

export default LuxuryCars;
