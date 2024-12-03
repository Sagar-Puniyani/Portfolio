import React, { useEffect, useState } from "react";
import "./sparkles.css";

// Define the type for a sparkle
interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
}

const SparklingBackground: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]); 

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(2, 9);
      const sparkle: Sparkle = {
        id,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 5,
      };

      setSparkles((prev) => [...prev, sparkle]);

      // Remove sparkle after 2 seconds
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 2000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sparkles-container">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
          }}
        />
      ))}
    </div>
  );
};

export default SparklingBackground;
