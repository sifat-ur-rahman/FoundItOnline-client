"use client";

import AppLoading from "@/app/components/ui/AppLoading";
import { useGetProfileQuery } from "@/app/states/features/user/userApi";
import { Popover } from "antd";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

import Image from "next/image";
import Head from "next/head";
import profile from "@/app/assets/profileImg01.png";

function UserProfile() {
  const { data, isLoading } = useGetProfileQuery({ undefined });
  const userInfo = data?.data;

  if (isLoading) {
    return <AppLoading />;
  }
  return (
    <div className="">
      <div className="flex justify-between mr-4">
        <div></div>
        <Link href={"/user-dashboard/update-profile"}>
          <Popover title="Edit your profile">
            <FaRegEdit className="text-2xl  hover:text-blue-500" />
          </Popover>
        </Link>
      </div>{" "}
      <>
        <Head>
          <title>About Me</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"
          />
        </Head>

        <div className="min-h-screen flex flex-col items-center   p-4">
          <div className="w-full max-w-4xl shadow-lg p-8 bg-white rounded-lg">
            <div className="grid grid-cols-3 items-center  space-y-4">
              {/* Avatar */}
              <div className="relative ">
                <Image src={profile} alt="Avatar" width={200} height={300} />
              </div>
              <div className="col-span-2">
                {/* About Me Section */}
                <h1 className="text-3xl font-bold text-blue-800">About Me</h1>
                <h2 className="text-lg text-red-500">
                  A Full Stack Web Developer in Bangladesh
                </h2>
                <p className="text-gray-600 text-sm">
                  I <span className="text-blue-600">design and develop</span>{" "}
                  services for customers of all sizes, specializing in creating
                  stylish, modern websites, web services, and online stores. My
                  passion is to design digital user experiences through bold
                  interfaces and meaningful interactions.
                </p>

                {/* Personal Info */}
                <div className="flex flex-wrap  gap-10 mt-4">
                  <div>
                    <div className="flex ">
                      <p className="text-gray-500 pr-2">Birthday </p>
                      <p className="font-medium "> : 4th April 2000</p>
                    </div>
                    <div className="flex ">
                      <p className="text-gray-500">Age</p>
                      <p className="font-medium ml-10">: 24 Yr</p>
                    </div>
                    <div className="flex ">
                      <p className="text-gray-500">Address</p>
                      <p className="font-medium ml-2">: Khulna, Bangladesh</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex ">
                      <p className="text-gray-500 pr-2">User Name </p>
                      <p className="font-medium"> : {userInfo.username} </p>
                    </div>
                    <div className="flex my-1">
                      <p className="text-gray-500">E-mail</p>
                      <p className="font-medium pl-12">: {userInfo.email}</p>
                    </div>
                    <div className="flex ">
                      <p className="text-gray-500">Phone</p>
                      <p className="font-medium pl-12"> : 820-885-3321</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default UserProfile;
