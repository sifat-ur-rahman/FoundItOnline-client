"use client";
import AppLoading from "@/app/components/ui/AppLoading";
import { useGetFoundByUserQuery } from "@/app/states/features/found/foundApi";
import { useGetProfileQuery } from "@/app/states/features/user/userApi";
import Image from "next/image";
import Link from "next/link";
import { LeftCircleOutlined } from "@ant-design/icons";
import { Table, Empty } from "antd";

function MyFoundItem() {
  const { data, isLoading } = useGetProfileQuery({});
  const userInfo = data?.data;
  const userId = userInfo?.id;
  const { data: foundData } = useGetFoundByUserQuery({ userId });

  if (isLoading) {
    return <AppLoading />;
  }

  if (!isLoading && foundData?.data?.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
        <div className="flex justify-between mt-5 items-center">
          <div></div>
          <Link
            href="/add-found-item"
            className="px-6 py-3 border border-green-600 bg-green-600 font-bold text-white rounded-lg hover:bg-green-100 hover:text-green-700"
          >
            Report a New Found Item
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
        <Image src={images} alt="item image" width={70} height={60} />
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
      title: "Found Location",
      dataIndex: "locationFound",
      key: "locationFound",
    },
  ];

  const dataSource = foundData?.data.map((item: any) => ({
    key: item.id,
    images: item.images,
    category: item.category,
    description: item.description,
    locationFound: item.locationFound,
  }));

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-between mt-5 items-center">
        <div></div>
        <Link
          href="/add-found-item"
          className="px-6 py-3 border border-green-600 bg-green-600 font-bold text-white rounded-lg hover:bg-green-100 hover:text-green-700"
        >
          Report a New Found Item
        </Link>
      </div>
      <h3 className="text-4xl text-center font-bold my-5">My Found Items</h3>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default MyFoundItem;
