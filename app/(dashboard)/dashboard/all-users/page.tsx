"use client";
import AppLoading from "@/app/components/ui/AppLoading";
import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} from "@/app/states/features/user/userApi";

import { Dropdown, Empty, Menu, Space } from "antd";
import { toast } from "react-toastify";

function AllUsers() {
  const [UpdateUserStatus] = useUpdateUserStatusMutation();
  const { data: userData, isLoading } = useGetAllUsersQuery({ undefined });
  console.log(userData);
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
    console.log(queryData);
    const res: any = await UpdateUserStatus(queryData);
    console.log({ res });
    if (!res?.data?.success) {
      toast.error(res?.message || "something went wrong");
    } else {
      toast.success("Successfully Update User Status");
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

  if (!isLoading && userData?.data?.length <= 0) {
    return (
      <div className="container mx-auto min-h-screen">
        <Empty />
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="text-4xl text-center font-bold my-5">All Users </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 bg-rose-50 rounded-xl text-xl p-2 my-3 items-center  justify-items-start lg:px-5">
        <p className="font-bold"> Name</p>
        <p className="font-bold">UserName</p>

        <p className="font-bold"> Status</p>
        <p className="font-bold"> Action</p>
      </div>
      {userData?.data.map((data: any) => (
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 bg-rose-50 rounded-xl text-xl p-2 my-3 items-center  justify-items-start lg:px-5"
          key={data.id}
        >
          <p>{data?.name}</p>
          <p>{data?.username}</p>

          <p>{data?.status}</p>
          <Dropdown overlay={getMenu(data.id)} placement="bottom" arrow>
            <Space wrap size={16}>
              <button className="border p-2 rounded-lg border-blue-200">
                Action
              </button>
            </Space>
          </Dropdown>
        </div>
      ))}
    </div>
  );
}

export default AllUsers;
