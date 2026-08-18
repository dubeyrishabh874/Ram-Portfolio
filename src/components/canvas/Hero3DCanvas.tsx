import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070a1e, 0.035);

    // 2. Camera setup - Isometric perspective feel
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(12, 14, 18);
    camera.lookAt(0, 1.5, 0);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x0d153a, 2.5);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00e5ff, 5.0, 35);
    cyanPointLight.position.set(-6, 8, 4);
    scene.add(cyanPointLight);

    const violetPointLight = new THREE.PointLight(0x7c4dff, 6.0, 35);
    violetPointLight.position.set(8, 7, -4);
    scene.add(violetPointLight);

    const accentLight = new THREE.DirectionalLight(0xffffff, 1.2);
    accentLight.position.set(5, 12, 10);
    scene.add(accentLight);

    // 5. Objects Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 5.1 Reflective Floor Grid
    const gridHelper = new THREE.GridHelper(40, 40, 0x00e5ff, 0x182452);
    gridHelper.position.y = -2.5;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.35;
    rootGroup.add(gridHelper);

    // Sub-grid with fine resolution
    const fineGrid = new THREE.GridHelper(40, 80, 0x7c4dff, 0x0c1432);
    fineGrid.position.y = -2.48;
    (fineGrid.material as THREE.Material).transparent = true;
    (fineGrid.material as THREE.Material).opacity = 0.15;
    rootGroup.add(fineGrid);

    // 5.2 Floating 3D Database Cylinders (Master Cluster)
    const dbGroup = new THREE.Group();
    rootGroup.add(dbGroup);

    const createDatabaseCylinder = (x: number, y: number, z: number, scale = 1, glowColor = 0x00e5ff) => {
      const dbObj = new THREE.Group();
      dbObj.position.set(x, y, z);
      dbObj.scale.set(scale, scale, scale);

      const discCount = 4;
      const radius = 1.3;
      const heightDisc = 0.38;
      const gap = 0.12;

      for (let i = 0; i < discCount; i++) {
        const cylinderGeo = new THREE.CylinderGeometry(radius, radius, heightDisc, 32);
        const metallicMat = new THREE.MeshStandardMaterial({
          color: 0x0c193c,
          metalness: 0.85,
          roughness: 0.25,
          emissive: i % 2 === 0 ? glowColor : 0x09122c,
          emissiveIntensity: i % 2 === 0 ? 0.35 : 0.1
        });
        const discMesh = new THREE.Mesh(cylinderGeo, metallicMat);
        discMesh.position.y = i * (heightDisc + gap);
        dbObj.add(discMesh);

        // Glowing blue ring around disc
        const ringGeo = new THREE.TorusGeometry(radius + 0.04, 0.025, 16, 40);
        const ringMat = new THREE.MeshBasicMaterial({
          color: glowColor,
          transparent: true,
          opacity: 0.8
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2;
        ringMesh.position.y = discMesh.position.y;
        dbObj.add(ringMesh);
      }

      // Base pedestal
      const baseGeo = new THREE.CylinderGeometry(radius * 1.2, radius * 1.3, 0.2, 32);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0x081024, metalness: 0.9, roughness: 0.1 });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.position.y = -0.15;
      dbObj.add(baseMesh);

      return dbObj;
    };

    const mainDb = createDatabaseCylinder(0, 0.5, 0, 1.25, 0x00e5ff);
    const secDb1 = createDatabaseCylinder(-4.5, 2.2, -2.5, 0.85, 0x7c4dff);
    const secDb2 = createDatabaseCylinder(4.2, -0.2, -3.2, 0.95, 0x00e5ff);
    dbGroup.add(mainDb);
    dbGroup.add(secDb1);
    dbGroup.add(secDb2);

    // 5.3 Glowing SQL Query Cubes
    const cubesGroup = new THREE.Group();
    rootGroup.add(cubesGroup);

    const cubes: { mesh: THREE.Mesh; speedX: number; speedY: number; speedZ: number; initialY: number; floatOffset: number }[] = [];

    const cubeConfigs = [
      { pos: [-3, 4.5, 2], size: 1.1, color: 0x00e5ff, rotSpeed: 0.01 },
      { pos: [3.5, 3.8, 2.5], size: 0.95, color: 0x7c4dff, rotSpeed: -0.008 },
      { pos: [-5, -0.5, 3.5], size: 0.8, color: 0x00e5ff, rotSpeed: 0.012 },
      { pos: [5.5, 1.8, 1], size: 1.0, color: 0x7c4dff, rotSpeed: 0.007 },
      { pos: [0, 5.2, -3.5], size: 0.85, color: 0x00f2fe, rotSpeed: -0.015 },
    ];

    cubeConfigs.forEach((cfg, idx) => {
      const boxGeo = new THREE.BoxGeometry(cfg.size, cfg.size, cfg.size);
      const boxMat = new THREE.MeshStandardMaterial({
        color: 0x091432,
        metalness: 0.8,
        roughness: 0.2,
        emissive: cfg.color,
        emissiveIntensity: 0.45,
        wireframe: false,
        transparent: true,
        opacity: 0.85
      });
      const boxMesh = new THREE.Mesh(boxGeo, boxMat);
      boxMesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);

      // Wireframe overlay for cyber aesthetic
      const edges = new THREE.EdgesGeometry(boxGeo);
      const lineMat = new THREE.LineBasicMaterial({ color: cfg.color, linewidth: 2 });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      boxMesh.add(wireframe);

      cubesGroup.add(boxMesh);
      cubes.push({
        mesh: boxMesh,
        speedX: cfg.rotSpeed,
        speedY: cfg.rotSpeed * 1.5,
        speedZ: cfg.rotSpeed * 0.8,
        initialY: cfg.pos[1],
        floatOffset: idx * 1.2
      });
    });

    // 5.4 Rotating Server Racks / Data Towers
    const serverRacksGroup = new THREE.Group();
    rootGroup.add(serverRacksGroup);

    const createServerRack = (x: number, y: number, z: number) => {
      const rack = new THREE.Group();
      rack.position.set(x, y, z);

      // Chassis
      const rackGeo = new THREE.BoxGeometry(1.6, 4.2, 1.4);
      const rackMat = new THREE.MeshStandardMaterial({
        color: 0x080f24,
        metalness: 0.9,
        roughness: 0.3
      });
      const rackMesh = new THREE.Mesh(rackGeo, rackMat);
      rack.add(rackMesh);

      // Blinking status LEDs on the front
      const ledCount = 7;
      for (let i = 0; i < ledCount; i++) {
        const ledGeo = new THREE.BoxGeometry(0.12, 0.08, 0.02);
        const ledMat = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x00e5ff : 0x00ff88
        });
        const ledMesh = new THREE.Mesh(ledGeo, ledMat);
        ledMesh.position.set(-0.4 + (i % 3) * 0.35, -1.5 + i * 0.48, 0.71);
        rack.add(ledMesh);
      }

      // Glowing slot lines
      for (let j = 0; j < 5; j++) {
        const slotGeo = new THREE.BoxGeometry(1.3, 0.04, 0.02);
        const slotMat = new THREE.MeshBasicMaterial({ color: 0x7c4dff, transparent: true, opacity: 0.6 });
        const slotMesh = new THREE.Mesh(slotGeo, slotMat);
        slotMesh.position.set(0, -1.6 + j * 0.8, 0.71);
        rack.add(slotMesh);
      }

      return rack;
    };

    const server1 = createServerRack(-7, 0, -4.5);
    const server2 = createServerRack(7, -0.5, -5);
    serverRacksGroup.add(server1);
    serverRacksGroup.add(server2);

    // 5.5 Neural / Data Particle Grid
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00e5ff);
    const color2 = new THREE.Color(0x7c4dff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 28;
      particlePositions[i3 + 1] = Math.random() * 14 - 2;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 28;

      const mixed = Math.random() > 0.5 ? color1 : color2;
      particleColors[i3] = mixed.r;
      particleColors[i3 + 1] = mixed.g;
      particleColors[i3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // 6. Mouse movement tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current.targetX = normX;
      mousePos.current.targetY = normY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Resize handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (Damping)
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.04;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.04;

      // Parallax rotation of entire scene
      rootGroup.rotation.y = mousePos.current.x * 0.25 + elapsedTime * 0.04;
      rootGroup.rotation.x = mousePos.current.y * 0.12;

      // Rotate and float database cylinders
      mainDb.rotation.y = elapsedTime * 0.3;
      mainDb.position.y = 0.5 + Math.sin(elapsedTime * 1.5) * 0.2;

      secDb1.rotation.y = -elapsedTime * 0.4;
      secDb1.position.y = 2.2 + Math.cos(elapsedTime * 1.2) * 0.25;

      secDb2.rotation.y = elapsedTime * 0.25;
      secDb2.position.y = -0.2 + Math.sin(elapsedTime * 1.8 + 1) * 0.18;

      // Rotate and float SQL cubes
      cubes.forEach((item) => {
        item.mesh.rotation.x += item.speedX;
        item.mesh.rotation.y += item.speedY;
        item.mesh.rotation.z += item.speedZ;
        item.mesh.position.y = item.initialY + Math.sin(elapsedTime * 1.6 + item.floatOffset) * 0.3;
      });

      // Slowly rotate server racks
      server1.rotation.y = Math.sin(elapsedTime * 0.4) * 0.15;
      server2.rotation.y = -Math.sin(elapsedTime * 0.4) * 0.15;

      // Animate particles
      particles.rotation.y = elapsedTime * 0.02;
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < particlePositions.length; i += 3) {
        positions[i] += Math.sin(elapsedTime + i) * 0.003;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Light flicker / pulse
      cyanPointLight.intensity = 4.5 + Math.sin(elapsedTime * 3) * 1.2;
      violetPointLight.intensity = 5.5 + Math.cos(elapsedTime * 2.5) * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-3d-viewport"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};
