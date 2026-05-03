import { useEffect, useRef } from 'react';
// Pure canvas-based wireframe globe - no external 3D dependencies

export default function WireframeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let rotation = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      ctx.clearRect(0, 0, width, height);
      
      // Globe center and radius
      const centerX = width * 0.75;
      const centerY = height * 0.5;
      const radius = Math.min(width, height) * 0.35;

      ctx.strokeStyle = 'rgba(64, 150, 255, 0.25)';
      ctx.lineWidth = 1;

      // Draw longitude lines (vertical arcs)
      const numLongitudes = 12;
      for (let i = 0; i < numLongitudes; i++) {
        const angle = (i / numLongitudes) * Math.PI + rotation;
        const x = Math.cos(angle);
        
        ctx.beginPath();
        for (let j = 0; j <= 64; j++) {
          const phi = (j / 64) * Math.PI;
          const px = centerX + x * Math.sin(phi) * radius;
          const py = centerY - Math.cos(phi) * radius;
          
          if (j === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }

      // Draw latitude lines (horizontal ellipses)
      const latitudes = [-60, -30, 0, 30, 60];
      latitudes.forEach((lat) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const y = Math.cos(phi) * radius;
        const ellipseRadius = Math.sin(phi) * radius;
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY - y, ellipseRadius, ellipseRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Draw outer circle
      ctx.strokeStyle = 'rgba(64, 150, 255, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw simplified continent outlines (visible half)
      ctx.strokeStyle = 'rgba(168, 196, 224, 0.5)';
      ctx.lineWidth = 1.5;

      // Simplified continent data [lat, lng] pairs
      const continents = [
        // North America
        [[70, -140], [70, -60], [50, -60], [30, -80], [25, -80], [20, -100], [30, -110], [35, -120], [50, -130], [60, -140], [70, -140]],
        // South America
        [[10, -80], [0, -50], [-10, -35], [-25, -45], [-55, -70], [-55, -75], [-35, -75], [-20, -70], [0, -80], [10, -80]],
        // Europe/Africa
        [[35, -10], [45, 0], [50, 30], [40, 40], [35, 35], [30, 35], [20, 40], [10, 0], [-35, 20], [-35, 25], [5, 50], [35, 40], [35, -10]],
        // Asia
        [[70, 30], [70, 180], [50, 145], [35, 135], [10, 120], [10, 105], [30, 80], [40, 50], [50, 45], [70, 30]],
        // Australia
        [[-15, 130], [-20, 150], [-35, 150], [-35, 140], [-25, 115], [-15, 125], [-15, 130]]
      ];

      continents.forEach((continent) => {
        ctx.beginPath();
        let started = false;
        
        continent.forEach(([lat, lng], index) => {
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lng * (Math.PI / 180)) + rotation;
          
          // Only draw points on the visible side
          const z = Math.sin(phi) * Math.sin(theta);
          if (z < 0) {
            if (started) {
              ctx.stroke();
              ctx.beginPath();
              started = false;
            }
            return;
          }
          
          const px = centerX + Math.sin(phi) * Math.cos(theta) * radius;
          const py = centerY - Math.cos(phi) * radius;
          
          if (!started || index === 0) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        });
        
        if (started) {
          ctx.stroke();
        }
      });

      // Add glow effect
      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.2);
      gradient.addColorStop(0, 'rgba(64, 150, 255, 0)');
      gradient.addColorStop(1, 'rgba(64, 150, 255, 0.1)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      rotation += 0.003;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.6,
      }}
    />
  );
}
