import React, { useRef, useState } from "react";

import { Canvas, useFrame } from "react-three-fiber";
//UseFrame actualiza los fotogramas al hacer rotacion

import {softShadows, MeshWobbleMaterial, OrbitControls, Box, Stars} from "drei";
//softShadows incorpora sombras suaves
//MeshWobbleMaterial es el efecto tambaleante de todas las figuras
//OrbitControls permite que podamos movernos sobre el lienzo

import { useSpring, a } from "react-spring/three";
//Animaciones - a es de animated


//Se activan las sombras suaves
softShadows();

const TorusMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow>
      <torusBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach='material'
        factor={0.6}
      />
    </a.mesh>
  );
};

const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
      <a.mesh
          position={position}
          ref={mesh}
          onClick={() => setExpand(!expand)}
          scale={props.scale}
          castShadow>
        <boxBufferGeometry attach='geometry' args={args} />
        <MeshWobbleMaterial
            color={color}
            speed={speed}
            attach='material'
            factor={0.6}
        />
      </a.mesh>
  );
};

const ConeMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
      <a.mesh
          position={position}
          ref={mesh}
          onClick={() => setExpand(!expand)}
          scale={props.scale}
          castShadow>
        <coneBufferGeometry attach='geometry' args={args} />
        <MeshWobbleMaterial
            color={color}
            speed={speed}
            attach='material'
            factor={0.6}
        />
      </a.mesh>
  );
};

const Fog = () => {
  return (
    <>
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Stars/>
        {/* This light makes things look pretty */}
        <ambientLight intensity={0.3} />
        {/* Our main source of light, also casting our shadow */}

        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} castShadow/>
        <pointLight position={[0, -10, 0]} intensity={1.5} castShadow/>
        <fog attach="fog" args={['green', 4, 5]} />

        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>
          <TorusMesh
            position={[0, 1, 0]}
            color='lightblue'
            speed={2}
          />
          <ConeMesh position={[-2, 1, -5]} color='red' speed={6} />
          <SpinningMesh position={[5, 1, -2]} color='black' speed={6} />
        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
      </Canvas>
    </>
  );
};


export default Fog;
