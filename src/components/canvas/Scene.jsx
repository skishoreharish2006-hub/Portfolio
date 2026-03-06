import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import NeuralBrain from "./NeuralBrain";

const Scene = () => {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0, 20], fov: 45 }}
                style={{ background: "transparent" }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.3}
                />

                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#bc13fe" />

                <Suspense fallback={null}>
                    <NeuralBrain />
                    <Stars
                        radius={100}
                        depth={50}
                        count={5000}
                        factor={4}
                        saturation={0}
                        fade
                        speed={1}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
