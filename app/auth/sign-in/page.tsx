"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/app/states/hook";
import { useLoginMutation } from "@/app/states/features/auth/authApi";
import { verifyToken } from "@/app/utils/verifyToken";
import { setUser } from "@/app/states/features/auth/authSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import AppFormInput from "@/app/components/ui/AppFormInput";
import { CloseOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { Dropdown, Menu, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";

interface FormData {
  usernameOrEmail: string;
  password: string;
}

const Login = () => {
  const handleCopy = (text: any) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!");
    });
  };

  const menu = (
    <Menu>
      <Menu.ItemGroup title="User">
        <Menu.Item key="user-username">
          <p>
            Username: <span>user</span>
            <Button
              icon={<CopyOutlined />}
              size="small"
              style={{ marginLeft: 8 }}
              onClick={() => handleCopy("user")}
            ></Button>
          </p>
        </Menu.Item>
        <Menu.Item key="user-email">
          <p>
            Email: <span>user@gmail.com</span>
            <Button
              icon={<CopyOutlined />}
              size="small"
              style={{ marginLeft: 8 }}
              onClick={() => handleCopy("user@gmail.com")}
            ></Button>
          </p>
        </Menu.Item>
        <Menu.Item key="user-password">
          <p>
            Password: <span>user123</span>
            <Button
              icon={<CopyOutlined />}
              size="small"
              style={{ marginLeft: 8 }}
              onClick={() => handleCopy("user123")}
            ></Button>
          </p>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.ItemGroup title="Admin">
        <Menu.Item key="admin-username">
          <p>
            Username: <span>admin</span>
            <Button
              icon={<CopyOutlined />}
              size="small"
              style={{ marginLeft: 8 }}
              onClick={() => handleCopy("admin")}
            ></Button>
          </p>
        </Menu.Item>
        <Menu.Item key="admin-email">
          <p>
            Email: <span>admin@gmail.com</span>
            <Button
              icon={<CopyOutlined />}
              size="small"
              style={{ marginLeft: 8 }}
              onClick={() => handleCopy("admin@gmail.com")}
            ></Button>
          </p>
        </Menu.Item>
        <Menu.Item key="admin-password">
          <p>
            Password: <span>admin123</span>
            <Button
              icon={<CopyOutlined />}
              size="small"
              style={{ marginLeft: 8 }}
              onClick={() => handleCopy("admin123")}
            ></Button>
          </p>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    login(data)
      .unwrap()
      .then((res: any) => {
        if (!res?.success) {
          toast.error(res?.message || "something wrong");
        } else {
          const user = verifyToken(res?.data?.accessToken);
          toast.success(res?.message || "Successfully log in");
          dispatch(setUser({ user, accessToken: res?.data?.accessToken }));
          if (res?.data?.role === "ADMIN") {
            console.log(res?.data?.role);
            router.push(`/dashboard`);
          } else if (res?.data?.role === "USER") {
            router.push(`/`);
          }
        }
      })
      .catch((res: any) => {
        toast.error(res?.data?.errorMessage || "something went wrong");
      });
  };

  return (
    <div className="lg:h-[100vh] ">
      <div className="flex justify-evenly">
        <Link href={"/"} className="lg:mt-10 mt-3 lg:ml-10 ml-3 lg:pl-5 pl-2">
          <Popover title="Back to home page">
            <CloseOutlined className="text-4xl font-bold hover:text-blue-500" />
          </Popover>
        </Link>
        <div className="lg:mt-10 mt-3 lg:ml-10 ml-3 lg:pl-5 pl-2">
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button type="primary">Login Info</Button>
          </Dropdown>
        </div>
      </div>
      <div className="w-full lg:w-[100%] h-screen lg:h-full px-4 lg:px-0 overflow-auto flex items-center justify-center ">
        <div className="w-full lg:max-w-lg mx-auto py-8 mt-10 lg:py-20 2xl:py-36">
          <h2 className="text-2xl lg:text-4xl font-bold text-textBlack pb-1 lg:pb-2">
            Login to your account
          </h2>

          <form
            className="w-full md:w-[500px] 2xl:w-[560px] py-4 2xl:py-5 space-y-3 lg:space-y-4 2xl:space-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <AppFormInput
              name="usernameOrEmail"
              required={true}
              register={register}
              type="text"
              label="Username or email address"
              error={errors.usernameOrEmail}
            />

            <AppFormInput
              name="password"
              required={true}
              register={register}
              type="password"
              label="Password"
              placeholder="Type your Password"
              error={errors.password}
            />
            <p className="text-[#645D5D] text-xs lg:text-sm">
              Don’t have an account?
              <span className="text-orange-500 font-medium ">
                <Link href="/auth/sign-up"> Create new account</Link>
              </span>
            </p>
            <div className="flex items-center justify-end text-xs text-textGrey hover:text-primary lg:text-sm">
              <p>Forgot Password?</p>
            </div>

            {isLoading ? (
              <button className="appBtn px-10 flex items-center justify-center w-full mt-4 lg:mt-6 ">
                <AiOutlineLoading3Quarters className="animate-spin text-white text-2xl" />
              </button>
            ) : (
              <button type="submit" className="appBtn mt-4 lg:mt-6 w-full">
                Log in
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
