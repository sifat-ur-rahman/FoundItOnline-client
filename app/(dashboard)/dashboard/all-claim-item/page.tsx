"use client";
import React from "react";
import AppLoading from "@/app/components/ui/AppLoading";
import { Table, Dropdown, Space, Menu, Empty } from "antd";
import { toast } from "react-toastify";
import {
  useGetAllClaimQuery,
  useUpdateClaimStatusMutation,
} from "@/app/states/features/claim/claimApi";

function AllClaimItem() {
  const [UpdateClaimStatus] = useUpdateClaimStatusMutation();
  const { data: claimData, isLoading } = useGetAllClaimQuery(undefined);

  if (isLoading) {
    return <AppLoading />;
  }

  const handleUpdateStatus = async (data: any) => {
    const queryData = {
      id: data.id,
      claimStatus: {
        status: data.status,
      },
    };

    const res: any = await UpdateClaimStatus(queryData);

    if (!res?.data?.success) {
      toast.error(res?.message || "something went wrong");
    } else {
      toast.success("Successfully Updated Claim Status");
    }
  };

  const getMenu = (claimId: string) => (
    <Menu
      onClick={({ key }) => handleUpdateStatus({ id: claimId, status: key })}
      items={[
        {
          key: "PENDING",
          label: <p className="font-bold">PENDING</p>,
        },
        {
          key: "APPROVED",
          label: <p className="text-green-500 font-bold">APPROVED</p>,
        },
        {
          key: "REJECTED",
          label: <p className="text-red font-bold">REJECTED</p>,
        },
      ]}
    />
  );

  if (!isLoading && claimData?.data?.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
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
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Dropdown overlay={getMenu(record.id)} placement="bottom" arrow>
          <Space wrap size={16}>
            <button className="border p-2 rounded-lg border-blue-200">
              Action
            </button>
          </Space>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="text-4xl text-center font-bold my-5">All Claim Items</h3>
      <Table
        columns={columns}
        dataSource={claimData?.data || []}
        rowKey={(record: any) => record.id}
        pagination={{ pageSize: 10 }}
        scroll={{ x: "max-content" }} // Enables horizontal scrolling on smaller screens
      />
    </div>
  );
}

export default AllClaimItem;
