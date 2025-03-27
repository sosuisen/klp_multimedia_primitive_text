import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

// ブラウザの画面サイズを取得
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

const app = new PIXI.Application();
await app.init({ backgroundColor: "#ffffff", width: screenWidth, height: screenHeight });

app.ticker.stop();
gsap.ticker.add(time => {
    app.ticker.update();
});
document.body.appendChild(app.canvas);

const text = new PIXI.Text({
    text: 'KCG',
    style: {
        fontSize: 128,
        fill: '#0b2f80',
        lineJoin: 'round',
    },
    anchor: 0.5,
    y: screenHeight / 2,
});
app.stage.addChild(text);
text.x = -text.width / 2;

let tl = gsap.timeline();

const setTimeline = () => {
    tl.to(text, { pixi: { x: screenWidth / 2 }, duration: 1.5, ease: 'power3.out' })
        .to(text, { pixi: { scaleX: 2.0 }, duration: 0.5, yoyo: true, repeat: 1 })
        .to(text, { pixi: { x: screenWidth + text.width / 2 }, duration: 1.5, delay: 3, ease: 'power3.out' });
}
setTimeline();
tl.pause();

document.getElementById('startBtn').addEventListener('click', () => {
    text.x = -text.width / 2;
    text.y = screenHeight / 2;
    tl.restart();
});

window.onresize = () => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    app.renderer.resize(screenWidth, screenHeight);
    tl.clear();
    text.x = -text.width / 2;
    text.y = screenHeight / 2;
    setTimeline();
    tl.pause();
};
