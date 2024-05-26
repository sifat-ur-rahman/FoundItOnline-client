"use client";
import AppLoading from "@/app/components/ui/AppLoading";
import Image from "next/image";
import { useGetAllLostQuery } from "@/app/states/features/lost/lostApi";
import { Empty } from "antd";

function AllLostItem() {
  const { data, isLoading } = useGetAllLostQuery({ undefined });
  const lostData = data?.data;
  if (isLoading) {
    return <AppLoading />;
  }
  if (!isLoading && lostData?.data?.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
        <Empty />
      </div>
    );
  }
  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="text-4xl text-center font-bold my-5">All Lost Item</h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 bg-rose-50 rounded-xl text-xl p-2 my-3 items-center  justify-items-center px-5">
        <p className="font-bold">Image</p>
        <p className="font-bold">Category</p>
        <p className="font-bold">Description</p>
        <p className="font-bold">Found Location</p>
        <p className="font-bold">Status</p>
      </div>
      {lostData?.data.map((data: any) => (
        <div
          className="grid grid-cols-2 lg:grid-cols-5 gap-3 bg-rose-50 rounded-xl text-xl p-2 my-3 items-center  justify-items-center px-5"
          key={data.id}
        >
          <Image src={data?.images} alt="img" width={100} height={80} />
          <p>{data?.category}</p>
          <p>{data?.description}</p>
          <p>{data?.locationLost}</p>
          <p>{data?.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AllLostItem;
