"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const session = useSession();
  const userName = session.data?.user?.name;
  const userImage = session.data?.user?.image;
  const userEmail = session.data?.user?.email;

  return (
    <div className="flex items-center justify-between gap-2 bg-slate-50 w-full p-3">
      <div className="flex items-center gap-2">
        <Image
          src={userImage!}
          alt="User image"
          width={40}
          height={40}
          className="w-14 h-14 border rounded-full"
        />
        <div className="flex flex-col">
          <div className="text-lg font-bold">{userName}</div>
          <div className="text-sm text-gray-400">{userEmail}</div>
        </div>
      </div>
      <button
        className="flex items-center gap-2 text-white font-bold py-2 px-4 w-30 bg-black cursor-pointer rounded"
        onClick={() => {
          localStorage.clear();
          signOut();
        }}
      >
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Header;
