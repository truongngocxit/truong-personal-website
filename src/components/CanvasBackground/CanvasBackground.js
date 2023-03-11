import css from "./CanvasBackground.module.scss";
import { useRef, useEffect } from "react";

const CanvasBackground = function () {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { current: canvasEl } = canvasRef;
    const canvasCtx = canvasEl.getContext("2d");

    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    canvasCtx.strokeStyle = "rgb(76, 201, 240, 0.3)";
    canvasCtx.lineWidth = 1;

    canvasCtx.shadowBlur = 24;
    canvasCtx.shadowColor = "rgb(76, 201, 240, 1)";

    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 0;
    const rectSize = 60;

    const clearAllPaths = function () {
      canvasCtx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    };

    const drawHorizontalPath = function (y) {
      canvasCtx.beginPath();
      canvasCtx.moveTo(0, y);
      canvasCtx.lineTo(canvasEl.width, y);
      canvasCtx.stroke();
      canvasCtx.closePath();
    };

    const drawVerticalPath = function (y) {
      canvasCtx.beginPath();
      canvasCtx.moveTo(y, 0);
      canvasCtx.lineTo(y, canvasEl.height);
      canvasCtx.stroke();
      canvasCtx.closePath();
    };

    const animateCanvas = function () {
      clearAllPaths();

      if (dy <= canvasEl.height) {
        for (y = rectSize; y <= canvasEl.height; y += rectSize) {
          drawHorizontalPath(y + dy);
        }
      }

      for (y = dy % rectSize; y <= dy; y += rectSize) {
        drawHorizontalPath(y);
      }

      if (dx <= canvasEl.width) {
        for (x = rectSize; x <= canvasEl.width; x += rectSize) {
          drawVerticalPath(x + dx);
        }
      }

      for (x = dx % rectSize; x <= dx; x += rectSize) {
        drawVerticalPath(x);
      }

      dx++;
      dy++;
      requestAnimationFrame(animateCanvas);
    };

    animateCanvas();

    return () => clearAllPaths();
  }, []);

  return (
    <div className={css["canvas"]}>
      <canvas className={css["canvas-bg"]} ref={canvasRef} />
      <div className={css["canvas-layer"]} />
    </div>
  );
};

export default CanvasBackground;
