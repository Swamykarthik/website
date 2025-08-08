import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  gravity: number;
  friction: number;
  alpha: number;
  type: 'spark' | 'glow' | 'trail';
}

interface Firework {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  exploded: boolean;
  life: number;
  trail: Array<{ x: number; y: number; alpha: number }>;
  size: number;
}

const FireworksBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const fireworksRef = useRef<Firework[]>([]);
  const lastFireworkTime = useRef<number>(0);

  const colors = [
    '#FFD700', // Gold
    '#FF6B6B', // Coral Red
    '#4ECDC4', // Turquoise
    '#45B7D1', // Sky Blue
    '#96CEB4', // Mint Green
    '#FFEAA7', // Light Yellow
    '#DDA0DD', // Plum
    '#98D8C8', // Aqua
    '#F7DC6F', // Pale Gold
    '#BB8FCE', // Light Purple
    '#85C1E9', // Light Blue
    '#F8C471', // Peach
    '#82E0AA', // Light Green
    '#F1948A', // Light Coral
    '#D7BDE2'  // Lavender
  ];

  const getRandomColor = useCallback(() => {
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const createFirework = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const firework: Firework = {
      x: Math.random() * canvas.width,
      y: canvas.height + 50,
      targetX: (canvas.width * 0.2) + Math.random() * (canvas.width * 0.6),
      targetY: (canvas.height * 0.2) + Math.random() * (canvas.height * 0.3),
      vx: 0,
      vy: 0,
      color: getRandomColor(),
      exploded: false,
      life: 0,
      trail: [],
      size: 2 + Math.random() * 2
    };

    const dx = firework.targetX - firework.x;
    const dy = firework.targetY - firework.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = 6 + Math.random() * 3;

    firework.vx = (dx / distance) * speed;
    firework.vy = (dy / distance) * speed;

    fireworksRef.current.push(firework);
  }, [getRandomColor]);

  const explodeFirework = useCallback((firework: Firework) => {
    const particleCount = 25 + Math.random() * 35;
    const baseColor = firework.color;

    // Create main explosion particles
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.3;
      const velocity = 2 + Math.random() * 4;
      
      // Main sparks
      particlesRef.current.push({
        x: firework.x,
        y: firework.y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 40 + Math.random() * 30,
        maxLife: 40 + Math.random() * 30,
        color: baseColor,
        size: 1.5 + Math.random() * 2,
        gravity: 0.03 + Math.random() * 0.05,
        friction: 0.97 + Math.random() * 0.02,
        alpha: 1,
        type: 'spark'
      });
    }

    // Create glowing center particles
    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 0.5 + Math.random() * 1.5;
      
      particlesRef.current.push({
        x: firework.x,
        y: firework.y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 60 + Math.random() * 40,
        maxLife: 60 + Math.random() * 40,
        color: '#FFFFFF',
        size: 3 + Math.random() * 4,
        gravity: 0.01,
        friction: 0.99,
        alpha: 1,
        type: 'glow'
      });
    }

    // Create trailing particles
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 1 + Math.random() * 2;
      
      particlesRef.current.push({
        x: firework.x + (Math.random() - 0.5) * 10,
        y: firework.y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 30 + Math.random() * 25,
        maxLife: 30 + Math.random() * 25,
        color: baseColor,
        size: 0.8 + Math.random() * 1.2,
        gravity: 0.02,
        friction: 0.98,
        alpha: 0.8,
        type: 'trail'
      });
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Create a subtle fade effect
    ctx.fillStyle = 'rgba(15, 15, 35, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const currentTime = Date.now();

    // Create fireworks at pleasant intervals
    if (currentTime - lastFireworkTime.current > 1500 + Math.random() * 2000) {
      createFirework();
      lastFireworkTime.current = currentTime;
    }

    // Update and draw fireworks
    fireworksRef.current = fireworksRef.current.filter(fw => {
      if (!fw.exploded) {
        fw.x += fw.vx;
        fw.y += fw.vy;
        fw.life++;

        // Add trail effect
        fw.trail.push({ x: fw.x, y: fw.y, alpha: 1 });
        if (fw.trail.length > 8) fw.trail.shift();

        // Draw trail
        fw.trail.forEach((pt, i) => {
          const alpha = (i / fw.trail.length) * 0.6;
          ctx.globalAlpha = alpha;
          ctx.fillStyle = fw.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = fw.color;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, fw.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw firework
        ctx.globalAlpha = 1;
        ctx.fillStyle = fw.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = fw.color;
        ctx.beginPath();
        ctx.arc(fw.x, fw.y, fw.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Check if reached target
        const dx = fw.targetX - fw.x;
        const dy = fw.targetY - fw.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 15 || fw.life > 80) {
          explodeFirework(fw);
          fw.exploded = true;
          return false;
        }
      }
      return !fw.exploded;
    });

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(p => {
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      p.alpha = Math.max(0, p.life / p.maxLife);

      if (p.type === 'glow') {
        // Glowing center particles
        ctx.globalAlpha = p.alpha * 0.8;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'spark') {
        // Main spark particles
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'trail') {
        // Trailing particles
        ctx.globalAlpha = p.alpha * 0.6;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      return p.life > 0 && p.y < canvas.height + 50;
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    animationRef.current = requestAnimationFrame(animate);
  }, [createFirework, explodeFirework]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create a firework at click position
    const firework: Firework = {
      x: Math.random() * canvas.width,
      y: canvas.height + 50,
      targetX: x,
      targetY: y,
      vx: 0,
      vy: 0,
      color: getRandomColor(),
      exploded: false,
      life: 0,
      trail: [],
      size: 2 + Math.random() * 2
    };

    const dx = firework.targetX - firework.x;
    const dy = firework.targetY - firework.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const speed = 8 + Math.random() * 3;

    firework.vx = (dx / distance) * speed;
    firework.vy = (dy / distance) * speed;

    fireworksRef.current.push(firework);
  }, [getRandomColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Create initial fireworks for a welcoming effect
    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        setTimeout(() => createFirework(), i * 800);
      }
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, createFirework]);

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      className="fixed inset-0 pointer-events-auto z-0 cursor-crosshair"
      style={{ 
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 25%, #2d1b69 50%, #1e1e3f 75%, #0a0a1a 100%)'
      }}
    />
  );
};

export default FireworksBackground;