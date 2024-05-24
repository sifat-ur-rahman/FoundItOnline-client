'use client'

import { logOut } from "@/app/states/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/states/hook";
import Link from "next/link";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logOut());
        toast.success("Logout successfully");
    };

    return (
        <div className='bg-white text-black'>
            <div className='px-6 lg:px-8 flex items-center justify-between py-3'>
                <Link href={"/"}>
                    <h2 className="font-bold text-3xl">Flat Share</h2>
                </Link>
                <div className='flex items-center gap-8 font-medium'>
                    {
                        user?.email &&
                        <Link href={'/dashboard'}>
                            <h3>Dashboard</h3>
                        </Link>
                    }
                    {/* <h3>{user?.userName}</h3> */}
                    {
                        user?.email ?
                            <button className="appBtn bg-red/80 hover:bg-red" onClick={handleLogout}>Logout</button>
                            :
                            <Link href={'/auth/sign-in'}>
                                <button className="appBtn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;