(function($) { 
"use strict";

$('[data-toggle="offcanvas"]').on('click', function () {
    $('#navbarSupportedContent').toggleClass('show');
    });

    $('[data-toggle="wealthnav"]').on('click', function () {
      $('#wealthTrektopnav').toggleClass('show');
      });

    
     
 

/*Testimonials*/
 $(document).ready(function() { 
       $(".testimonials_list").owlCarousel({          
        loop:true,
      margin:0,
      nav:false,
      autoplay:false,
autoplayTimeout:3000,
      responsiveClass:true,
      responsive:{
       0:{
        items:1,
        nav:true
       },
       700:{
        items:1,
        nav:true
       },
       1170:{
        items:1,
        nav:true,
        loop:true
       }
      }
       
       
       }); 
     });
 
// 3 LightBox / Fancybox
if ($('.lightbox-image').length) {
      $('.lightbox-image').fancybox({
          openEffect: 'elastic',
          closeEffect: 'elastic',
          clickContent    : false,
          helpers: {
              media: {}
          }
      });
  }
  
 
//Accordion Box
if($('.accordion-box').length){
      $(".accordion-box").on('click', '.acc-btn', function() {
            
            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');
            
            if($(this).hasClass('active')!==true){
                  $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }
            
            if ($(this).next('.acc-content').is(':visible')){
                  return false;
            }else{
                  $(this).addClass('active');
                  $(outerBox).children('.accordion').removeClass('active-block');
                  $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                  target.addClass('active-block');
                  $(this).next('.acc-content').slideDown(300);	
            }
      });	
}



      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      });
 
     
            


})(jQuery);







//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}







