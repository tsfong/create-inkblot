import React from 'react'
import { useCanvas } from './CanvasContext'
import "./Canvas.css"

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return (
  <div className="button-container">
  <button onClick={clearCanvas}>CLEAR</button>
  </div>
  )
}