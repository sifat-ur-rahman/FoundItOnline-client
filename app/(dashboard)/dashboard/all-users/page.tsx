"use client";
import React from "react";
import { Table, Dropdown, Menu, Space, Empty } from "antd";
import AppLoading from "@/app/components/ui/AppLoading";
import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} from "@/app/states/features/user/userApi";
import { toast } from "react-toastify";

function AllUsers() {
  const [UpdateUserStatus] = useUpdateUserStatusMutation();
  const { data: userData, isLoading } = useGetAllUsersQuery(undefined);

  if (isLoading) {
    return <AppLoading />;
  }

  const handleUpdateStatus = async (data: any) => {
    const queryData = {
      id: data.id,
      userStatus: {
        status: data.status,
      },
    };

    const res: any = await UpdateUserStatus(queryData);

    if (!res?.data?.success) {
      toast.error(res?.message || "Something went wrong");
    } else {
      toast.success("Successfully Updated User Status");
    }
  };

  const getMenu = (userId: string) => (
    <Menu
      onClick={({ key }) => handleUpdateStatus({ id: userId, status: key })}
      items={[
        {
          key: "ACTIVE",
          label: <p className="font-bold">ACTIVE</p>,
        },
        {
          key: "DEACTIVATED",
          label: <p className="text-red font-bold">DEACTIVATED</p>,
        },
      ]}
    />
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
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

  if (!isLoading && userData?.data?.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
        <Empty />
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="text-4xl text-center font-bold my-5">All Users</h3>
      <Table
        columns={columns}
        dataSource={userData?.data || []}
        rowKey={(record: any) => record.id}
        pagination={{ pageSize: 10 }}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

export default AllUsers;
