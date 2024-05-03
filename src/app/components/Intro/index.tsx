// React & Next
import React from "react";

// constants
import { serCards } from "@/app/constants";

// scss
import classes from "./index.module.scss";

export const IntroServ = () => {
  return (
    <>
      {/* intro services */}
      <div className="sm:mx-5 mt-11">
        <div className={classes.intro}>
          <h2>our services</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum
            vero assumenda corporis, animi voluptas molestias numquam
            perspiciatis. Nulla quisquam aspernatur officia voluptate dolorum
            expedita maxime neque voluptatem eum nobis.
          </p>
        </div>
        {/* services cards */}
        <div className={classes.cards}>
          {serCards.map((i, index) => (
            <div
              key={index}
              className={`${
                index == 0 || index == 3 ? " bg-f-lbackgroud" : "bg-f-white"
              } flex flex-col justify-between items-center mx-2 my-3 py-4 px-5 rounded-xl`}
            >
              {
                <i.icon
                  className={
                    index == 0 || index == 3 ? "text-f-coral" : "text-f-dpink"
                  }
                />
              }
              <h5
                className={
                  index == 0 || index == 3 ? "text-f-white" : "text-f-backgroud"
                }
              >
                {i.title}
              </h5>
              <p
                className={
                  index == 0 || index == 3
                    ? "text-f-silver"
                    : "text-f-backgroud"
                }
              >
                {i.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
