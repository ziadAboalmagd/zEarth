// React & Next
import React from "react";

// constants
import { serCards } from "@/app/constants";

// scss
import classes from "./index.module.scss";
import { Zmoon } from "../../Earths";
import Image from "next/image";

export const IntroServ = () => {
  return (
    <>
      {/* intro services */}
      <div className="grid grid-cols-5 gap-11 justify-between items-center min-h-96 px-3 py-2 my-3 mx-2 rounded-lg relative">
        <div className={`${classes.intro} col-span-3`}>
          <h2>our services</h2>
          <p className="!w-full">
            unlock the wonders of earth with zEarth Your one-stop for exploring
            our planet{"`"}s iconic landmarks to hidden gems. zEarth is
            destination for discovering the diverse beauty and fascinating
            stories of Earth
            {"`"}s most captivating places.
          </p>
        </div>
        {/* rotator astronaut */}
        <div className={classes.rastronaut}>
          <Image
            src="/3D models/satelite.png"
            width={500}
            height={500}
            alt="astronaut"
          />
        </div>
        {/* moon */}
        <div className="col-span-2">
          <Zmoon />
        </div>
      </div>
      {/* services cards */}
      <div className={classes.cards}>
        {serCards.map((i, index) => (
          <div
            key={index}
            className="bg-f-lbackgroud flex flex-col justify-between items-center mx-2 my-3 py-4 px-5 rounded-xl"
          >
            {<i.icon />}
            <h5 className="text-f-white">{i.title}</h5>
            <p className="text-f-silver">{i.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};
