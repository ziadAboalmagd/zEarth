import React, { useEffect, useState } from "react";
import { Gltf, OrbitControls } from "@react-three/drei";
import { useViewport } from "@/app/utils/other";

export default function Marker() {
  const { width } = useViewport();
  const isSmallScreen = Number(width) < 720;
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    setIsModelLoaded(true);
  }, []);
  return (
    <>
      <ambientLight intensity={2.9} />
      <directionalLight
        color="#FFFFFF"
        intensity={3.5}
        position={[10, 20, 10]}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-near={0.5}
        shadow-camera-far={100}
        shadow-camera-left={-10}
        shadow-camera-bottom={-10}
        shadow-camera-top={10}
        shadow-camera-right={10}
      />
      {/* Render the model only if it's loaded */}
      {isModelLoaded && (
        <Gltf
          src={"/3D models/the_moon.glb"}
          scale={isSmallScreen ? 1.3 : 2.3}
          position={[0, 0, 0]}
          rotateZ={10}
          rot
        />
      )}
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
    </>
  );
}
