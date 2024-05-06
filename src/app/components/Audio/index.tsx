"use client";
import { Chilanka } from "next/font/google";
// React & Next
import React, { useRef, useState } from "react";

// React Icons
import { CiVolume } from "react-icons/ci";
import { CiVolumeHigh } from "react-icons/ci";

export const Zaudio = (props: { src: string }) => {
  // State to track whether sound is playing or paused
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // audio
  const audioRef = useRef<any>();
  // Function to toggle play/pause
  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // If currently playing, pause the sound
        audioRef.current.pause();
      } else {
        // If currently paused, play the sound
        audioRef.current.play();
      }
      // Update the state to toggle between playing and paused
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div onClick={toggleSound} className="px-3">
      {isPlaying ? (
        <CiVolumeHigh className="text-5xl" />
      ) : (
        <CiVolume className="text-5xl" />
      )}
      <audio ref={audioRef} src={`/audio/${props.src}.mp3`} />
    </div>
  );
};

export const Oaudio = ({ children }: { children: React.ReactNode }) => {
  // State to track whether sound is playing or paused
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // audio
  const audioRef = useRef<any>();
  // Function to toggle play/pause
  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // If currently playing, pause the sound
        audioRef.current.pause();
      } else {
        // If currently paused, play the sound
        audioRef.current.play();
      }
      // Update the state to toggle between playing and paused
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div onClick={toggleSound}>
      {children}
      <audio ref={audioRef} src={`/audio/j.mp3`} />
    </div>
  );
};
