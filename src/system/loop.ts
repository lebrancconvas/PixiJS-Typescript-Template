import { app } from "../renderer";

export function loop(deltaTime: number) {


  // Monitoring.
  console.log(`Delta Time: ${deltaTime}`);
  console.log(`FPS: ${app.ticker.FPS}`);
};
