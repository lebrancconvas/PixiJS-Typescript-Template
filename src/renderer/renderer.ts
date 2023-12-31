import { PIXI } from './pixi';
import { config } from '../config';

export const app = new PIXI.Application<HTMLCanvasElement>({
  width: config.width,
  height: config.height,
  backgroundColor: config.backgroundColor,
  autoStart: config.autoStart,
  antialias: config.antialias,
  resolution: config.resolution
});
