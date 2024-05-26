"use client";
import AppLoading from "@/app/components/ui/AppLoading";

import { Dropdown, Empty, Menu, Space } from "antd";
import { toast } from "react-toastify";
import {
  useGetAllClaimQuery,
  useUpdateClaimStatusMutation,
} from "@/app/states/features/claim/claimApi";

function AllClaimItem() {
  const [UpdateClaimStatus] = useUpdateClaimStatusMutation();
  const { data: claimData, isLoading } = useGetAllClaimQuery({ undefined });

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
      toast.success("Successfully Update Claim Status");
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

  return (
    <div className="container mx-auto min-h-screen">
      <h3 className="text-4xl text-center font-bold my-5">All Users </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 bg-rose-50 rounded-xl text-xl p-2 my-3 items-center  justify-items-start lg:px-5">
        <p className="font-bold"> Description</p>
        <p className="font-bold">Phone</p>

        <p className="font-bold"> Status</p>
        <p className="font-bold"> Action</p>
      </div>
      {claimData?.data.map((data: any) => (
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 bg-rose-50 rounded-xl text-xl p-2 my-3 items-center  justify-items-start lg:px-5"
          key={data.id}
        >
          <p>{data?.description}</p>
          <p>{data?.contactPhone}</p>

          <p>{data?.status}</p>
          <Dropdown overlay={getMenu(data.id)} placement="bottom" arrow>
            <Space wrap size={16}>
              <button className="border border-blue-200">Action</button>
            </Space>
          </Dropdown>
        </div>
      ))}
    </div>
  );
}

export default AllClaimItem;
