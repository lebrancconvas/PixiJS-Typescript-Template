import { PIXI, app } from './renderer';
import { config } from './config';
import { loop } from './system';

document.body.appendChild(app.view);
app.renderer.background.color = config.backgroundColor;

// Setup.

// Init.

// Game Loop.
app.ticker.add((deltaTime: number) => loop(deltaTime));
