const app = new PIXI.Application({ background: '#1099bb' });
app.ticker.stop();
gsap.ticker.add(time => {
    app.ticker.update();
});
document.body.appendChild(app.view);

const basicText = new PIXI.Text('PixiJSでの文字表示');
basicText.x = 30;
basicText.y = 20;

app.stage.addChild(basicText);

// 参考
// https://pixijs.io/pixi-text-style/
const style = new PIXI.TextStyle({
    fontFamily: 'Arial', // フォントの種類
    // fontFamily: '游明朝', // フォントの種類
    fontSize: 36, // 文字の大きさ
    fontStyle: 'italic', // 文字のスタイル
    fontWeight: 'bold', // 文字の太さ
    fill: ['#c09090', '#c00000'], // グラデーション塗り
    stroke: '#ffffff', // 縁取り線
    strokeThickness: 3, // 縁取り線の太さ
    dropShadow: true, // ドロップシャドウ
    dropShadowColor: '#600000', // ドロップシャドウの色
    dropShadowBlur: 4, // ドロップシャドウのぼかし量
    dropShadowAngle: Math.PI / 6, // ドロップシャドウの角度
    dropShadowDistance: 6, // ドロップシャドウの距離
    wordWrap: true, // 文字折り返しの有無。スペース文字でしか折り返さないため、日本語の際は注意。
    wordWrapWidth: 440, // 折り返し幅
    // lineJoin: 線のつなぎ目（角）の形状 'miter' | 'round' | 'bevel'
    // (参考) https://www.htmq.com/canvas/lineJoin.shtml
    lineJoin: 'round',
    letterSpacing: 3, // 文字間の幅
});

const richText = new PIXI.Text('Rich text with a lot of options and across multiple lines', style);
// const richText = new PIXI.Text('複数行に渡るテキストを 様々なオプションで 表示することができます。', style);
richText.x = 30;
richText.y = 50;

app.stage.addChild(richText);

/**
 * 傾きを設定
 */
const skewStyle = new PIXI.TextStyle({
    fontSize: 42,
    fill: '#ffffff',
    stroke: '#606090',
    strokeThickness: 3,
    lineJoin: 'round',
});

const skewText = new PIXI.Text('SKEW IS COOL', skewStyle);
skewText.skew.set(-Math.PI / 8, 0);
// skewText.skew.set(-Math.PI/8, -Math.PI/8);
skewText.anchor.set(0.5, 0.5); // 傾きの中心位置
skewText.x = 200;
skewText.y = 250;

app.stage.addChild(skewText);

/**
 * Unicode 絵文字を利用
 * https://lets-emoji.com/emojilist/
 */
/*
const emojiStyle = new PIXI.TextStyle({
    fontSize: 42,
    padding: 5, // 絵文字の上下が切れないように余白を追加
});

// バウンドするボール
const soccer = new PIXI.Text('⚽', emojiStyle);
soccer.x = 50;
soccer.y = 300;
app.stage.addChild(soccer);
gsap.to(soccer, { x: 150, repeat: -1, ease: 'power1.out', yoyo: true });

// 壁
const wall = new PIXI.Graphics();
wall.lineStyle(0);
wall.beginFill(0x003090);
wall.drawRect(50, 300, 10, 50);
wall.endFill();
app.stage.addChild(wall);

// 揺れるベル 
const bell = new PIXI.Text('🔔', emojiStyle);
bell.x = 100;
bell.y = 370;
bell.anchor.set(0.5, 0.1);
app.stage.addChild(bell);
gsap.fromTo(bell, {
    pixi: {
        angle: -60,
    }
}, {
    repeat: -1,
    // https://greensock.com/docs/v2/Easing
    ease: 'circ.inOut',
    duration: 1,
    yoyo: true,
    pixi: {
        angle: 60,
    }
});
*/