$(document).ready(function(){
    $('.btnanime1').click(function(){
      $('.img1').css("marginLeft","0");
    });
    $('.btnanime2').click(function(){
      $('.img1').css("marginLeft","-20%");
    });
    $('.btnanime3').click(function(){
      $('.img1').css("marginLeft","-40%");
    });
    $('.btnanime4').click(function(){
      $('.img1').css("marginLeft","-60%");
    });
    $('.btnanime5').click(function(){
      $('.img1').css("marginLeft","-80%");
    });
    $('a').click(function(){
      $(this).addClass('active').siblings()
              .removeClass('active');
    })
  });