import Image from "next/image";
import tipsImg from "@/app/assets/img03.png";
import { FaRegCircleDot } from "react-icons/fa6";
function Tips() {
  return (
    <div className="mt-10  container lg:mx-auto mx-5 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div>
        <h4 className="text-4xl font-bold my-5">
          Advice for Reporting Lost or Found Items:
        </h4>
        <ol className="list-disc ">
          <li className="text-xl font-semibold ">
            Provide detailed descriptions including unique identifiers.
          </li>
          <li className="text-xl font-semibold ">
            Mention the exact date and location.
          </li>
          <li className="text-xl font-semibold ">
            Upload clear photos if possible.
          </li>
        </ol>
      </div>
      <Image src={tipsImg} alt="tipsIm img" width={400} height={300} />
    </div>
  );
}

export default Tips;
