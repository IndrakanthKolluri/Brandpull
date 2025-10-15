import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6b35"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#4a90e2"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function ThreeBackground({ children, variant = 'particles' }) {
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b35" />

        {variant === 'particles' && <Particles />}
        {variant === 'geometry' && <FloatingGeometry />}
        {variant === 'mixed' && (
          <>
            <Particles count={1000} />
            <FloatingGeometry />
          </>
        )}
      </Canvas>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
