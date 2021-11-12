const target = document.querySelectorAll('[data-anim]');
const animationClass = 'animate';

function animScroll() {
  const topoJanela = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach((elem)=>{
    if((topoJanela) > elem.offsetTop){
      elem.classList.add(animationClass);
    }else{
      elem.classList.remove(animationClass);
    }
  });
};

animScroll();

if(target.length){
  window.addEventListener('scroll', () => {
    animScroll();
  });
}

