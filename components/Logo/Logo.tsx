"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();
  return (
    <div
      className="min-h-20 h-20 flex items-center px-6 border-b cursor-pointer gap-2"
      onClick={() => router.push("/")}
    >
      <Image
        src="/public/logoipsum-285 (3).svg"
        alt="Logo"
        layout="fixed"
        width={30}
        height={30}
        priority
      />
      <h1 className="font-bold text-xl ">DashBoard</h1>
    </div>
  );
}
