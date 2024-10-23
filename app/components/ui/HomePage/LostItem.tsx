"use client";

import { useGetAllLostQuery } from "@/app/states/features/lost/lostApi";
import Image from "next/image";
import Link from "next/link";
import AppModal from "../AppModal";
import { Spin } from "antd";

function LostItem() {
  const { data, isLoading } = useGetAllLostQuery({ undefined });

  const lostData = data?.data;

  if (isLoading) {
    <Spin />;
  }
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h3 className="text-4xl  text-center font-bold my-10">
        Recent Lost Item
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-0 mx-4">
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
            <AppModal
              button={
                <button className="px-6 py-3  place-self-center bottom-0 bg-blue-600 font-bold text-white rounded-lg my-3 border border-blue-600 hover:bg-blue-100 hover:text-blue-700 ">
                  Details
                </button>
              }
            >
              {" "}
              <div className="grid grid-cols-2 p-8 gap-6 items-center">
                <div className="w-[200] mb-2">
                  <Image
                    src={data?.images}
                    alt="img"
                    width={200}
                    height={160}
                  />
                </div>
                <div className="text-lg">
                  <p>
                    Category:{" "}
                    <span className="font-bold">{data?.category}</span>
                  </p>
                  <p>
                    Description:<p className="font-bold">{data?.description}</p>
                  </p>
                  <p>
                    Lost Location:{" "}
                    <span className="font-bold">{data?.locationLost}</span>
                  </p>
                  <p>
                    Contact Email:{" "}
                    <span className="font-bold">{data?.contactEmail}</span>
                  </p>
                  <p>
                    Contact Phone No:{" "}
                    <span className="font-bold">{data?.contactPhone}</span>
                  </p>
                </div>
              </div>
            </AppModal>
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
