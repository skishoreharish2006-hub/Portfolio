import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { SKILLS } from "../../constants";
import SkillNode from "./SkillNode";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const NeuralBrain = () => {
    const { camera } = useThree();
    const brainRef = useRef();
    const linesRef = useRef();

    // Create points for the "neural network" look
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 100; i++) {
            p.push(
                new THREE.Vector3(
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 8
                )
            );
        }
        return p;
    }, []);

    // Create connections between points
    const connections = useMemo(() => {
        const lines = [];
        for (let i = 0; i < points.length; i++) {
            const start = points[i];
            for (let j = 0; j < 2; j++) {
                const end = points[Math.floor(Math.random() * points.length)];
                if (start !== end) {
                    lines.push(start, end);
                }
            }
        }
        return lines;
    }, [points]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (brainRef.current) {
            brainRef.current.rotation.y = time * 0.05;
            brainRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
        }
    });

    return (
        <group ref={brainRef}>
            {/* Central "Core" of the brain */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere args={[2.5, 64, 64]}>
                    <MeshDistortMaterial
                        color="#00f3ff"
                        speed={1.5}
                        distort={0.3}
                        radius={1}
                        emissive="#00f3ff"
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.4}
                    />
                </Sphere>
            </Float>

            {/* Neural Network connections */}
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={connections.length}
                        array={new Float32Array(connections.flatMap((v) => [v.x, v.y, v.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#bc13fe" transparent opacity={0.15} />
            </lineSegments>

            {/* Neural Nodes (small glowing spheres) */}
            {points.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.03, 8, 8]} />
                    <meshBasicMaterial color="#00ffff" transparent opacity={0.5} />
                </mesh>
            ))}

            {/* Orbiting Tech Nodes (Visual only) */}
            {SKILLS.map((skill, index) => {
                const angle = (index / SKILLS.length) * Math.PI * 2;
                const radius = 8;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                return (
                    <mesh key={index} position={[x, (index % 2 === 0 ? 1 : -1) * 3, z]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshBasicMaterial color={skill.color} transparent opacity={0.3} />
                    </mesh>
                );
            })}
        </group>
    );
};

export default NeuralBrain;
