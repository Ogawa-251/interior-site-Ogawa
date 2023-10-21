const splide = new Splide(".splide", {
    autoplay: true, // 自動再生
    type: "loop", // ループ
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    interval: 2000, // 自動再生の間隔
    speed: 1000, // スライダーの移動時間
    perPage: 3, // 表示するスライドの枚数
    focus  : "center", // アクティブなスライドを中央にする
    updateOnMove: true, // is-activeクラスを移動前に更新する
  }).mount();


