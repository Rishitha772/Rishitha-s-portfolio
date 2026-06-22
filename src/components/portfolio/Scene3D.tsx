import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.6, 32, 32]}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#6366f1"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingSpheres() {
  const groupRef = useRef<any>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <group ref={groupRef}>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 3;
        return (
          <Float key={i} speed={2} floatIntensity={1}>
            <mesh position={[Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius]}>
              <sphereGeometry args={[0.15, 12, 12]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#22d3ee" : "#a855f7"}
                emissive={i % 2 === 0 ? "#22d3ee" : "#a855f7"}
                emissiveIntensity={1.5}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      frameloop="always"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#22d3ee" />
        <AnimatedSphere />
        <OrbitingSpheres />
      </Suspense>
    </Canvas>
  );
}