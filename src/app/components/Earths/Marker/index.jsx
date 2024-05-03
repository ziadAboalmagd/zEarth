// react
import React from "react";

// pacakges
import { Gltf, OrbitControls } from "@react-three/drei";

// utils
import { useViewport } from "@/app/utils/other";

export default function Marker() {
    // check width
    const { width } = useViewport();
    // small screens
    const isSmallScreen = Number(width) < 720;
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
            <Gltf
                src={"/3D models/mark.glb"}
                scale={isSmallScreen ? 0.7 : 1.1}
                position={[0, 0, 0]}
                rotateZ={10}
                rot
            />
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
