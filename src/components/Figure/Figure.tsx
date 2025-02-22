import React from "react";
import Image from "next/image";
import Step1 from "@/public/Steps/Step1.png";
import Course from "@/public/Steps/Cousre.png";
import KCA from "@/public/KCA.png";

export default function Step() {
  return (
    <section className="py-10 bg-gradient-to-r from-lime-700 to-sky-200  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
          <div className="relative mb-12">
            <Image className="w-full rounded-md" src={KCA} alt="img" />

            <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
              <div className="overflow-hidden bg-white rounded">
                <div className="px-10 py-6">
                  <div className="flex items-center">
                    <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                      100%
                    </p>
                    <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                      HIGN EDUCATION <br />
                      IN KHMER CODE ACADEMY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full">
              <Image src={Course} alt="Logo" width={50} />
            </div>
            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              TALK TO TIME BECOME TO DEVELOPER
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-950">
              Khmer code Academy Can help you reach your destination.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-sky-600 to-green-700 hover:opacity-80"
              role="button"
            >
              Explore more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
