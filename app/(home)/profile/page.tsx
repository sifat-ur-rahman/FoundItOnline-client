"use client";
import AppLoading from "@/app/components/ui/AppLoading";
import AppModal from "@/app/components/ui/AppModal";
import { useGetProfileQuery } from "@/app/states/features/user/userApi";
import { Skeleton, Spin } from "antd";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

function Profile() {
  const { data, isLoading } = useGetProfileQuery({ undefined });
  const userInfo = data?.data;
  console.log(userInfo);

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-end ">
        <p className="p-3">
          <FaRegEdit className="text-2xl " />
          <AppModal button={true}>e</AppModal>
        </p>
      </div>
      <div className="my-10  grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="bg-slate-200 p-3 rounded-xl font-bold">
          <p className="text-xl ">Name:</p>
          <p className="text-lg ">{userInfo?.name}</p>
        </div>
        <div className="bg-slate-200 p-3 rounded-xl font-bold">
          <p className="text-xl ">User Name:</p>
          <p className="text-lg ">{userInfo?.username}</p>
        </div>
        <div className="bg-slate-200 p-3 rounded-xl font-bold">
          <p className="text-xl ">Email:</p>
          <p className="text-lg ">{userInfo?.email}</p>
        </div>
        <div className="bg-slate-200 p-3 rounded-xl font-bold">
          <p className="text-xl ">States:</p>
          <p className="text-lg ">{userInfo?.status}</p>
        </div>
      </div>
      <h4 className="text-4xl text-center font-extrabold my-7">
        Your Activity
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
        <Link
          href={"/profile/my-lost-item"}
          className="flex flex-col border hover:border-orange-400 hover:bg-orange-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-red">3</p>
          <p className="text-3xl font-bold">Lost item</p>
        </Link>
        <Link
          href={"/profile/my-found-item"}
          className="flex flex-col border hover:border-green-400 hover:bg-green-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-green-500">2</p>
          <p className="text-3xl font-bold">Found item</p>
        </Link>
        <Link
          href={"/profile/my-claim-item"}
          className="flex flex-col border hover:border-amber-300 hover:bg-amber-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-yellow-500">3</p>
          <p className="text-3xl font-bold">Claim item</p>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
