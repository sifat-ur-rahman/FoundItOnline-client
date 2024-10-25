"use client";

import DoughnutChart from "@/app/components/ui/DoughnutChart";
import UserChart from "@/app/components/ui/UserChart";
import { useGetAllClaimQuery } from "@/app/states/features/claim/claimApi";
import { useGetAllFoundQuery } from "@/app/states/features/found/foundApi";
import { useGetAllLostQuery } from "@/app/states/features/lost/lostApi";
import { useGetAllUsersQuery } from "@/app/states/features/user/userApi";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import Link from "next/link";
import { FaRegEdit, FaKey } from "react-icons/fa";

function Dashboard() {
  const { data: userData } = useGetAllUsersQuery({ undefined });
  const { data: claimData } = useGetAllClaimQuery({ undefined });
  const { data: foundData } = useGetAllFoundQuery({ undefined });
  const { data: lostData } = useGetAllLostQuery({ undefined });

  return (
    <div className="min-h-screen container mx-auto">
      <h4 className="text-3xl text-center font-extrabold my-7">
        Welcome to foundIt Online <br />{" "}
        <samp className="text-blue-500"> Admin Dashboard</samp>
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <Link
          href={"/dashboard/all-users"}
          className="flex flex-col border hover:border-blue-400 hover:bg-blue-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-blue-600">
            {userData?.data?.length}
          </p>
          <p className="text-3xl font-bold">Users</p>
          <p className="text-sm text-blue-400 my-2">
            see more <ArrowRightOutlined />
          </p>
        </Link>
        <Link
          href={"/dashboard/all-lost-item"}
          className="flex flex-col border hover:border-orange-400 hover:bg-orange-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-red">
            {lostData?.data?.meta?.total}
          </p>
          <p className="text-3xl font-bold">Lost item</p>
          <p className="text-sm text-blue-400 my-2">
            see more <ArrowRightOutlined />
          </p>
        </Link>
        <Link
          href={"/dashboard/all-found-item"}
          className="flex flex-col border hover:border-green-400 hover:bg-green-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-green-500">
            {foundData?.data?.meta?.total}
          </p>
          <p className="text-3xl font-bold">Found item</p>
          <p className="text-sm text-blue-400 my-2">
            see more <ArrowRightOutlined />
          </p>
        </Link>
        <Link
          href={"/dashboard/all-claim-item"}
          className="flex flex-col border hover:border-amber-300 hover:bg-amber-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-yellow-500">
            {claimData?.data?.length}
          </p>
          <p className="text-3xl font-bold">Claim item</p>
          <p className="text-sm text-blue-400 my-2">
            see more <ArrowRightOutlined />
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-9 items-start">
        <div className="col-span-2">
          <UserChart />
        </div>
        <div>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
