'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import type { Mesh } from 'three';
import { useReducedMotion } from 'framer-motion';

function OrganicBlob() {
  const mesh = useRef<Mesh>(null!);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    const px = state.pointer.x;
    const py = state.pointer.y;
    mesh.current.rotation.x += (py * 0.25 - mesh.current.rotation.x) * 0.04;
    mesh.current.rotation.y += (px * 0.35 - mesh.current.rotation.y) * 0.04;
    mesh.current.position.y = Math.sin(t * 0.6) * 0.08;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={mesh} scale={1.45}>
        <icosahedronGeometry args={[1, 48]} />
        <MeshDistortMaterial
          color="#6366f1"
          distort={0.42}
          speed={1.6}
          roughness={0.25}
          metalness={0.5}
          emissive="#312e81"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div
        aria-hidden
        className="h-full w-full rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-2xl"
      />
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <pointLight position={[-3, -2, -2]} intensity={0.7} color="#ec4899" />
        <OrganicBlob />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
