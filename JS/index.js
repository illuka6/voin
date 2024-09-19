const colors = ['#ff1491', '#ff63b6', '#eae72d', '#cc24ff'];

document.addEventListener('mousemove', (e) => {
  const index = Math.floor((e.clientX / window.innerWidth) * (colors.length - 1));
  const nextIndex = (index + 1) % colors.length;

  document.querySelector('.line').style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[nextIndex]})`;
});


/* 滑鼠 */

/* 票券動畫 */


gsap.from('.tk_wrap', {
  //視窗滾動控制
  scrollTrigger: {
    trigger: '.tk_box',
    markers: false,
    start: 'top center',
    end: 'top 20%',

    scrub: true, //動畫播放是否以視窗滾動播放

  },

  //動畫控制   
  rotation: 45, //旋轉45度
  yPercent: '-310'
  // YPercent: '-200'
})

gsap.to('#show_box', {
  x: -2000,
  duration: 20,
  repeat: -1,
  ease: 'none',
})

/* 星星轉動特效 */
// const star = document.querySelector('.star');

// // 設置旋轉和不斷放大縮小的動畫
// function animateStar() {
//     gsap.to(star, {
//         rotation: 360,
//         duration: 20,
//         ease: "linear",
//         repeat: -1, // 無限循環
//         yoyo: false, // 不反向執行
        
//     });
// }

// // 開始動畫
// animateStar();

const star = document.querySelector('.star');

// 設置旋轉和規律的放大縮小動畫
function animateStar() {
    // 旋轉動畫
    gsap.to(star, {
        rotation: 360,
        duration: 20, // 旋轉一圈所需時間
        ease: "linear",
        repeat: -1 // 無限循環
    });

    // 放大縮小動畫
    gsap.to(star, {
        scale: 1.45, // 放大到 1.5 倍
        duration: 2, // 放大所需時間
        ease: "linear",
        yoyo: true, // 完成後反向執行
        repeat: -1 // 無限重複
    });
}

// 開始動畫
animateStar();
