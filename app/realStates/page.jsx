import Ad from "@/components/shared/ads/Ad";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const RealStates = () => {
  return (
    <>
      <div className="flex items-center">
        <h3 className="text-[#232f3e] text-lg font-bold">Real Estates</h3>
        <ChevronRightIcon className="w-4 h-4 font-black text-[#ff9800] stroke-2" />
      </div>

      <div className="my-12 text-center">
        <p>No results found</p>
      </div>

      <Ad />
    </>
  );
};

export default RealStates;
