import React from "react";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
        <div className="flex items-center gap-2">
          <KeyRound className="ml-2" />
          <h1 className="text-2xl font-bold">Next + Supabase</h1>
        </div>
        <p className="text-lg font-semibold text-gray-300">
          Register/SignIn Today
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <Button className="w-full flex items-center gap-3" variant="outline">
            <FaGithub />
            Github
          </Button>
          <Button className="w-full flex items-center gap-3" variant="outline">
            <FcGoogle />
            Google
          </Button>
        </div>

        <div className="glowbox -z-10"></div>
      </div>
    </div>
  );
};

export default page;
