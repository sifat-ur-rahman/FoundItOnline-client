"use client";
import AppLoading from "@/app/components/ui/AppLoading";
import { useGetProfileQuery } from "@/app/states/features/user/userApi";
import Link from "next/link";

import { useGetClaimByUserQuery } from "@/app/states/features/claim/claimApi";
import { Table, Empty } from "antd";

function MyClaimItem() {
  const { data, isLoading } = useGetProfileQuery({});
  const userInfo = data?.data;
  const userId = userInfo?.id;
  const { data: claimData } = useGetClaimByUserQuery({ userId });

  if (isLoading) {
    return <AppLoading />;
  }

  if (!isLoading && claimData?.data?.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
        <div className="flex justify-between mt-5 items-center">
          <div></div>
          <Link
            href="/add-found-item"
            className="px-6 py-3 border border-green-600 bg-green-600 font-bold text-white rounded-lg hover:bg-green-100 hover:text-green-700"
          >
            All New Found Item
          </Link>
        </div>
        <Empty />
      </div>
    );
  }

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Phone",
      dataIndex: "contactPhone",
      key: "contactPhone",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const dataSource = claimData?.data.map((item: any) => ({
    key: item.id,
    description: item.description,
    contactPhone: item.contactPhone,
    status: item.status,
  }));

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-between mt-5 items-center">
        <div></div>
        <Link
          href="/add-found-item"
          className="px-6 py-3 border border-green-600 bg-green-600 font-bold text-white rounded-lg hover:bg-green-100 hover:text-green-700"
        >
          All New Found Item
        </Link>
      </div>
      <h3 className="text-4xl text-center font-bold my-5">My Claim Report</h3>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default MyClaimItem;
