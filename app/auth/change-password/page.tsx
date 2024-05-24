'use client'

import LeftSideAuthComponent from "@/app/components/shared/LeftSideAuthComponent";
import AppFormInput from "@/app/components/ui/AppFormInput";
import { useForgotPasswordMutation } from "@/app/states/features/auth/authApi";
import { useAppSelector } from "@/app/states/hook";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

interface FormData {
    currentPassword: string;
    newPassword: string;
}

const ForgotPassword = () => {
    const { user } = useAppSelector((state) => state?.auth);
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const router = useRouter();
    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (!user) {
            return toast.error("Please login and then try again to change password");
        };

        const submittedData = {
            email: user?.email, currentPassword: data?.currentPassword, newPassword: data?.newPassword
        }

        forgotPassword(submittedData).unwrap().then((res: any) => {
            if (!res?.success) {
                toast.error(res?.message || "something went wrong");
            } else {
                toast.success("Successfully Change password");
                router.push(`/`);
            }
        })
            .catch((res) => {
                toast.error(res?.data?.message || "something went wrong");
            });
    };

    return (
        <div className='flex lg:h-[100vh]'>
            {/* this is left side div  */}
            <LeftSideAuthComponent />
            {/* this is form and other staff  */}
            <div className='w-full lg:w-[58%] h-screen lg:h-full px-4 lg:px-0 overflow-auto flex items-center justify-center '>
                <div className='w-full lg:max-w-lg mx-auto py-8 mt-10 lg:py-20 2xl:py-36'>
                    <h2 className="text-2xl lg:text-4xl font-bold text-textBlack pb-1 lg:pb-2">Change Password</h2>
                    <p className="text-[#645D5D] text-xs lg:text-sm">Secure Your Access, Secure Your World</p>

                    <form
                        className="w-full md:w-[500px] 2xl:w-[560px] py-4 2xl:py-5 space-y-3 lg:space-y-4 2xl:space-y-5"
                        onSubmit={handleSubmit(onSubmit)}
                    >


                        <AppFormInput
                            name="currentPassword"
                            required={true}
                            register={register}
                            type="password"
                            label="Current password"
                            error={errors.currentPassword}
                        />

                        <div>
                            <AppFormInput
                                name="newPassword"
                                required={true}
                                register={register}
                                type="password"
                                label="New Password"
                                error={errors.newPassword}
                            />

                            <div className="text-textBlack ml-5 text-xs mt-2 space-y-1">
                                <p className="list-item">Minimum length of 8-30 characters</p>
                                <p className="list-item">
                                    Only lowercase, numeric and symbols allowed
                                </p>
                            </div>
                        </div>

                        {isLoading ?
                            <button className="appBtn px-10 flex items-center justify-center w-full mt-4 lg:mt-6 "><AiOutlineLoading3Quarters className="animate-spin text-white text-2xl" /></button>
                            :
                            <button
                                type="submit"
                                className="appBtn mt-4 lg:mt-6 w-full"
                            >
                                Change Password
                            </button>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;