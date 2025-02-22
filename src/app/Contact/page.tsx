import React from "react";
export default function page() {
  return (
    <div className="py-10 bg-slate-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            CONTACT US
          </h2>
        </div>
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <p className="font-bold text-sm">PHONE NUMBER</p>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  (+855) 00 000 000
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  (+855) 00 000 000
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <p className="font-bold text-sm">EMAIL</p>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  academy@KCA.example.com
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <p className="font-bold text-sm">LOCATION</p>
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                  SP Building, Toul Kork <br /> Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                GET IN TOUCH
              </h3>
              <form action="#" method="POST" className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      NAME*
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      EMAIL*
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      PHONE*
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="tel"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      ADDRESS*
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-base font-medium text-gray-900">
                      MESSAGE*
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      SUBMITE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
