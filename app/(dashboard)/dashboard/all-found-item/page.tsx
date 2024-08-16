"use client";
import React from "react";
import AppLoading from "@/app/components/ui/AppLoading";
import { useGetAllFoundQuery } from "@/app/states/features/found/foundApi";
import { Table, Empty } from "antd";
import Image from "next/image";

function AllFoundItem() {
  const { data: foundData, isLoading } = useGetAllFoundQuery({ undefined });

  if (isLoading) {
    return <AppLoading />;
  }

  if (!isLoading && foundData?.data?.data.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
        <Empty />
      </div>
    );
  }

  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (text: string) => (
        <Image src={text} alt="img" width={70} height={60} />
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
      ellipsis: true,
    },
    {
      title: "Found Location",
      dataIndex: "locationFound",
      key: "locationFound",
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="text-4xl text-center font-bold my-5">All Found Items</h3>
      <Table
        columns={columns}
        dataSource={foundData?.data?.data || []}
        rowKey={(record: any) => record.id}
        pagination={{ pageSize: 10 }}
        scroll={{ x: "max-content" }} // Enables horizontal scrolling on smaller screens
      />
    </div>
  );
}

export default AllFoundItem;
