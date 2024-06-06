'use client'

import EmailList from "@/components/EmailList";
import Header from "@/components/Header";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();

  useEffect(() => {
    if (!session.data) redirect("/signin");
  });

  if(!session.data) return <div className="flex items-center justify-center h-screen">Loading...</div>

  return (
    <div className="flex flex-col gap-6">
      <Header />
      <EmailList />
    </div>
  );
}
