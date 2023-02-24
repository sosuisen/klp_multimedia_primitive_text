const app = new PIXI.Application({ antialias: true, backgroundColor: 0xa0a0ff });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();

// Line（直線）
// https://pixijs.download/release/docs/PIXI.Graphics.html#moveTo
// https://pixijs.download/release/docs/PIXI.Graphics.html#lineTo
// LineStyle
// https://pixijs.download/release/docs/PIXI.Graphics.html#lineStyle
graphics.lineStyle(4, 0xffd900, 0.5);
graphics.moveTo(30, 50);
graphics.lineTo(100, 100);
graphics.lineTo(200, 50);
graphics.lineTo(300, 100);

// Shape（閉じた図形）
// https://pixijs.download/release/docs/PIXI.Graphics.html#beginFill
// https://pixijs.download/release/docs/PIXI.Graphics.html#closePath
graphics.beginFill(0xff0000, 0.3);
graphics.lineStyle(4, 0xffd900, 1);
graphics.moveTo(50, 150);
graphics.lineTo(250, 150);
graphics.lineTo(100, 200);
graphics.lineTo(50, 150);
graphics.closePath();
graphics.endFill();

// Polygon（多角形）
// https://pixijs.download/release/docs/PIXI.Graphics.html#drawPolygon
const path = [100, 240, 200, 360, 280, 320, 230, 470, 50, 400];
graphics.lineStyle(0);
graphics.beginFill(0x3500fa, 1);
graphics.drawPolygon(path);
graphics.endFill();

// Rectangle（矩形）
graphics.lineStyle(0);
graphics.beginFill(0xde3249);
graphics.drawRect(350, 30, 100, 100);
graphics.endFill();

// Rectangle（矩形＋枠線）
graphics.lineStyle(10, 0xffbd01, 1);
graphics.beginFill(0xc34288);
graphics.drawRect(350, 150, 100, 100);
graphics.endFill();

// Rounded Rectangle（角丸の矩形）
graphics.lineStyle(2, 0xff00ff, 1);
graphics.beginFill(0x650a5a, 0.65);
graphics.drawRoundedRect(350, 280, 100, 100, 16);
graphics.endFill();

// Circle（円）
// https://pixijs.download/release/docs/PIXI.Graphics.html#drawCircle
graphics.lineStyle(10, 0xffbd01, 1);
graphics.beginFill(0xc34288, 1);
graphics.drawCircle(600, 80, 50);
graphics.endFill();

// Ellipse（楕円）
// https://pixijs.download/release/docs/PIXI.Graphics.html#drawEllipse
graphics.lineStyle(2, 0xffffff, 1);
graphics.beginFill(0xaa4f08, 1);
graphics.drawEllipse(600, 200, 80, 50);
graphics.endFill();


// Arc（円弧）
// https://pixijs.download/release/docs/PIXI.Graphics.html#arc
graphics.lineStyle(4, 0xff00ff, 1);
graphics.moveTo(520, 320);
graphics.arc (520, 320, 50, 0, Math.PI/2, false);
graphics.closePath();

graphics.moveTo(650, 320);
graphics.arc (650, 320, 50, 0, Math.PI/2, true);
graphics.closePath();

// Quadratic Bezier Curve（2次ベジェ曲線）
https://pixijs.download/release/docs/PIXI.Graphics.html#quadraticCurveTo
graphics.lineStyle(3, 0x00ffff, 1);
graphics.moveTo(500, 450);
graphics.quadraticCurveTo(550, 400, 600, 450);
graphics.quadraticCurveTo(650, 500, 700, 450);

app.stage.addChild(graphics);
