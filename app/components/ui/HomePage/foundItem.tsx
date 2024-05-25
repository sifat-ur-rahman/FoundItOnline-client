"use client";

import { useGetAllFoundQuery } from "@/app/states/features/found/foundApi";
import Image from "next/image";
import Link from "next/link";
import AppModal from "../AppModal";
import { Button } from "antd";

function FoundItem() {
  const { data, isLoading } = useGetAllFoundQuery({ undefined });

  const foundData = data?.data;

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h3 className="text-4xl  text-center font-bold my-10">
        Recent Found Item
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-0 mx-4">
        {foundData?.data.slice(0, 3).map((data: any) => (
          <div
            className="border  flex flex-col  hover:border-green-300 rounded-xl text-xl p-2 my-3 items-center  justify-items-center px-5"
            key={data.id}
          >
            <div className="h-[200] mb-2 flex items-center">
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
                Found Location:{" "}
                <span className="font-bold">{data?.locationFound}</span>
              </p>
            </div>
            <AppModal
              button={
                <button className="px-6 py-3  place-self-center bottom-0 bg-blue-600 font-bold text-white rounded-lg my-3 border border-blue-600 hover:bg-blue-100 hover:text-blue-700 ">
                  Claim
                </button>
              }
            >
              abd
            </AppModal>
          </div>
        ))}
      </div>
      <Link
        href="/all-found-item"
        className="px-6 py-3 bg-green-600 font-bold text-white rounded-lg my-3 border border-green-600 hover:bg-green-100 hover:text-green-700"
      >
        See More
      </Link>
    </div>
  );
}

export default FoundItem;
