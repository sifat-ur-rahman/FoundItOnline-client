"use client";
import { UpOutlined } from "@ant-design/icons";
import { useGetAllFoundQuery } from "@/app/states/features/found/foundApi";
import Image from "next/image";
import Link from "next/link";
import AppLoading from "@/app/components/ui/AppLoading";

function AllFoundItem() {
  const { data, isLoading } = useGetAllFoundQuery({ undefined });

  const foundData = data?.data;
  if (isLoading) {
    return <AppLoading />;
  }
  return (
    <div className="container mx-auto min-h-screen ">
      <div className="flex justify-between mt-5 items-center">
        <Link
          href="/all-lost-item"
          className="text-3xl p-3 text-blue-500 hover:bg-blue-50 rounded-xl"
        >
          <UpOutlined /> All Lost Item
        </Link>
        <Link
          href="/add-found-item"
          className="px-6 py-3 border border-green-600 bg-green-600 font-bold text-white rounded-lg  hover:bg-green-100 hover:text-green-700"
        >
          Report a New Found Item
        </Link>
      </div>
      <h3 className="text-4xl  text-center font-bold my-10">All Found Item</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-0 mx-4">
        {foundData?.data.map((data: any) => (
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
                Found Location:{" "}
                <span className="font-bold">{data?.locationFound}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllFoundItem;
