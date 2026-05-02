// 3D Globe component using React Three Fiber
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Globe() {
  const globeRef = useRef<THREE.Group>(null);

  // Rotate the globe
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.1;
    }
  });

  // Create latitude lines
  const latitudeGeometries = useMemo(() => {
    const geometries: THREE.BufferGeometry[] = [];
    const latitudes = [-60, -30, 0, 30, 60];

    latitudes.forEach((lat) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const radius = Math.sin(phi) * 2;
      const y = Math.cos(phi) * 2;

      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 64; j++) {
        const theta = (j / 64) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(theta) * radius,
            y,
            Math.sin(theta) * radius
          )
        );
      }

      geometries.push(new THREE.BufferGeometry().setFromPoints(points));
    });

    return geometries;
  }, []);

  // Create longitude lines
  const longitudeGeometries = useMemo(() => {
    const geometries: THREE.BufferGeometry[] = [];
    const longitudes = 12;

    for (let i = 0; i < longitudes; i++) {
      const theta = (i / longitudes) * Math.PI * 2;
      const points: THREE.Vector3[] = [];

      for (let j = 0; j <= 64; j++) {
        const phi = (j / 64) * Math.PI;
        points.push(
          new THREE.Vector3(
            Math.sin(phi) * Math.cos(theta) * 2,
            Math.cos(phi) * 2,
            Math.sin(phi) * Math.sin(theta) * 2
          )
        );
      }

      geometries.push(new THREE.BufferGeometry().setFromPoints(points));
    }

    return geometries;
  }, []);

  // Create continents outline (simplified)
  const continentGeometries = useMemo(() => {
    // Simplified continent outlines as lat/long coordinates
    const continents = [
      // North America (simplified)
      [
        [70, -140], [70, -60], [50, -60], [30, -80], [25, -80], [20, -100],
        [30, -110], [35, -120], [50, -130], [60, -140], [70, -140]
      ],
      // South America (simplified)
      [
        [10, -80], [0, -50], [-10, -35], [-25, -45], [-55, -70],
        [-55, -75], [-35, -75], [-20, -70], [0, -80], [10, -80]
      ],
      // Europe/Africa (simplified)
      [
        [35, -10], [45, 0], [50, 30], [40, 40], [35, 35], [30, 35],
        [20, 40], [10, 0], [-35, 20], [-35, 25], [5, 50], [35, 40],
        [35, -10]
      ],
      // Asia (simplified)
      [
        [70, 30], [70, 180], [50, 145], [35, 135], [10, 120], [10, 105],
        [30, 80], [40, 50], [50, 45], [70, 30]
      ],
      // Australia (simplified)
      [
        [-15, 130], [-20, 150], [-35, 150], [-35, 140], [-25, 115],
        [-15, 125], [-15, 130]
      ]
    ];

    return continents.map((continent) => {
      const points: THREE.Vector3[] = [];

      continent.forEach(([lat, lng]) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);
        const radius = 2.01;

        points.push(
          new THREE.Vector3(
            -radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
          )
        );
      });

      return new THREE.BufferGeometry().setFromPoints(points);
    });
  }, []);

  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({ color: '#4096ff', opacity: 0.4, transparent: true }), []);
  const continentMaterial = useMemo(() => new THREE.LineBasicMaterial({ color: '#a8c4e0', opacity: 0.7, transparent: true }), []);

  return (
    <group ref={globeRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial
          color="#4096ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Latitude lines */}
      {latitudeGeometries.map((geometry, i) => (
        <primitive key={`lat-${i}`} object={new THREE.Line(geometry, lineMaterial)} />
      ))}

      {/* Longitude lines */}
      {longitudeGeometries.map((geometry, i) => (
        <primitive key={`long-${i}`} object={new THREE.Line(geometry, lineMaterial)} />
      ))}

      {/* Continent outlines */}
      {continentGeometries.map((geometry, i) => (
        <primitive key={`continent-${i}`} object={new THREE.Line(geometry, continentMaterial)} />
      ))}

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.95, 32, 32]} />
        <meshBasicMaterial
          color="#03080f"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

export default function WireframeGlobe() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Globe />
      </Canvas>
    </div>
  );
}
