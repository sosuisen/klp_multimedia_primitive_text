import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new PIXI.Application();
await app.init({ antialias: true, backgroundColor: 0x1099bb });
document.body.appendChild(app.canvas);

app.ticker.stop();
gsap.ticker.add(time => {
    app.ticker.update();
});


const basicText = new PIXI.Text({
    text: 'PixiJSでの文字表示',
    x: 30,
    y: 20,
});
app.stage.addChild(basicText);

// 参考
// https://pixijs.download/release/docs/text.TextStyle.html
const richText = new PIXI.Text({
    text: 'Rich text with a lot of options and across multiple lines',
    style: {
        fontFamily: 'Arial', // フォントの種類
        // fontFamily: '游明朝', // フォントの種類
        fontSize: 36, // 文字の大きさ
        fontStyle: 'italic', // 文字のスタイル
        fontWeight: 'bold', // 文字の太さ
        fill: '#ff9090', // 塗り
        stroke: { color: '#ffffff', width: 4 },// 縁取り線
        dropShadow: {
            color: '#000000', // 影の色
            blur: 4, // ぼかしの強さ
        },
        wordWrap: true, // 文字折り返しの有無。スペース文字でしか折り返さないため、日本語の際は注意。
        wordWrapWidth: 440, // 折り返し幅
        // lineJoin: 線のつなぎ目（角）の形状 'miter' | 'round' | 'bevel'
        // (参考) https://www.htmq.com/canvas/lineJoin.shtml
        lineJoin: 'round',
        letterSpacing: 3, // 文字間の幅
    },
    x: 30,
    y: 50,
});
app.stage.addChild(richText);

/**
 * 傾きを設定
 */
const skewText = new PIXI.Text({
    text: 'SKEW IS COOL',
    style: {
        fontSize: 42,
        fill: '#ffffff',
        stroke: { color: '#606090', width: 3 },
        lineJoin: 'round',
    },
    skew: { x: -Math.PI / 8, y: 0 },
    anchor: { x: 0.5, y: 0.5 },
    x: 200,
    y: 250,
});
app.stage.addChild(skewText);

/**
 * Unicode 絵文字を利用
 * https://lets-emoji.com/emojilist/
 */
/*
// バウンドするボール
const soccer = new PIXI.Text({
    text: '⚽',
    style: {
        fontSize: 42,
        padding: 5, // 絵文字の上下が切れないように余白を追加

    },
    x: 50,
    y: 300,
});
app.stage.addChild(soccer);
gsap.to(soccer, { x: 150, repeat: -1, ease: 'power1.out', yoyo: true });

// 壁
const wall = new PIXI.Graphics();
wall.rect(50, 300, 10, 50)
    .fill(0x003090);
app.stage.addChild(wall);

// 揺れるベル 
const bell = new PIXI.Text({
    text: '🔔',
    style: {
        fontSize: 42,
        padding: 5, // 絵文字の上下が切れないように余白を追加

    },
    anchor: { x: 0.5, y: 0.1 },
    x: 100,
    y: 370,
});
app.stage.addChild(bell);

gsap.fromTo(bell, {
    pixi: {
        rotation: -60,
    }
}, {
    repeat: -1,
    // https://greensock.com/docs/v3/Eases
    ease: 'circ.inOut',
    duration: 1,
    yoyo: true,
    pixi: {
        rotation: 60,
    }
});
*/