import * as PIXI from 'pixi.js';
import { app } from './renderer';
import { loop } from './system';

// Render PIXI app on canvas element.
document.body.appendChild(app.view);

// Setup.


// Init.


// Game Loop.
app.ticker.add((deltaTime: number) => loop(deltaTime, true));
