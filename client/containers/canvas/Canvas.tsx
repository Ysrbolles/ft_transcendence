import style from "./canvas.module.css";
import { Suspense, useRef, KeyboardEvent, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Stars, Loader } from "@react-three/drei";
import * as THREE from "three";
import React from "react";
import { NoToneMapping } from "three";
import Scene from "@/containers/scene/Scene";
import { racquetSize, planeSize } from "@/tools/globalVariable";
import { useInterval } from "@/hooks/useInterval";
import { Message } from "@/components/r3jObjects/R3jObjects";

const MyCanvas: React.FC = () => {
  const racquet = useRef<THREE.Mesh>(null!);
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const racquetMaxStep = planeSize[0] / 2 - racquetSize[0] / 2;
  const [count, setCount] = useState<number>(3);
  const [timer, setTimer] = useState(1000);
  const [collided, setCollided] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);

  const gameSpeed = 0.25;

  useInterval(() => setCount((count) => count - 1), timer);
  useEffect(() => {
    console.log(count);
    if (count < 0) {
      setTimer(0);
      setStart(true);
    }
  }, [count]);

  const handleKeyboardEvent = (e: KeyboardEvent<HTMLImageElement>) => {
    if (count !== -1) return;
    const { code } = e;
    console.log(code);
    let step = 0;
    switch (code) {
      case "ArrowRight":
      case "ArrowUp":
      case "KeyL":
        step = 0.8;
        break;
      case "ArrowLeft":
      case "ArrowDown":
      case "KeyJ":
        step = -0.8;
        break;
      default:
        step = 0;
    }
    if (Math.abs(racquet.current.position.x + step) <= racquetMaxStep)
      racquet.current.position.x += step;
    else {
      step = racquetMaxStep - Math.abs(racquet.current.position.x);
      racquet.current.position.x += step;
    }
  };

  useEffect(() => {
    canvasRef.current.focus();
    document.getElementById("canvas")?.focus();
    setCount(3);
    setTimer(1000);
  }, []);

  useEffect(() => {
    if (!collided) return;
    setStart(false);
    setCount(0);
    setCollided(false);
    setTimer(1000);
  }, [collided]);

  return (
    <Canvas
      className={style.container}
      frameloop="demand"
      ref={canvasRef}
      onKeyDown={handleKeyboardEvent}
      id="canvas"
      tabIndex={0}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 5, 20] }}
      gl={{ toneMapping: NoToneMapping }}
      onCreated={({ gl }) => {
        gl.setClearColor("#9a9a9a");
      }}
    >
      <color attach="background" args={["#464E5F"]} />
      <Stats />
      <OrbitControls />
      <ambientLight color={"#ffffff"} intensity={0.5} />
      <Suspense fallback={null}>
        <Stars
          radius={80}
          depth={40}
          count={9000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Scene
          ref={racquet}
          gameSpeed={gameSpeed}
          start={start}
          setCollided={(value: boolean): void => {
            setCollided(value);
          }}
        />
        {count >= 0 && (
          <Message
            text={count ? count : "GO"}
            mesh={{ position: [0, 3.3, 2], rotation: [-1, 0, 0] }}
          />
        )}
      </Suspense>
    </Canvas>
  );
};

export default MyCanvas;
