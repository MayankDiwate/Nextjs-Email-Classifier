"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const session = useSession();
  const [apiKey, setApiKey] = useState<string>("");

  useEffect(() => {
    if (session.data) redirect("/");
  });

  if (session.data) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <div className="flex items-center flex-col justify-center h-screen gap-4">
      <button
        className="flex items-center gap-2 text-white font-bold py-2 px-4 w-60 bg-black cursor-pointer rounded"
        disabled={!apiKey}
        onClick={() => {
          localStorage.setItem("apiKey", apiKey);
          signIn("google");
        }}
        type="submit"
      >
        <FcGoogle size={20} /> Continue with Google
      </button>

      <input
        type="text"
        placeholder="OpenAI API KEY"
        onChange={(e) => setApiKey(e.target.value)}
        className="flex items-center text-black font-bold py-2 px-4 w-60 bg-slate-50 hover:bg-slate-100 rounded"
      />
    </div>
  );
};

export default Signin;
