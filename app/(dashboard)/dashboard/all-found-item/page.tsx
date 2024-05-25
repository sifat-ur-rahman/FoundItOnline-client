"use client";
import AppLoading from "@/app/components/ui/AppLoading";
import { useGetAllFoundQuery } from "@/app/states/features/found/foundApi";
import Image from "next/image";
import Link from "next/link";
import { LeftCircleOutlined } from "@ant-design/icons";
import { Empty } from "antd";

function AllFoundItem() {
  const { data, isLoading } = useGetAllFoundQuery({ undefined });

  const foundData = data?.data;
  if (isLoading) {
    return <AppLoading />;
  }
  if (!isLoading && foundData?.data?.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
        <Empty />
      </div>
    );
  }
  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="text-4xl text-center font-bold my-5">My Found Item</h3>
      <div className="grid grid-cols-2 font-bold lg:grid-cols-4 gap-3 bg-green-100 rounded-xl text-xl p-2 my-3 items-center  justify-items-center px-5">
        <p>Image</p>
        <p>Category</p>
        <p>Description</p>
        <p>Found Location</p>
      </div>
      {foundData?.data.map((data: any) => (
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-green-100 rounded-xl text-xl p-2 my-3 items-center  justify-items-center px-5"
          key={data.id}
        >
          <Image src={data?.images} alt="img" width={70} height={60} />
          <p>{data?.category}</p>
          <p>{data?.description}</p>
          <p>{data?.locationFound}</p>
        </div>
      ))}
    </div>
  );
}

export default AllFoundItem;
