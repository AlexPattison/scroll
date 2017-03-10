var ratio = 3;


function adjustY() {

  var scrollY = window.scrollY;
  var imageOffset = (-scrollY * ratio) + scrollY;
  var img = document.getElementById('bg-img');
  var wrapper = document.getElementById('wrapper');
  if (shouldScroll(img, wrapper)) {
    img.style.transform = 'translateY(' + imageOffset + 'px)';
  }

}

function offset(el) {
  var rect = el.getBoundingClientRect();
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function shouldScroll(bg, wrapper) {
  var imgTop = offset(bg).top;
  var imgBottom = imgTop + bg.height;
  var wrapperTop = offset(wrapper).top;
  var wrapperBottom = wrapperTop + wrapper.offsetHeight;
  console.log('scrollY', window.scrollY);
  // console.log('imgTop', imgTop);
  // console.log('imgBottom', imgBottom);
  // console.log('wrapperTop', wrapperTop);
  // console.log('wrapperBottom', wrapperBottom);
  console.log('wrapperBottom - imgBottom', wrapperBottom - imgBottom);
  console.log('wrapperTop - imgTop', wrapperTop - imgTop);
  var withinBottom = wrapperBottom - imgBottom <= 100;
  var withinTop = wrapperTop - imgTop >= -100;
  return withinTop && withinBottom;
}

function shouldScrollDown(bg, wrapper) {

}

function shouldScrollUp(bg, wrapper) {

}
