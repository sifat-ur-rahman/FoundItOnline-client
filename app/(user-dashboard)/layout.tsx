"use client";

import { useState } from "react";
import ProtectedRoute from "../components/shared/ProtectedRoute";
import logo from "@/app/assets/navLogo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Link from "next/link";
import Image from "next/image";
import UserSidebar from "../components/shared/userSidebar";

const Layout = ({ children }: { children: any }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col h-screen">
        <header className=" bg-white border-b border-gray-200 px-4 flex justify-between items-center">
          <Link href={"/"}>
            <Image alt="" src={logo} width={200} height={15} />
          </Link>
          <button className="lg:hidden" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </header>
        <div className="flex flex-1 ">
          <UserSidebar isOpen={isSidebarOpen} />
          <main className="w-full lg:w-5/6 h-full overflow-auto px-4 2xl:px-8 py-5 2xl:py-7">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Layout;
