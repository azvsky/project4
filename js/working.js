$(document).ready(function() {
  
  //Переменные меню
  var openMenu = $('.index-logo__open');
  var closeMenu = $('.main-navigation__close');
  
  //Переменные гостиницы
  var openHotel = $('.guess__search'); 
  var formHotel = $('.motel-search');
  var closeHotel = $('.motel-search__close');
  var motelWrap = $('.motel-wrap');
  
  //Переменные для изменения положения
  var ftrTwo = $('.feature-two');
  var prmCan = $('.promo-canyon');
  
  //Переменная поле телефона
  var fieldTel = $('.recall__contact-tel');
  
  //Подмена картинки на странице "Фото и видео"
  var imgMobile = $('.photo-area__img--mobile');
  
        //РАСКРЫТИЕ МЕНЮ
  openMenu.on('click', function(event) {
    event.preventDefault();
    $(this).hide();
    $('.main-navigation').slideDown('fast');
    closeMenu.show();
  });
  
          //ЗАКРЫТИЕ МЕНЮ
  closeMenu.on('click', function(event) {
    event.preventDefault();
    $(this).hide();
    $('.main-navigation').slideUp('fast');
    openMenu.show();
  });
  
          //ПОИСК ГОСТИНИЦЫ
  
  //Функция для закрытия формы гостиницы
  function closForm() {
    formHotel.slideUp(1000);
    openHotel.fadeIn(2000);
    motelWrap.slideUp(1000);
  };
  
  openHotel.on('click', function(event) {
    $(this).hide();
    formHotel.fadeIn(1000);
    closeHotel.show();
    motelWrap.fadeIn(1000);
  });
  
  closeHotel.on('click', function(event) {
    $(this).hide();
    closForm();
  });
  
        //ЗАКРЫТИЕ POPUP ПО НАЖАТИЮ ESC
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (formHotel.css('display') === 'block' ) {
        closForm();
      }
    }
  });
  
  //Меняется положение элементов
  if($(window).width() < 768) {
    prmCan.css('float','none');
    ftrTwo.css('float','none');
  } else {
    prmCan.css('float','left');
    ftrTwo.css('float','right');
  }
  
  //Подмена картинок при загрузке 
  if($(window).width() > 1200) {
  imgMobile.css('display','block').attr({"src": "pic/pic-photo-desktop.png", width: 1200, height: 400}).addClass('photo-area__img--desktop').removeClass('photo-area__img--mobile photo-area__img--tablet');
} else if($(window).width() > 768 || $(window).width() < 1200) {
  imgMobile.css('display','block').attr({"src": "pic/pic-photo-tablet.png", width: 648, height: 400}).addClass('photo-area__img--tablet').removeClass('photo-area__img--mobile  photo-area__img--desktop'); }
  else if($(window).width() < 768) {
  imgMobile.css('display','block').attr({"src": "pic/pic-photo--mobile.png", width: 280, height: 280}).removeClass('photo-area__img--desktop photo-area__img--tablet');
  };
  
  //input телефона
  fieldTel.on('keypress', function(event) {
    if((event.charCode < 48 || event.charCode > 57) && (event.charCode != 45)) {
      return false;
    };
  });
  
                  //ЛАЙКИ
  var plm = $('.photo-area__like');
      plm.on('click',function() {
        $(this).toggleClass('photo-area__like-active');
        if($(this).hasClass('photo-area__like-active')) {
           $(this).text(parseInt($(this).text()) +1);
           } else {
            $(this).text(parseInt($(this).text()) -1);
           }
      })
});

//Положение картинок на странице "Фото и видео" при изменении окна
var imgMobile = $('.photo-area__img--mobile');

  $(window).resize(function() {
    if($(window).width() > 1200) {
      imgMobile.css('display','block').attr({"src": "pic/pic-photo-desktop.png", width: 1200, height: 400}).addClass('photo-area__img--desktop').removeClass('photo-area__img--mobile photo-area__img--tablet');
} else if($(window).width() > 768 || $(window).width() < 1200) {
  imgMobile.css('display','block').attr({"src": "pic/pic-photo-tablet.png", width: 648, height: 400}).addClass('photo-area__img--tablet').removeClass('photo-area__img--mobile photo-area__img--desktop');
}
  if($(window).width() < 768) {
  imgMobile.css('display','block').attr({"src": "pic/pic-page-photo1__mobile.png", width: 280, height: 280}).removeClass('photo-area__img--desktop photo-area__img--tablet').addClass('photo-area__img--mobile');
  }
});


//смена положений блоков при изменении окна
$(window).resize(function() {
  var ftrTwo = $('.feature-two');
  var prmCan = $('.promo-canyon');
  var qwet = $('.textfg');
  
  if($(window).width() < 768) {
    prmCan.css('float','none');
    ftrTwo.css('float','none');
  } else {
    prmCan.css('float','left');
    ftrTwo.css('float','right');
  }
});