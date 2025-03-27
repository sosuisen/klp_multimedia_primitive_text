import * as PIXI from 'pixi.js';

const app = new PIXI.Application();
await app.init({ antialias: true, backgroundColor: 0xa0a0ff });
document.body.appendChild(app.canvas);

const graphics = new PIXI.Graphics();

// Line（直線）
// https://pixijs.download/release/docs/scene.Graphics.html#moveTo
// https://pixijs.download/release/docs/scene.Graphics.html#lineTo
// https://pixijs.download/release/docs/scene.Graphics.html#stroke
// StrokeStyleとデフォルト値
// https://pixijs.download/release/docs/scene.GraphicsContext.html#defaultStrokeStyle
graphics.moveTo(30, 50)
    .lineTo(100, 100)
    .lineTo(200, 50)
    .lineTo(300, 100)
    .stroke({ width: 4, color: 0xffd900, alpha: 0.5 });

// Shape（閉じた図形）
// https://pixijs.download/release/docs/scene.Graphics.html#fill
// https://pixijs.download/release/docs/scene.Graphics.html#closePath
// FillStyleとデフォルト値
// https://pixijs.download/release/docs/scene.GraphicsContext.html#defaultFillStyle
graphics.moveTo(50, 150)
    .lineTo(250, 150)
    .lineTo(100, 200)
    .closePath()
    .fill({ color: 0xff0000, alpha: 0.3 })
    .stroke({ width: 4, color: 0xffd900 });

// Polygon（多角形）
// https://pixijs.download/release/docs/scene.Graphics.html#poly
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
// https://pixijs.download/release/docs/scene.Graphics.html#circle
graphics.circle(600, 80, 50)
    .fill(0xc34288)
    .stroke({ width: 10, color: 0xffbd01 });

// Ellipse（楕円）
// https://pixijs.download/release/docs/scene.Graphics.html#ellipse
graphics.ellipse(600, 200, 80, 50)
    .fill(0xaa4f08)
    .stroke({ width: 2, color: 0xffffff });

// Arc（円弧）
// https://pixijs.download/release/docs/scene.Graphics.html#arc
graphics.moveTo(520, 320)
    .arc(520, 320, 50, 0, Math.PI / 2, false)
    .closePath()
    .stroke({ width: 4, color: 0xff00ff });

graphics.moveTo(650, 320)
    .arc(650, 320, 50, 0, Math.PI / 2, true)
    .closePath()
    .stroke({ width: 4, color: 0xff00ff });

// Quadratic Bezier Curve（2次ベジェ曲線）
// https://pixijs.download/release/docs/scene.Graphics.html#quadraticCurveTo
graphics.moveTo(500, 450)
    .quadraticCurveTo(550, 400, 600, 450)
    .quadraticCurveTo(650, 500, 700, 450)
    .stroke({ width: 3, color: 0x00ffff });

/**
 * 基本課題：雪だるま
 */
// 頭
graphics.circle(400, 440, 40)
    .fill(0xffffff)
    .stroke({ width: 3, color: 0xa0ffff });

// 体
graphics.circle(400, 530, 50)
    .fill(0xffffff)
    .stroke({ width: 3, color: 0xa0ffff });


app.stage.addChild(graphics);
