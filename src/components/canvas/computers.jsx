
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader.jsx";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.58 : 0.75}
        position={isMobile ? [0, -3.2, -1.8] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf");

const ComputersCanvas = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 641px)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="w-full h-full relative hidden sm:block" style={{ touchAction: "pan-y" }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
        style={{ touchAction: "pan-y" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={false} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export { ComputersCanvas };
export default ComputersCanvas;