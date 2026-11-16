import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo, type ReactNode } from "react";
import * as THREE from "three";

/**
 * 3D Floating Gem / Polyhedron for the Hero showcase
 * Luxury Champagne (#E8D5C4) & Dusty Rose (#B77983) aesthetic
 */
function FloatingCoreGem({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2 + mouse.y * 0.3;
      meshRef.current.rotation.y = t * 0.25 + mouse.x * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.15 - mouse.y * 0.2;
      wireframeRef.current.rotation.y = -t * 0.2 - mouse.x * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      {/* Central Faceted Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 0]} />
        <MeshDistortMaterial
          color="#E8D5C4"
          distort={0.25}
          speed={1.2}
          roughness={0.25}
          metalness={0.85}
          emissive="#713B50"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Outer Champagne Wireframe Cage */}
      <lineSegments ref={wireframeRef}>
        <wireframeGeometry args={[new THREE.IcosahedronGeometry(1.4, 1)]} />
        <lineBasicMaterial color="#E8D5C4" opacity={0.35} transparent />
      </lineSegments>
    </Float>
  );
}

/**
 * Orbiting Champagne & Rose Gold Rings
 */
function OrbitingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.35;
      ring1.current.rotation.z = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.y = -t * 0.3;
      ring2.current.rotation.z = t * 0.15;
    }
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[1.8, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#B77983"
          emissive="#B77983"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.1, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#E8D5C4"
          emissive="#E8D5C4"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </>
  );
}

/**
 * Orbiting Champagne Micro-Satellites
 */
function OrbitingSatellites() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  const satellites = useMemo(() => {
    return [0, 1, 2, 3, 4].map((i) => {
      const angle = (i / 5) * Math.PI * 2;
      const radius = 2.4;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle * 2) * 0.4,
        z: Math.sin(angle) * radius,
        color: i % 2 === 0 ? "#E8D5C4" : "#B77983",
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {satellites.map((s, idx) => (
        <Float key={idx} speed={2} floatIntensity={0.8}>
          <mesh position={[s.x, s.y, s.z]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={1.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/**
 * Interactive 3D Hero Graphic
 * Mounts cleanly on the client without SSR hydration issues
 */
export function Hero3DGraphic({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className || ""}`}>
        <div className="w-32 h-32 rounded-full border border-[#DDCFBF]/40 animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`relative ${className || ""}`}>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.8} color="#E8D5C4" />
        <pointLight position={[-5, -5, -3]} intensity={1.2} color="#713B50" />
        <directionalLight position={[0, 4, 2]} intensity={0.9} color="#B77983" />
        <FloatingCoreGem mouse={mouse} />
        <OrbitingRings />
        <OrbitingSatellites />
      </Canvas>
    </div>
  );
}

/**
 * 3D Ambient Particle Constellation for the Background
 */
function AmbientPoints() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 180;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const c1 = new THREE.Color("#E8D5C4");
    const c2 = new THREE.Color("#B77983");
    const c3 = new THREE.Color("#713B50");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const chosenColor = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3;
      cols[i * 3] = chosenColor.r;
      cols[i * 3 + 1] = chosenColor.g;
      cols[i * 3 + 2] = chosenColor.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function Ambient3DCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.2]}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <AmbientPoints />
      </Canvas>
    </div>
  );
}

/**
 * 3D Interactive Card Wrapper
 * Adds 3D perspective tilt & dynamic mouse glare sheen without changing structure or text.
 */
interface Card3DProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function Card3D({ children, className = "", maxTilt = 8 }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
    );
    setGlareStyle({
      opacity: 0.12,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Dynamic 3D Glare Sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, #E8D5C4 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
