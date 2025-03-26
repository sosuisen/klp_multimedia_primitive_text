import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
await app.init({ antialias: true, backgroundColor: 0xa0a0ff });
document.body.appendChild(app.canvas);

const graphics = new PIXI.Graphics();

// Line（直線）
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#moveTo
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#lineTo
// LineStyle
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#lineStyle

graphics.moveTo(30, 50)
    .lineTo(100, 100)
    .lineTo(200, 50)
    .lineTo(300, 100)
    .stroke({ width: 4, color: 0xffd900, alpha: 0.5 });

// Shape（閉じた図形）
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#beginFill
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#closePath
graphics.moveTo(50, 150)
    .lineTo(250, 150)
    .lineTo(100, 200)
    .closePath()
    .fill({ color: 0xff0000, alpha: 0.3 })
    .stroke({ width: 4, color: 0xffd900 });

// Polygon（多角形）
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#drawPolygon
const path = [100, 240, 200, 360, 280, 320, 230, 470, 50, 400];
// 指定のテクスチャで塗りつぶす
await PIXI.Assets.load('star.png');
graphics.poly(path)
    .fill({ texture: PIXI.Texture.from('star.png'), textureSpace: 'global' });

// Rectangle（矩形）
graphics.rect(350, 30, 100, 100)
    .fill(0xde3249);

// Rectangle（矩形＋枠線）
graphics.rect(350, 150, 100, 100)
    .fill(0xc34288)
    .stroke({ width: 10, color: 0xffbd01 });

// Rounded Rectangle（角丸の矩形）
graphics.roundRect(350, 280, 100, 100, 16)
    .fill({ color: 0x650a5a, alpha: 0.65 })
    .stroke({ width: 2, color: 0xff00ff });

// Circle（円）
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#drawCircle
graphics.circle(600, 80, 50)
    .fill(0xc34288)
    .stroke({ width: 10, color: 0xffbd01 });

// Ellipse（楕円）
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#drawEllipse
graphics.ellipse(600, 200, 80, 50)
    .fill(0xaa4f08)
    .stroke({ width: 2, color: 0xffffff });

// Arc（円弧）
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#arc
graphics.moveTo(520, 320)
    .arc(520, 320, 50, 0, Math.PI / 2, false)
    .closePath()
    .stroke({ width: 4, color: 0xff00ff });

graphics.moveTo(650, 320)
    .arc(650, 320, 50, 0, Math.PI / 2, true)
    .closePath()
    .stroke({ width: 4, color: 0xff00ff });

// Quadratic Bezier Curve（2次ベジェ曲線）
// https://pixijs.download/v7.x/docs/PIXI.Graphics.html#quadraticCurveTo
graphics.moveTo(500, 450)
    .quadraticCurveTo(550, 400, 600, 450)
    .quadraticCurveTo(650, 500, 700, 450)
    .stroke({ width: 3, color: 0x00ffff });

app.stage.addChild(graphics);
