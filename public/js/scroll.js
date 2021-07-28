//Scrip esconde o muestra btn_up
let btn_up = document.querySelector('.btn-up');
btn_up.addEventListener('click', scrollUp);

function scrollUp(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
    btn_up.style.transform = "scale(0)";
  }
}
window.onscroll = function(){
  var scroll = document.documentElement.scrollTop;
    if (scroll > 100){
      btn_up.style.transform = "scale(1)";
    }else if(scroll < 100){
      btn_up.style.transform = "scale(0)";
    }
  }