import React, { useRef, useState } from "react";

import { Canvas, useFrame } from "react-three-fiber";
//UseFrame actualiza los fotogramas al hacer rotacion

import {softShadows, MeshWobbleMaterial, OrbitControls, Stars, Sky} from "drei";
//softShadows incorpora sombras suaves
//MeshWobbleMaterial es el efecto tambaleante de todas las figuras
//OrbitControls permite que podamos movernos sobre el lienzo

import { useSpring, a } from "react-spring/three";
//Animaciones - a es de animated

//Se activan las sombras suaves
softShadows();

const SpinningMesh = ({ position, color, speed, args }) => {
  //Referencia al mesh objetivo
  const mesh = useRef();

  //useFrame nos permite re-renderizar la rotación en cada frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Estado de expansión básico
  const [expand, setExpand] = useState(false);

  // Animación de expansión de react spring
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

const AmbientLight = () => {
  return (
    <>
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Sky/>
        {/* Luz ambiental */}
        <ambientLight intensity={0.3} />
        {/* Luz direccional desde arriba */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <group>
          {/* Este mesh es el piso */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>
          <SpinningMesh
            position={[0, 1, 0]}
            color='lightblue'
            args={[2, 2, 1]}
            speed={2}
          />
          <SpinningMesh position={[-6, 1, -2]} color='lightgreen' speed={5} args={[5, 3, 1]}/>
          <SpinningMesh position={[6, 1, -2]} color='pink' speed={6} />
        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
      </Canvas>
    </>
  );
};


export default AmbientLight;
