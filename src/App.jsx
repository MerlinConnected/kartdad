import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls, Gltf, Backdrop } from '@react-three/drei';

export default function App() {
  return (
    <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
      <Stage intensity={1.5} environment='city' adjustCamera={0.9}>
        <Gltf src='/go_kart.glb' receiveShadow castShadow />
      </Stage>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
