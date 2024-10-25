"use client";
import AppLoading from "@/app/components/ui/AppLoading";
import DoughnutChart from "@/app/components/ui/DoughnutChart";
import UserChart from "@/app/components/ui/UserChart";

import { useGetClaimByUserQuery } from "@/app/states/features/claim/claimApi";
import { useGetFoundByUserQuery } from "@/app/states/features/found/foundApi";
import { useGetLostByUserQuery } from "@/app/states/features/lost/lostApi";
import { useGetProfileQuery } from "@/app/states/features/user/userApi";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import Link from "next/link";
import { FaRegEdit, FaKey } from "react-icons/fa";

function Profile() {
  const { data, isLoading } = useGetProfileQuery({ undefined });
  const userInfo = data?.data;

  const userId = userInfo?.id;

  const { data: claimData } = useGetClaimByUserQuery({ userId });
  const { data: lostData } = useGetLostByUserQuery({ userId });
  const { data: foundData } = useGetFoundByUserQuery({ userId });

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <div className="min-h-screen container mx-auto">
      <h4 className="text-4xl text-center font-extrabold my-7">
        User Dashboard
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <Link
          href={"/user-dashboard/my-lost-item"}
          className="flex flex-col border hover:border-orange-400 hover:bg-orange-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-red">
            {lostData?.data?.length}
          </p>
          <p className="text-3xl font-bold">Lost item</p>
          <p className="text-sm text-blue-400 my-2">
            see more <ArrowRightOutlined />
          </p>
        </Link>
        <Link
          href={"/user-dashboard/my-found-item"}
          className="flex flex-col border hover:border-green-400 hover:bg-green-50 items-center p-4 rounded-2xl"
        >
          <p className="text-2xl font-bold">You have</p>
          <p className="text-4xl font-extrabold text-green-500">
            {foundData?.data?.length}
          </p>
          <p className="text-3xl font-bold">Found item</p>
          <p className="text-sm text-blue-400 my-2">
            see more <ArrowRightOutlined />
          </p>
        </Link>
        <Link
          href={"/user-dashboard/my-claim-item"}
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
      <div className="grid grid-cols-3">
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

export default Profile;
