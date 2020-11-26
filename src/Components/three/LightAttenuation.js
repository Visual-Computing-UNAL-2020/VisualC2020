import React, { useRef, useState } from "react";

import { Canvas, useFrame } from "react-three-fiber";
//UseFrame actualiza los fotogramas al hacer rotacion

import {softShadows, MeshWobbleMaterial, OrbitControls, Box, Sky, Stars} from "drei";
//softShadows incorpora sombras suaves
//MeshWobbleMaterial es el efecto tambaleante de todas las figuras
//OrbitControls permite que podamos movernos sobre el lienzo

import { useSpring, a } from "react-spring/three";
//Animaciones - a es de animated


//Se activan las sombras suaves
softShadows();

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
      <coneBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach='material'
        factor={0.6}
      />
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
};

const Sphere = ({ position, color, speed, args }) => {
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
        <sphereBufferGeometry attach='geometry' args={args} />

      </a.mesh>

  );
};

const LightAttenuation = () => {
  return (
    <>
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Stars/>
        {/* Luz ambiental*/}
        {/* Luz direccional de arriba */}
        {/* A light to help illumnate the spinning boxes */}
        <spotLight position={[0, 5, 10]} angle={0.30} penumbra={1} castShadow/>
        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />

            <shadowMaterial attach='material' opacity={0.3} />

          </mesh>
          <SpinningMesh position={[0, 0, 0]} color='red' speed={6} args={[2.0,2.0,15]}/>
          <Sphere position={[0, 5, 11]} color='red' speed={6} args={[1.0]}/>

        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
      </Canvas>
    </>
  );
};


export default LightAttenuation;
