import { useEffect, useState } from 'react';

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrails(prev => {
        const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
        const updated = [newTrail, ...prev].slice(0, 10);
        return updated;
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{
            left: trail.x - 16,
            top: trail.y - 16,
            opacity: 0.3 - index * 0.03,
            transform: `scale(${1 - index * 0.1})`,
            transition: 'all 0.3s ease-out',
          }}
        />
      ))}
      
      <div
        className="absolute transition-all duration-100 ease-out"
        style={{
          left: position.x - 24,
          top: position.y - 24,
        }}
      >
        <div className={`relative w-12 h-12 ${isClicking ? 'scale-75' : 'scale-100'} transition-transform duration-150`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-yellow-500 opacity-40 blur-xl animate-pulse-glow"></div>
          
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
          
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-60 animate-spin-slow"></div>
          
          <div className="absolute inset-4 rounded-full bg-white"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div
        className="absolute pointer-events-none"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-blue-400/30 animate-ping"
            style={{
              width: `${(i + 1) * 40}px`,
              height: `${(i + 1) * 40}px`,
              left: `${-(i + 1) * 20}px`,
              top: `${-(i + 1) * 20}px`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
