// React & Next
import React from "react";
import Image from "next/image";

// components
import { BlackShole } from "@/app/components/home/BlackHoles";
import { Zmarker } from "@/app/components/Earths";

export const IntroHome = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-11 justify-between items-center min-h-96 px-3 py-2 my-3 mx-2 rounded-lg relative">
        <div className="col-span-3 flex flex-col gap-3 justify-start">
          <h2 className="text-5xl font-bold tracking-widest">
            zEarth
          </h2>
          <h4 className="capitalize">pioneers in our respective fields</h4>
          <p className="font-thin">
            welcome to our journey through the wonders of our planet. earth is a
            tapestry of captivating landscapes, vibrant cultures, and storied
            histories. Join us as we embark on an exploration of renowned
            destinations that have captured the imagination of travelers for
            generations.
          </p>
        </div>
        {/* blackhole */}
        <BlackShole />
        <div className="animatedBounce col-span-2">
          <Zmarker />
        </div>
        {/* rotator rocket */}
        <div className="rocket">
          <Image
            src="/3D models/rocket.png"
            width={500}
            height={500}
            alt="astronaut"
          />
        </div>
        {/* rotator astronaut */}
        <div className="rastronaut">
          <Image
            src="/3D models/3.webp"
            width={500}
            height={500}
            alt="astronaut"
          />
        </div>
      </div>
    </>
  );
};
