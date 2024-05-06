"use client";
// React & Next
import Image from "next/image";
import React, { useState } from "react";

export function BlackHole() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount !== 2) {
      setClickCount(clickCount + 1);
    } else {
      setClickCount(0);
      handleTimeout();
    }
  };

  const handleTimeout = () => {
    window.open("https://www.youtube.com/shorts/ru2o94t8rwY", "_blank");
  };

  return (
    <div className={`relative w-full transition-all`} onClick={handleClick}>
      <div
        className={`${
          clickCount == 0 ? "w-40 " : clickCount == 1 ? "w-60 " : "w-80 "
        } absolute transition-all duration-1000 right-0 rotate-12`}
        onClick={handleClick}
      >
        <Image
          src="/3D models/blackhole6.gif"
          alt="blackhole"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export function BlackShole() {
  return (
    <div className="w-60 absolute -right-10 -bottom-10 rotate-12 -z-30">
      <Image
        src="/3D models/blackhole7.gif"
        alt="blackhole"
        width={1000}
        height={1000}
      />
    </div>
  );
}
