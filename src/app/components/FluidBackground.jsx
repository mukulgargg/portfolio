'use client';
import { useEffect, useRef } from 'react';

const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.id = 'fluid-canvas';

    // 1. Load dat.gui.min.js first
    const datScript = document.createElement('script');
    datScript.src = '/dat.gui.min.js';
    datScript.async = false;

    // 2. Then load fluidScript.js after dat.gui is loaded
    const fluidScript = document.createElement('script');
    fluidScript.src = '/fluidScript.js';
    fluidScript.async = false;

    document.body.appendChild(datScript);
    datScript.onload = () => {
      document.body.appendChild(fluidScript);
    };

    return () => {
      datScript.remove();
      fluidScript.remove();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="fluid-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'auto',
      }}
    />
  );
};

export default FluidBackground;