// React & Next
import React from "react";

// constants
import { comments } from "@/app/constants";

export const Comments = () => {
  return (
    <div className="mx-5 mt-11">
      <h2 className="font-semibold text-3xl capitalize">comments</h2>
      <div className="sm:grid sm:grid-cols-3 flex flex-col justify-center gap-7 m-5">
        {comments.map((i, index) => (
          <div
            key={index}
            className="grid grid-rows-2 justify-items-center justify-center items-center gap-3 bg-f-lbackgroud rounded overflow-hidden my-4 py-3 px-4"
          >
            <i.icon className="sm:row-span-1 pt-1 text-5xl" />
            <div className="col-span-1 flex flex-col gap-5 justify-center items-center">
              <h3 className="text-f-white capitalize text-xl font-semibold">
                {i.name}
              </h3>
              <p className="text-f-silver text-center text-xs font-light">
                {i.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
