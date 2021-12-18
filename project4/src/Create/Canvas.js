import React, { useEffect } from "react";
import { useCanvas } from "./CanvasContext";
import "./Canvas.css"

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
      <>
      <div className="canvas-container">
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
     </div>
     </>
  );
}