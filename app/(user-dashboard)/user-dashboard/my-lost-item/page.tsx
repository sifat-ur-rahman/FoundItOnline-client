"use client";
import AppLoading from "@/app/components/ui/AppLoading";
import { useGetProfileQuery } from "@/app/states/features/user/userApi";
import Image from "next/image";
import Link from "next/link";
import { LeftCircleOutlined } from "@ant-design/icons";
import { useGetLostByUserQuery } from "@/app/states/features/lost/lostApi";
import { Table, Empty } from "antd";

function MyLostItem() {
  const { data, isLoading } = useGetProfileQuery({});
  const userInfo = data?.data;
  const userId = userInfo?.id;
  const { data: lostData } = useGetLostByUserQuery({ userId });

  if (isLoading) {
    return <AppLoading />;
  }

  if (!isLoading && lostData?.data?.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
        <div className="flex justify-between mt-5 items-center">
          <Link
            href="/add-lost-item"
            className="px-6 py-3 border border-rose-600 bg-rose-600 font-bold text-white rounded-lg hover:bg-rose-100 hover:text-rose-700"
          >
            Report a New Lost Item
          </Link>
        </div>
        <Empty />
      </div>
    );
  }

  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (images: string) => (
        <Image src={images} alt="item image" width={80} height={60} />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Location Found",
      dataIndex: "locationLost",
      key: "locationLost",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  const dataSource = lostData?.data.map((item: any) => ({
    key: item.id,
    images: item.images,
    category: item.category,
    description: item.description,
    locationLost: item.locationLost,
    status: item.status,
  }));

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-between mt-5 items-center">
        <div></div>
        <Link
          href="/add-lost-item"
          className="px-6 py-3 border border-rose-600 bg-rose-600 font-bold text-white rounded-lg hover:bg-rose-100 hover:text-rose-700"
        >
          Report a New Lost Item
        </Link>
      </div>
      <h3 className="text-4xl text-center font-bold my-5">My Lost Items</h3>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default MyLostItem;
