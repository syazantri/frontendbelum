import React from "react";
import UserTable from "@/components/UserTable";
import UserForm from "@/components/UserForm";
export default function HomePage() {

 return (
    <div className="grid place-items-center w-full h-[100vh] bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-100">
        <div className="w-9/12 h-[80vh] bg-[#fff] rounded-2xl shadow-2xl opacity-90">
            {/* <h1 className="text-black font-mono text-xl font-bold leading-loose whitespace-pre-line indent-9 outline-pink-100 shadow-md">Data User</h1> */}
            <UserForm />
            <UserTable />
        </div>
    </div>
    
 );
}