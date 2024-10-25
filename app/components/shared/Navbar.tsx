"use client";

import { logOut } from "@/app/states/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/states/hook";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import logo from "@/app/assets/navLogo.png";

const Navbar = () => {
  const { user }: any = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("Logout successfully");
  };

  const items: MenuProps["items"] = [
    {
      key: "2",
      label: (
        <Link className="lg:hidden block hover:text-blue-500" href="/about-us">
          About Us
        </Link>
      ),
    },

    {
      key: "3",
      label: (
        <p className=" text-red font-bold" onClick={handleLogout}>
          Logout
        </p>
      ),
    },
  ];
  return (
    <div className="bg-white text-black">
      <div className="px-6 lg:px-8 flex items-center justify-between py-3">
        <Link href={"/"}>
          <Image alt="" src={logo} width={200} height={15} />
        </Link>
        <div className="flex items-center gap-8 mr-4 font-medium">
          <Link
            className="hidden lg:block hover:text-blue-500"
            href="/about-us"
          >
            About Us
          </Link>
          {user?.role === "ADMIN" && (
            <Link className="hover:text-blue-500" href={"/dashboard"}>
              Dashboard
            </Link>
          )}
          {user?.role === "USER" && (
            <Link className="hover:text-blue-500" href={"/user-dashboard"}>
              Dashboard
            </Link>
          )}
          {user?.email ? (
            <>
              <Dropdown menu={{ items }} placement="bottom" arrow>
                <Space wrap size={16}>
                  <Avatar
                    className="hover:text-blue-500"
                    size="large"
                    icon={<UserOutlined />}
                  />
                </Space>
              </Dropdown>
            </>
          ) : (
            <Link href={"/auth/sign-in"}>
              <button className="appBtn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
