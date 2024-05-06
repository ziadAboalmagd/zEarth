"use client"
// React & Next
import React, { useEffect, useRef, useState } from "react";

// React Icon
import { CiUser } from "react-icons/ci";

export const InCrad = () => {
  // api user counter
  const [count, setCount] = useState<number>(71);
  const countRef = useRef(count);
  // increaseing
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCount(Number(localStorage.getItem("count")));
    }
  }, []);
  // increaseing
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrement = Math.floor(Math.random() * (10 - 3 + 1)) + 5;
      countRef.current += randomIncrement;
      localStorage.setItem("count", countRef.current.toString());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateDisplay = () => {
      setCount((prevCount) => {
        const difference = countRef.current - prevCount;
        const step = Math.ceil(difference / 10);
        const updatedCount = prevCount + step;
        return updatedCount > countRef.current
          ? countRef.current
          : updatedCount;
      });
    };

    const updateInterval = setInterval(updateDisplay, 50);

    return () => clearInterval(updateInterval);
  }, []);
  return (
    <>
      {/* cards increment   */}
      <div className="mx-11 mt-20 mb-11 z-10 relative">
        <h2 className="font-extrabold text-2xl capitalize">
          users
        </h2>
        <div className="flex justify-center mt-5">
          <div className="flex flex-col justify-center items-center gap-3 bg-f-lbackgroud rounded-2xl py-5 px-3">
            <div className="flex flex-row justify-between gap-3 items-center">
              <h3 className="text-f-white text-5xl font-bold">{count}</h3>
              <CiUser className="text-f-dpink text-5xl font-bold" />
            </div>
            <h6 className="text-f-silver text-xs font-thin text-center capitalize">
              the total number of users interacted with our API
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
