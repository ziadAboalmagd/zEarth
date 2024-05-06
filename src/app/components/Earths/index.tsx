"use client";
// React & Next
import React, { Suspense } from "react";

// packages
import { Canvas } from "@react-three/fiber";

// components
import EarthN from "./earthn";
import EarthM from "./earthm";
import Marker from "./Marker";
import Moon from "./Moon";

// scss
import classes from "./index.module.scss";
import { useViewport } from "@/app/utils/other";

export function Nearth() {
  return (
    <Canvas className={`${classes.earth}`}>
      <Suspense fallback={null}>
        <EarthN />
      </Suspense>
    </Canvas>
  );
}

export function Mearth() {
  // check width
  const { width } = useViewport();
  // small screens
  const isSmallS = Number(width) < 920;
  return (
    <>
      {!isSmallS && (
        <div className="flex flex-col gap-3 mt-20">
          <span className="jfont w-fit mx-auto text-2xl font-semibold capitalize tracking-widest">
            embark on a journey to discover the marvels of our planet with us
          </span>
          <div className="my-5 mb-11 overflow-hidden">
            <EarthM />
          </div>
        </div>
      )}
    </>
  );
}

export function Zmarker() {
  return (
    <Canvas className={`${classes.earth}`}>
      <Suspense fallback={null}>
        <Marker />
      </Suspense>
    </Canvas>
  );
}

export function Zmoon() {
  return (
    <Canvas className={`${classes.earth}`}>
      <Suspense fallback={null}>
        <Moon />
      </Suspense>
    </Canvas>
  );
}
