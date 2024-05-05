"use client";
// React & Next
import { useEffect, useRef, useState } from "react";

// components
import { Mearth, Zmarker } from "@/app/components/Earths";
import Charts from "@/app/components/Charts";
import Gmap from "@/app/components/Gmap";

// utils
import { useViewport } from "@/app//utils/other";

// React Icon
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { Oaudio, Zaudio } from "./components/Audio";

// scss
import "./App.scss";
import { BlackHole, BlackShole } from "./components/BlackHoles";

export default function Home() {
  // check width
  const { width } = useViewport();
  // small screens
  const isSmallScreen = Number(width) < 720;
  // big screens
  const isLargeScreen = Number(width) > 931;
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
    <main>
      {/* intro */}
      <div className="grid grid-cols-5 gap-11 justify-between items-center min-h-96 px-3 py-2 my-3 mx-2 rounded-lg relative">
        <div className="col-span-3 flex flex-col gap-3 justify-start">
          <h2 className="text-f-coral text-5xl font-bold tracking-widest">
            zEarth
          </h2>
          <h4 className="capitalize">pioneers in our respective fields</h4>
          <p className="font-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, praesentium mollitia, cum at deleniti eius ex rem non
            iure quisquam itaque eum voluptates porro pariatur obcaecati quidem
            magnam nemo aliquam?
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
      {/* img animation */}
      {/* order's chart */}
      <div className="astronaut mt-3">
        <Charts />
      </div>
      {/* blackhole */}
      <BlackHole />
      {/* cards increment   */}
      <div className="mx-11 mt-20 mb-11 z-10 relative">
        <h2 className="font-extrabold text-2xl capitalize text-f-coral">
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
      {/* google map */}
      <div className="mx-11 my-11">
        <div>
          <div className="flex flex-row justify-between gap-5 w-fit">
            <h2 className="font-extrabold text-2xl capitalize text-f-coral">
              embed Gmap
            </h2>
            <Oaudio>
              <div className="flex flex-row justify-between gap-4">
                <Image
                  src="/img/palestineM.svg"
                  alt="palestine"
                  width={20}
                  height={20}
                  className="min-w-10"
                />
                <Image
                  src="/img/palestinian.svg"
                  alt="palestine"
                  width={20}
                  height={20}
                  className="min-w-10"
                />
              </div>
            </Oaudio>
          </div>
        </div>
        <div className="Gmap flex justify-center mt-5 rounded-lg">
          <Gmap />
        </div>
      </div>
      {/* 3d earth */}
      {isLargeScreen && (
        <div className="flex flex-col gap-3 mt-10">
          <span className="jfont w-fit mx-auto text-2xl font-semibold capitalize tracking-widest">
            embark on a journey to discover the marvels of our planet with us
          </span>
          <div className="my-5 mx-11 overflow-hidden">
            <Mearth />
          </div>
        </div>
      )}
    </main>
  );
}
