import React from "react";

function UserForm() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="h-[100px]">
      {isOpen && (
        <div className="py-12 bg-[rgba(0,0,0,0.2)] transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
          <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                User Details
              </h1>
              <label
                htmlFor="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Username
              </label>
              <input
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter your username"
              />
              <label
                htmlFor="email"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Email
              </label>
              <input
                id="email"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter your email"
              />
              <label
                htmlFor="password"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Password
              </label>
              <input
                id="password"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter your password"
              />

              <div className="flex items-center justify-start w-full">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 transition duration-150 ease-in-out hover:bg-pink-400 bg-pink-600 rounded text-white px-8 py-2 text-sm">
                  Submit
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <div className="w-full text-right p-10">
          
          <button
            onClick={() => setIsOpen(true)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 mx-auto transition duration-150 ease-in-out hover:bg-pink-400 bg-pink-600 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
          >
            Add User
          </button>
        </div>
      )}
    </div>
  );
}

export default UserForm;
