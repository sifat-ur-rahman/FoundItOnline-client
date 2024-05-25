"use client";

import AppFormInput from "@/app/components/ui/AppFormInput";
import { useCreateFoundMutation } from "@/app/states/features/found/foundApi";
import { useGetProfileQuery } from "@/app/states/features/user/userApi";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

function AddFoundItem() {
  const [createFound, { isLoading }] = useCreateFoundMutation();
  interface FormData {
    images: FileList;
    category: string;
    description: string;
    dateFound: string;
    locationFound: string;
    contactPhone: string;
    contactEmail: string;
  }
  const { data } = useGetProfileQuery({ undefined });
  const userInfo = data?.data;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const {
      images,
      category,
      description,
      dateFound,
      locationFound,
      contactPhone,
      contactEmail,
    } = data;
    const image = images[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=a135457f4ca9a16c458962a3ed75df96`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgData) => {
        if (imgData.success) {
          //product data
          const product = {
            category,
            userId: userInfo.id,
            images: imgData.data.url,
            description,
            dateFound,
            locationFound,
            contactPhone,
            contactEmail,
            status: "AVAILABLE",
          };
          console.log({ product });

          const res: any = await createFound(product);
          console.log({ res });
          if (!res?.data?.success) {
            toast.error(res?.message || "something went wrong");
          } else {
            toast.success("Successfully create Found Item");
            reset();
            router.push(`/`);
          }
        }
      });
  };

  return (
    <div>
      <div className="w-full lg:w-[100%]   px-4 lg:px-0 overflow-auto flex items-center justify-center ">
        <div className="w-full lg:max-w-lg mx-auto py-8  lg:py-20 2xl:py-36">
          <h2 className="text-2xl lg:text-4xl font-bold text-textBlack pb-1 lg:pb-2 text-center">
            Describe the Object you found
          </h2>

          <form
            className="w-full md:w-[500px] 2xl:w-[560px] py-4 2xl:py-5 space-y-3 lg:space-y-4 2xl:space-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <AppFormInput
              name="images"
              required={true}
              register={register}
              type="file"
              label="Image"
              placeholder="product images"
              error={errors.images}
            />
            <AppFormInput
              name="category"
              required={true}
              register={register}
              type="text"
              label="Category"
              placeholder="product category"
              error={errors.category}
            />

            <AppFormInput
              name="description"
              required={true}
              register={register}
              type="text"
              label="Description"
              placeholder="product short description"
              error={errors.description}
            />
            <AppFormInput
              name="dateFound"
              required={true}
              register={register}
              type="date"
              label="Found date"
              placeholder="Found date"
              error={errors.dateFound}
            />

            <AppFormInput
              name="locationFound"
              required={true}
              register={register}
              type="text"
              label="Founded location"
              placeholder="Founded location"
              error={errors.locationFound}
            />
            <AppFormInput
              name="contactPhone"
              required={true}
              register={register}
              type="text"
              label="contactPhone"
              placeholder="your phone number"
              error={errors.contactPhone}
            />

            <AppFormInput
              name="contactEmail"
              required={true}
              register={register}
              type="text"
              label="contactEmail"
              placeholder="your email "
              error={errors.contactEmail}
            />

            {isLoading ? (
              <button className="appBtn px-10 flex items-center justify-center w-full mt-4 lg:mt-6 ">
                <AiOutlineLoading3Quarters className="animate-spin text-white text-2xl" />
              </button>
            ) : (
              <button type="submit" className="appBtn mt-4 lg:mt-6 w-full">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFoundItem;
