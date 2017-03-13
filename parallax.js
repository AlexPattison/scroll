var ratio = 1.2;
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
var bg = document.getElementById('bg-img');
var wrapper = document.getElementById('wrapper');

function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = elemTop < window.innerHeight && elemBottom >= 0
  return isVisible;
}

window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop){
   // downscroll code
   adjustY(true);
  } else {
   // upscroll code
   adjustY(false);
  }
  lastScrollTop = st;
}, false);


function adjustY(scrollingDown) {
  var el = document.getElementById('wrapper');
  var wrapperTop = el.getBoundingClientRect().top;
  var imageOffset;
  var imageOffsetCalc = (-wrapperTop * ratio);

  if (!isScrolledIntoView(el)) {
    return;
  }

  if (imageOffsetCalc < -345) {
    imageOffset = -345;
  } else if (imageOffsetCalc > 0) {
    imageOffset = 0;
  } else {
    imageOffset = imageOffsetCalc;
  }

  bg.style.transform = 'translateY(' + imageOffset + 'px)';
}
