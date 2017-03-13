window.onload = function() {
  var ratio = .3;
  var bg = document.getElementById('bg-img');
  var wrapper = document.getElementById('wrapper');
  var maxOffset = bg.getBoundingClientRect().height - wrapper.clientHeight;

  function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0
    return isVisible;
  }

  window.addEventListener("scroll", function(){
    adjustY();
  }, false);


  function adjustY() {
    var el = document.getElementById('wrapper');
    var wrapperBottom = el.getBoundingClientRect().bottom;
    var imageOffset;
    var imageOffsetCalc = (-wrapperBottom * ratio);

    if (!isScrolledIntoView(el)) {
      return;
    }

    if (imageOffsetCalc < -maxOffset) {
      imageOffset = -maxOffset;
    } else if (imageOffsetCalc > 0) {
      imageOffset = 0;
    } else {
      imageOffset = imageOffsetCalc;
    }

    bg.style.transform = 'translateY(' + imageOffset + 'px)';
  }
}
