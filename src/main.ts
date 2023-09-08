import { config } from './config';
import { app } from './renderer';

document.body.appendChild(app.view);
app.renderer.background.color = config.backgroundColor;

// Init.

// Game Loop.
