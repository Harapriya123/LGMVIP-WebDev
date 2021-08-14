//life section and video section
let thumbnail = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnail.length; i++){

  thumbnail[i].addEventListener('mouseover', function(){
    //console.log(activeImages)

    document.getElementById('featured').src = this.src
  })
}
$(document).ready(function(){
  $('.thumb a').click(function(e){
    e.preventDefault();
    $('.imgbox img').attr("src", $(this).attr("href"));
  })
})

let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft -= 80
})

buttonRight.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft += 80
})

    // carousel 
    $('.team .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive:{
          0:{
              items: 1
          }, 
          600:{
              items: 2
          },
          1000:{
              items: 3
          }
      }
  });
