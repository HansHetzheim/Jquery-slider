


var $slider = $('#slider');
var $slides = $slider.find('.slides')
var $slide  = $slides.find('.slide')
var currentSlide = 1;


  setInterval(function() {
    $slides.animate({'margin-left': '-=720px'}, 1000, function() {
        currentSlide++;
        if (currentSlide === $slide.length) {
          currentSlide = 1;
          $slides.css('margin-left', 0);
        }
      });
  }, 3000);


$('.left').click(function(){
  $slides.css('margin-left', '+=720px')
  currentSlide--;
});

$('.right').click(function(){
  $slides.css('margin-left', '-=720px')
  currentSlide++;
  if (currentSlide === $slide.length) {
    currentSlide = 1;
    $slides.css('margin-left', 0);
  }
});
