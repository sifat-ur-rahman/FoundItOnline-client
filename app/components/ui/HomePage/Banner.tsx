import img from "@/app/assets/banner.jpg";
import Link from "next/link";
function Banner() {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${img.src})`,
        height: "400px",
        opacity: "initial",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-center text-center py-20 relative z-10">
        <h1 className="text-5xl font-extrabold text-white mb-10">
          Find what you lost, reunite what you found!
        </h1>
        <div className="flex space-x-4">
          <Link
            href="/add-lost-item"
            className="px-6 py-3 bg-blue-600 font-bold text-white rounded-lg  hover:bg-blue-100 hover:text-blue-700"
          >
            Report a Lost Item
          </Link>
          <Link
            href="/add-found-item"
            className="px-6 py-3 bg-green-600 font-bold text-white rounded-lg  hover:bg-green-100 hover:text-green-700"
          >
            Report a Found Item
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
