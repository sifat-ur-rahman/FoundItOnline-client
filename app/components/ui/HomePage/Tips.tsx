import Image from "next/image";
import tipsImg from "@/app/assets/img03.png";

function Tips() {
  return (
    <div className="mt-10 max-w-[1130] container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center">
      <div className="mx-5 lg:mx-0">
        <h4 className="text-3xl font-bold my-5">
          Advice for Reporting Lost or Found Items:
        </h4>
        <ol className="list-disc ml-4">
          <li className="text-lg font-semibold ">
            Provide detailed descriptions including unique identifiers.
          </li>
          <li className="text-lg font-semibold ">
            Mention the exact date and location.
          </li>
          <li className="text-lg font-semibold ">
            Upload clear photos if possible.
          </li>
        </ol>
      </div>
      <Image src={tipsImg} alt="tipsIm img" width={400} height={300} />
    </div>
  );
}

export default Tips;
