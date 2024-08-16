"use client";
import React from "react";
import AppLoading from "@/app/components/ui/AppLoading";
import { useGetAllLostQuery } from "@/app/states/features/lost/lostApi";
import { Table, Empty } from "antd";
import Image from "next/image";

function AllLostItem() {
  const { data, isLoading } = useGetAllLostQuery(undefined);
  const lostData = data?.data;

  if (isLoading) {
    return <AppLoading />;
  }

  if (!isLoading && lostData?.length <= 0) {
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
        <Image src={text} alt="img" width={100} height={80} />
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
      dataIndex: "locationLost",
      key: "locationLost",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="text-4xl text-center font-bold my-5">All Lost Items</h3>
      <Table
        columns={columns}
        dataSource={lostData || []}
        rowKey={(record: any) => record.id}
        pagination={{ pageSize: 10 }}
        scroll={{ x: "max-content" }} // ensures horizontal scrolling for smaller screens
      />
    </div>
  );
}

export default AllLostItem;
