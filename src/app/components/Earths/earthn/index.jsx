"use client"

// react
import React, { useRef } from "react";

// packages
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";



export default function EarthN() {
  // images's texture load
  const textureLoader = new THREE.TextureLoader();
  const colorMap = textureLoader.load('/nEarth/8k_earth_daymap.jpg');
  const normalMap = textureLoader.load('/nEarth/8k_earth_normal_map.jpg');
  const cloudsMap = textureLoader.load('/nEarth/8k_earth_clouds.jpg');
  const specularMap = textureLoader.load('/nEarth/8k_earth_specular_map.jpg');
  const sunTexture = textureLoader.load('/nEarth/2k_sun.jpg');

  // refs
  const earthRef = useRef(null);
  const cloudsRef = useRef(null);
  const sunRef = useRef();

  // frame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (earthRef.current && cloudsRef.current) {
      // Update rotation of Earth and clouds
      earthRef.current.rotation.y = elapsedTime / 17;
      cloudsRef.current.rotation.y = elapsedTime / 17;
    }
  });

  // map marker
  const mark = useLoader(GLTFLoader, "/3D models/mark.glb");
  const marker = mark.scene;
  marker.position.set(0.2, 1.05, 0.15);
  marker.scale.set(0.03, 0.03, 0.03);
  marker.rotateOnAxis(new THREE.Vector3(0, 0, 0), +Math.PI * 1.12);

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
      <pointLight color="#f6f3ea" position={[10, 20, 10]} intensity={1.2} />
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      {/* stars */}
      <Stars
        radius={300}
        depth={60}
        count={791}
        factor={7}
        saturation={0}
        fade={true}
      />
      {/* sun */}
      <mesh ref={sunRef} position={[-50, 50, -50]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={sunTexture} />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.7, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.7, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        /></mesh>
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
      {/* <Gltf
                ref={MarkRef}
                src={"/assets/mark.glb"}
                scale={0.05}
                position={[0, 0, 1]}
                rotateZ={10} 
                rot
            /> */}
      <primitive object={marker} />
    </>
  );
}
