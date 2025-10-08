import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  brightness: number;
}

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < 80; i++) {
        newSparkles.push({
          id: Math.random(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 8,
          brightness: Math.random(),
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[100]">
      {sparkles.map((sparkle) => {
        const colors = [
          'from-blue-200 to-blue-400',
          'from-yellow-200 to-yellow-400',
          'from-purple-200 to-purple-400',
          'from-white to-blue-200',
          'from-cyan-200 to-cyan-400',
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <div
            key={sparkle.id}
            className="absolute"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animation: `twinkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
            }}
          >
            <div 
              className={`w-[${sparkle.size}px] h-[${sparkle.size}px] bg-gradient-to-br ${color} rounded-full`}
              style={{
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                boxShadow: `0 0 ${sparkle.size * 2}px currentColor`,
                filter: `brightness(${sparkle.brightness + 0.5})`,
              }}
            />
          </div>
        );
      })}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
