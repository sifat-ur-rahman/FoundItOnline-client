"use client";

import { useGetAllLostQuery } from "@/app/states/features/lost/lostApi";
import Image from "next/image";
import Link from "next/link";

function LostItem() {
  const { data, isLoading } = useGetAllLostQuery({ undefined });

  const lostData = data?.data;
  console.log({ lostData });
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h3 className="text-4xl  text-center font-bold my-10">
        Recent Found Item
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-0 mx-4">
        {lostData?.data.slice(0, 3).map((data: any) => (
          <div
            className="border flex flex-col  hover:border-green-300 rounded-xl text-xl p-2 my-3 items-center  justify-items-center px-5"
            key={data.id}
          >
            <div className="w-[200] mb-2">
              <Image src={data?.images} alt="img" width={200} height={160} />
            </div>
            <div>
              <p>
                Category: <span className="font-bold">{data?.category}</span>
              </p>
              <p>
                Description:<p className="font-bold">{data?.description}</p>
              </p>
              <p>
                Lost Location:{" "}
                <span className="font-bold">{data?.locationLost}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/all-lost-item"
        className="px-6 my-3 py-3 bg-rose-400 font-bold text-white rounded-lg  border border-rose-500 hover:bg-rose-100 hover:text-rose-700"
      >
        See All Lost Item
      </Link>
    </div>
  );
}

export default LostItem;
