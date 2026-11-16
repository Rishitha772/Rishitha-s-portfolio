import { Ambient3DCanvas } from "./Scene3D";

/**
 * Subtle luxury editorial background ambience
 * Integrates WebGL 3D depth constellation with soft warm burgundy gradients.
 */
export function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#351E2B]">
      {/* 3D WebGL Ambient Depth Constellation */}
      <Ambient3DCanvas />

      {/* Soft warm burgundy radial gradient */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, #713B50 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* Subtle dusty rose bottom ambient illumination */}
      <div
        className="absolute -bottom-[20%] right-[10%] w-[800px] h-[600px] opacity-15"
        style={{
          background: "radial-gradient(circle at center, #B77983 0%, transparent 65%)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
