"use client"
import { useEffect } from "react";
import { getToken } from "./utils/user-helpers";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) {
      router.push("/login");
    } else {
      router.push("/manager-dashboard");
    }
  }, []);

  return (
    <main className="">
      <div></div>
    </main>
  );
}
