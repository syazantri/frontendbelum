import React from "react";

function UserTable() {
  return (
    <>
      <div className="relative rounded-xl overflow-auto max-h-[70vh]">
        <div className="shadow-sm overflow-hidden my-8">
          <table className="border-collapse table-fixed w-full text-sm">
            <thead>
              <tr>
                <th className="border-b text-xl dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-700 text-left">
                  Username
                </th>
                <th className="border-b text-xl dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-700 text-left">
                  Email
                </th>
                <th className="border-b text-xl dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-700 text-left">
                  Password
                </th>
                <th className="border-b text-xl dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-700 text-left"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  sasasasip
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  sasa@gmail.com
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  2023
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 mx-auto transition duration-150 ease-in-out hover:bg-pink-400 bg-pink-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Edit
                  </button>
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 mx-auto transition duration-150 ease-in-out hover:bg-pink-400 bg-pink-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  kelinci123
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  kelinci@gmail.com
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  2024abc
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 mx-auto transition duration-150 ease-in-out hover:bg-pink-400 bg-pink-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Edit
                  </button>
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 mx-auto transition duration-150 ease-in-out hover:bg-pink-400 bg-pink-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  beruang99
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                  bearere@gmail.com
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  berberu
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 mx-auto transition duration-150 ease-in-out hover:bg-pink-400 bg-pink-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Edit
                  </button>
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 mx-auto transition duration-150 ease-in-out hover:bg-pink-400 bg-pink-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserTable;