import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Text } from "@react-three/drei";
import * as THREE from "three";

const SkillNode = ({ position, name, color, onClick }) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Gentle floating animation
            meshRef.current.position.y += Math.sin(time + position[0]) * 0.002;
        }
    });

    return (
        <group position={position}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={onClick}
            >
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color={hovered ? "#ffffff" : color}
                    emissive={color}
                    emissiveIntensity={hovered ? 2 : 1}
                />

                {/* Progress ring around the node */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.7, 0.02, 16, 100]} />
                    <meshBasicMaterial color={color} transparent opacity={0.5} />
                </mesh>
            </mesh>

            <Text
                position={[0, -1.2, 0]}
                fontSize={0.4}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                {name}
            </Text>

            {hovered && (
                <Html distanceFactor={10}>
                    <div className="bg-black/80 backdrop-blur-md border border-white/20 p-2 rounded-lg text-xs text-white whitespace-nowrap">
                        Click to explore {name}
                    </div>
                </Html>
            )}
        </group>
    );
};

export default SkillNode;
