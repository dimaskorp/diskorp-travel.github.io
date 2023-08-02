var leftBtn = document.querySelector('#left');
var rightBtn = document.querySelector('#right');

leftBtn.addEventListener('click', slide);
rightBtn.addEventListener('click', slide);

function slide(e) {
  e.target.id === 'right' ? scroll(600) : scroll(-600);
}

function scroll(val) {
  document.querySelector('.scroll__ul').scrollBy({ 
    left: val,
    behavior: 'smooth' 
  });
}

var rewiewleftBtn1 = document.querySelector('#rewiew-left');
var rewiewrightBtn1 = document.querySelector('#rewiew-right');

rewiewleftBtn1.addEventListener('click', slider1);
rewiewrightBtn1.addEventListener('click', slider1);

function slider1(t1) {
  t1.target.id === 'rewiew-right' ? scrollr1(600) : scrollr1(-600);
}

function scrollr1(vad) {
  document.querySelector('.rewiew-scroll__ul').scrollBy({ 
    left: vad,
    behavior: 'smooth' 
  });
}


var rewiewleftBtn = document.querySelector('#packages-left');
var rewiewrightBtn = document.querySelector('#packages-right');

rewiewleftBtn.addEventListener('click', slider);
rewiewrightBtn.addEventListener('click', slider);

function slider(t) {
  t.target.id === 'packages-right' ? scrollr(600) : scrollr(-600);
}

function scrollr(vad) {
  document.querySelector('.packages__items').scrollBy({ 
    left: vad,
    behavior: 'smooth' 
  });
}

