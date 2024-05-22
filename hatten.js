import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

// ブラウザの画面サイズを取得
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

const app = new PIXI.Application({ backgroundColor: "#ffffff", width: screenWidth, height: screenHeight });

app.ticker.stop();
gsap.ticker.add(time => {
    app.ticker.update();
});
document.body.appendChild(app.view);

const style = new PIXI.TextStyle({
    fontSize: 128,
    fill: '#0b2f80',
    lineJoin: 'round',
});

const text = new PIXI.Text('KCG', style);

app.stage.addChild(text);
text.anchor.set(0.5);
text.x = -text.width / 2;
text.y = screenHeight / 2;

let tl = gsap.timeline();

const setTimeline = () => {
    tl.to(text, { pixi: { x: screenWidth / 2 }, duration: 1.5, ease: 'power3.out' });
    tl.to(text, { pixi: { scaleX: 2.0 }, duration: 0.5, yoyo: true, repeat: 1 });
    tl.to(text, { pixi: { x: screenWidth + text.width / 2 }, duration: 1.5, delay: 3, ease: 'power3.out' });
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
