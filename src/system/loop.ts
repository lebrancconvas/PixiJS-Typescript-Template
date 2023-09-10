import { app } from "../renderer";

export function loop(deltaTime: number, isMonitor: boolean) {


  // Monitoring.
  if(isMonitor) {
    console.log(`Delta Time: ${deltaTime}`);
    console.log(`FPS: ${app.ticker.FPS}`);
  }
};
