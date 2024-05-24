import Image from "next/image";

function Testimonials() {
  return (
    <div className="container mx-auto">
      <h4 className="text-4xl  text-center font-bold my-10">
        Our Success Stories:
      </h4>
      <div className="lg:mx-auto mx-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-emerald-200 p-5 rounded-lg">
          <p className="text-xl font-bold text-center">
            I found my lost ring within a day, thanks to Lost & Found!
          </p>
          <p className="text-xl font-bold text-right italic">~Sarah K.</p>
        </div>
        <div className="bg-pink-200 p-5 rounded-lg">
          <p className="text-xl font-bold text-center">
            The process was simple and effective. Got my wallet back quickly!
          </p>
          <p className="text-xl font-bold text-right italic">~John D.</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
