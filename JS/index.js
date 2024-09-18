const colors = ['#ff1491', '#ff63b6', '#eae72d', '#cc24ff'];

document.addEventListener('mousemove', (e) => {
    const index = Math.floor((e.clientX / window.innerWidth) * (colors.length - 1));
    const nextIndex = (index + 1) % colors.length;

    document.querySelector('.line').style.background = `linear-gradient(135deg, ${colors[index]}, ${colors[nextIndex]})`;
});

  
/* 滑鼠 */

/* 星星動畫 */


/* 票券動畫 */


gsap.from('.tk_wrap',{
    //視窗滾動控制
    scrollTrigger: {
      trigger: '.tk_box',
      markers: false ,
      start: 'top center',
      end: 'top 20%',
  
      scrub: true, //動畫播放是否以視窗滾動播放
  
    },
    
    //動畫控制
    
    rotation: 45, //旋轉45度
    yPercent: '-310'
    // YPercent: '-200'
  })



  $('#others').mousemove(function (event) {
    $('#hover_img_other').show().css({
        'left': event.pageX + 10 + 'px',
        'top': event.pageY + 'px'
    });
}).mouseleave(function () {
    $('#hover_img_other').hide();
});

gsap.to('#pic_show', {
  x: -1000,
  duration: 10,
  repeat: -1,
  ease: 'none',
 })