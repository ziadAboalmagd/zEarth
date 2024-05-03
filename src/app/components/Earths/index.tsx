"use client";
// React & Next
import React, { Suspense } from "react";

// packages
import { Canvas } from "@react-three/fiber";

// components
import EarthN from "./earthn";
import EarthM from "./earthm";
import Marker from "./Marker";

// scss
import classes from "./index.module.scss";

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
  return (
    <div>
      {/* className={classes.mearth} */}
      <EarthM />
    </div>
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
