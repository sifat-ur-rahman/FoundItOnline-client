"use client";
import { UpOutlined } from "@ant-design/icons";
import { useGetAllFoundQuery } from "@/app/states/features/found/foundApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AppLoading from "@/app/components/ui/AppLoading";
import AppModal from "@/app/components/ui/AppModal";
import { useCreateClaimMutation } from "@/app/states/features/claim/claimApi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import AppFormInput from "@/app/components/ui/AppFormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetProfileQuery } from "@/app/states/features/user/userApi";
import { toast } from "react-toastify";
import { useState } from "react";

function AllFoundItem() {
  interface FormData {
    description: string;
    contactPhone: string;
  }

  const [createClaim, { isLoading: createLoading }] = useCreateClaimMutation();
  const { data, isLoading } = useGetAllFoundQuery({ undefined });

  const foundData = data?.data;
  const { data: userData } = useGetProfileQuery({ undefined });
  const userInfo = userData?.data;
  const router = useRouter();

  const [selectedFoundItemId, setSelectedFoundItemId] = useState<string | null>(
    null
  );
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { description, contactPhone } = data;
    //product data
    const claimInfo = {
      itemId: userInfo?.username,
      description,
      contactPhone,
      contactEmail: userInfo?.email,
      status: "PENDING",
      userId: userInfo?.id,
      lostItemId: null,
      foundItemId: selectedFoundItemId,
    };
    console.log({ claimInfo });
    const res: any = await createClaim(claimInfo);
    console.log({ res });
    if (!res?.data?.success) {
      toast.error(res?.message || "something went wrong");
    } else {
      toast.success("Successfully create claim");
      reset();
      router.push(`/all-found-item`);
    }
  };

  if (isLoading) {
    return <AppLoading />;
  }
  return (
    <div className="container mx-auto min-h-screen ">
      <div className="flex justify-between mt-5 items-center">
        <Link
          href="/all-lost-item"
          className="text-3xl p-3 text-blue-500 hover:bg-blue-50 rounded-xl"
        >
          <UpOutlined /> All Lost Item
        </Link>
        <Link
          href="/add-found-item"
          className="px-6 py-3 border border-green-600 bg-green-600 font-bold text-white rounded-lg  hover:bg-green-100 hover:text-green-700"
        >
          Report a New Found Item
        </Link>
      </div>
      <h3 className="text-4xl  text-center font-bold my-10">All Found Item</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mx-0 mx-4">
        {foundData?.data.map((item: any) => (
          <div
            className="border  flex flex-col  hover:border-green-300 rounded-xl text-xl p-2 my-3 items-center  justify-items-center px-5"
            key={item.id}
          >
            <div className="max-h-full my-2 flex items-center">
              <Image src={item?.images} alt="img" width={200} height={160} />
            </div>
            <div>
              <p>
                Category: <span className="font-bold">{item?.category}</span>
              </p>
              <p>
                Description:<p className="font-bold">{item?.description}</p>
              </p>
              <p>
                Found Location:{" "}
                <span className="font-bold">{item?.locationFound}</span>
              </p>
            </div>

            <AppModal
              button={
                <button
                  onClick={() => setSelectedFoundItemId(item.id)}
                  className="px-6 py-3  place-self-center bottom-0 bg-blue-600 font-bold text-white rounded-lg my-3 border border-blue-600 hover:bg-blue-100 hover:text-blue-700 "
                >
                  Claim
                </button>
              }
            >
              <h4 className="text-xl font-bold text-center">
                Create your product claim
              </h4>
              <form
                className="w-full md:w-[500px] 2xl:w-[560px] py-4 2xl:py-5 space-y-3 lg:space-y-4 2xl:space-y-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <AppFormInput
                  name="description"
                  required={true}
                  register={register}
                  type="text"
                  label="Description"
                  placeholder="product description"
                  error={errors.description}
                />
                <AppFormInput
                  name="contactPhone"
                  required={true}
                  register={register}
                  type="text"
                  label="Phone Number"
                  placeholder="Phone Number"
                  error={errors.contactPhone}
                />

                {createLoading ? (
                  <button className="appBtn px-10 flex items-center justify-center w-full mt-4 lg:mt-6 ">
                    <AiOutlineLoading3Quarters className="animate-spin text-white text-2xl" />
                  </button>
                ) : (
                  <button type="submit" className="appBtn mt-4 lg:mt-6 w-full">
                    Submit
                  </button>
                )}
              </form>
            </AppModal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllFoundItem;
