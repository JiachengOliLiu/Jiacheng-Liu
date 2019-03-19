console.log('Hello Arboretum');

AOS.init();

// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 200, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$("#intro_pics_container")
.on("click", function(){
$(".pic_0_a_0").addClass('intro_leafwave0 animated slow');
$(".pic_0_a_1").addClass('intro_leafwave1 animated slow');
})
.on("animationend", function(){
$(".pic_0_a_0").removeClass('intro_leafwave0 animated slow');
$(".pic_0_a_1").removeClass('intro_leafwave1 animated slow');
});

$(".pic_1_1")
.on("click", function(){
$(this).addClass('pulse animated');
})
.on("animationend", function(){
$(this).removeClass('pulse animated');
});

    $(".pic_2")
      .on("click", function(){
      $(this).addClass('leafwave animated');
    })
      .on("animationend", function(){
      $(this).removeClass('leafwave animated');
    });

    $("#event3_pics")
    .on("click", function(){
    $(".pic_3_0").addClass('fadeOut animated delay-2s faster');
    $(".pic_3_1").addClass('earth_impacted_appear animated delay-1s slow');
    $(".pic_3_2").addClass('earth_impacted_appear animated delay-1s slow');
    $(".pic_3_3").addClass('asteroid_move impact animated slow');
    })
    .on("animationend", function(){
    $(".pic_3_0").removeClass('fadeOut animated delay-3s faster');
    $(".pic_3_1").removeClass('earth_impacted_appear animated delay-1s slow pic_3_1_status1').addClass('pic_3_1_status2');
    $(".pic_3_2").removeClass('earth_impacted_appear animated delay-1s slow pic_3_2_status1').addClass('pic_3_2_status2');
    $(".pic_3_3").removeClass('asteroid_move impact animated slow pic_3_3_status1').addClass('pic_3_3_status2');
    });

$(".pic_4")
.on("click", function(){
$(".pic_4_container2").addClass('ease_in_out leaf_fade_out1 animated slow');
$(".pic_4_2").removeClass('pic_4_2_status2').addClass('pic_4_2_status1 ease_in_out leaf_fade_out2 animated slow');
})
.on("animationend", function(){
  $(".pic_4_container2").removeClass('ease_in_out leaf_fade_out1 animated slow');
  $(".pic_4_2").removeClass('ease_in_out leaf_fade_out2 animated slow pic_4_2_status1').addClass('pic_4_2_status2');
});

$("#event5_pics")
.on("click", function(){
$(this).addClass('bounce animated');
})
.on("animationend", function(){
$(this).removeClass('bounce animated');
});

$(".pic_6")
.on("click", function(){
$("#pic_6_1_container").addClass('ease_in_out small_leaf_fadeout_down1 animated slow');
$(".pic_6_1").addClass('ease_in_out small_leaf_fadeout_down2 animated slow');
$("#pic_6_2_container").addClass('ease_in_out small_leaf_fadeout_up1 animated slow');
$(".pic_6_2").addClass('ease_in_out small_leaf_fadeout_up2 animated slow');
})
.on("animationend", function(){
$("#pic_6_1_container").removeClass('ease_in_out small_leaf_fadeout_down1 animated slow');
$(".pic_6_1").removeClass('ease_in_out small_leaf_fadeout_down2 animated slow');
$("#pic_6_2_container").removeClass('ease_in_out small_leaf_fadeout_up1 animated slow');
$(".pic_6_2").removeClass('ease_in_out small_leaf_fadeout_up2 animated slow');
});

$(".pic_7_1")
.on("click", function(){
$(this).addClass('wobble animated');
})
.on("animationend", function(){
$(this).removeClass('wobble animated');
});

$(".pic_8_1")
.on("click", function(){
$(this).addClass('shake animated slow');
})
.on("animationend", function(){
$(this).removeClass('shake animated slow');
});

$(".pic_9")
.on("click", function(){
$(".pic_9_3").removeClass('pic_9_status2').addClass('pic_9_status1 fade_into_right animated slow');
$("#pic_9_2_container").addClass('ease_in_out street_leaf_fadeout1 animated slow');
$(".pic_9_2").removeClass('pic_9_status2').addClass('pic_9_status1 ease_in_out street_leaf_fadeout2 animated slow');
})
.on("animationend", function(){
$(".pic_9_3").removeClass('fade_into_right animated slow pic_9_status1').addClass('pic_9_status2');
$("#pic_9_2_container").removeClass('ease_in_out street_leaf_fadeout1 animated slow');
$(".pic_9_2").removeClass('ease_in_out street_leaf_fadeout2 animated slow pic_9_status1').addClass('pic_9_status2');
});

//current problem: all animations triggered at the same time, so event 11 animation might be in status2
//try if logic - if container opacity 0 or <1, remove status2 return status1

$(".Canberra_pics_container")
.on("click", function(){
$(".pic_10").addClass('wave_center animated slow');
$(".pic_11_1").addClass('capsule_open ease_in_out animated slow');
$(".pic_11_2").addClass('leaves_comeout animated delay-1s');
$(".pic_12_0").addClass('swing animated slow');
$(".pic_12_2").addClass('flash animated slow');
$(".pic_13_left").addClass('bonsai_wave0 animated slow');
$(".pic_13_right").addClass('bonsai_wave1 animated slow');
})
.on("animationend", function(){
$(".pic_10").removeClass('wave_center animated slow');
$(".pic_11_1").removeClass('capsule_open ease_in_out animated slow pic_11_1_status1').addClass('pic_11_1_status2');
$(".pic_11_2").removeClass('leaves_comeout animated delay-1s pic_11_2_status1');
$(".pic_12_0").removeClass('swing animated slow');
$(".pic_12_2").removeClass('flash animated slow');
$(".pic_13_left").removeClass('bonsai_wave0 animated slow');
$(".pic_13_right").removeClass('bonsai_wave1 animated slow');
});


$('.Canberra_point_1')
  .on("click", function(){
    $('.Canberra_point_1').attr('src','graphics/0-b/4.svg');
    $('.Canberra_point_2').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_point_3').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_point_4').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_event1').removeClass('Canberra_event_hidden').addClass('Canberra_event_visible');
    $('.Canberra_event2').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
    $('.Canberra_event3').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
    $('.Canberra_event4').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
});

$('.Canberra_point_2')
  .on("click", function(){
    $('.Canberra_point_2').attr('src','graphics/0-b/4.svg');
    $('.Canberra_point_1').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_point_3').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_point_4').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_event2').removeClass('Canberra_event_hidden').addClass('Canberra_event_visible');
    $('.Canberra_event1').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
    $('.Canberra_event3').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
    $('.Canberra_event4').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
});

$('.Canberra_point_3')
  .on("click", function(){
    $('.Canberra_point_3').attr('src','graphics/0-b/4.svg');
    $('.Canberra_point_2').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_point_1').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_point_4').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_event3').removeClass('Canberra_event_hidden').addClass('Canberra_event_visible');
    $('.Canberra_event1').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
    $('.Canberra_event2').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
    $('.Canberra_event4').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
});

$('.Canberra_point_4')
  .on("click", function(){
    $('.Canberra_point_4').attr('src','graphics/0-b/4.svg');
    $('.Canberra_point_2').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_point_3').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_point_1').attr('src','graphics/0-b/4_s.svg');
    $('.Canberra_event4').removeClass('Canberra_event_hidden').addClass('Canberra_event_visible');
    $('.Canberra_event1').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
    $('.Canberra_event2').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
    $('.Canberra_event3').removeClass('Canberra_event_visible').addClass('Canberra_event_hidden');
});
