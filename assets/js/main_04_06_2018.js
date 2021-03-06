function menuAnimation() {
  var menuIcon = $('.menu-bar'),
  middleBar = $('.bar-middle'),
  middleTopBar = $('.bar-top'),
  middleBottomBar = $('.bar-bottom'),
  leftBar = $('.box-line-left'),
  rightBar = $('.box-line-right'),
  menuOpen = $('.menuOpen'),
  menuClose = $('.menuClose'),
  menu = $('.toggle-menu'),
  menuLink = $('.menu-item'),
  logo = $('.brand-icon'),
  menuFooter = $('.nav .footer'),
  navigationLink = $('.toggle-menu .link');
  menuIcon.hover(
   function() {
     if ($ (this).hasClass('menuClose')){
       TweenLite.to($(middleTopBar), .5, {top:20});
       TweenLite.to($(middleBottomBar), .5, {top:40});
       TweenLite.to($(leftBar), .5, {height:42});
       TweenLite.to($(rightBar), .5, {height:42});
     }
   },
   function() {
     if ($ (this).hasClass('menuClose')){
       TweenLite.to($(middleTopBar), .5, {top:30});
       TweenLite.to($(middleBottomBar), .5, {top:30});
       TweenLite.to($(leftBar), .5, {height:0});
       TweenLite.to($(rightBar), .5, {height:0});
     }
   }
  );
  navigationLink.hover(
   function() {
     $(this).find('.top-line').css({width:'100%', transition:'all .5s'});
   },
   function() {
     $(this).find('.top-line').css({width:0, transition:'all .5s'});
     $('.link.active .top-line').css({width:'100%', transition:'all .5s'});
   }
  );
  menuIcon.on('click', function(e){
    if ($ (this).hasClass('menuClose')){
      TweenLite.set(this, {className: '-=menuClose'});
      TweenLite.set(this, {className: '+=menuOpen'});
      TweenLite.to($(leftBar), 0, {height:42});
      TweenLite.to($(rightBar), 0, {height:42});
      TweenLite.to($(middleTopBar), .5, {rotation:'-45deg',translate:'-8px, 7px', top:30});
      TweenLite.to($(middleBottomBar), .5, {rotation:'45deg',translate:'-6px, 7px', top:30});
      TweenLite.to($(middleBar), .2, {left:10,opacity:0});
      var width = $( window ).width();
      var myWidth = width / 2 - 475;
      var MylinkWidth = width / 2 + 40;
      var height = $( window ).height();
      var logoHeight = 108;
      var myHeight = height / 2 - logoHeight;
      $(menuLink).css({left:MylinkWidth});
      TweenLite.to($(menuLink), .7, {opacity:1,visibility: 'visible', left: MylinkWidth, delay: .3});
      TweenLite.to($(logo), .5, {top:myHeight, width:475, left:myWidth});
      if (window.matchMedia('(max-width: 991px)').matches) {
        var logoHeight = 70;
        var myHeight = height / 2 - logoHeight;
        var myWidth = width / 2 - 300;
        $(menuLink).css({left:MylinkWidth});
        TweenLite.to($(menuLink), .7, {opacity:1,visibility: 'visible', left: MylinkWidth, delay: .3});
        TweenLite.to($(logo), .5, {top:myHeight, width:280, left:myWidth});
      }
      if (window.matchMedia('(max-width: 767px)').matches) {
        $(menuLink).css({left:20});
        TweenLite.to($(menuLink), .7, {opacity:1,visibility: 'visible', left: 20 , delay: .3});
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
      TweenLite.to($(menuFooter), .5, {left:10});
    }
    else if ($ (this).hasClass('menuOpen')) {
      TweenLite.set(this, {className: '+=menuClose'});
      TweenLite.set(this, {className: '-=menuOpen'});
      $(rightBar).css("height","42");
      $(leftBar).css("height","42");
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg', top:20});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg', top:40});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      TweenLite.to($(logo), .5, {top:0, width:150, left:45});
      if (window.matchMedia('(max-width: 767px)').matches) {
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
      var width = $( window ).width() + 10;
      TweenLite.to($(menuFooter), .5, {left:width});

    }
  });
  logo.on('click', function(e){
    if ($ (menuIcon).hasClass('menuOpen')) {
      TweenLite.set(menuIcon, {className: '+=menuClose'});
      TweenLite.set(menuIcon, {className: '-=menuOpen'});
      TweenLite.to($(leftBar), .5, {height:0});
      TweenLite.to($(rightBar), .5, {height:0});
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      TweenLite.to($(logo), .5, {top:0, width:150, left:45});
      if (window.matchMedia('(max-width: 767px)').matches) {
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
    }
  });
  navigationLink.on('click', function(e){
    if ($ (menuIcon).hasClass('menuOpen')) {
      TweenLite.set(menuIcon, {className: '+=menuClose'});
      TweenLite.set(menuIcon, {className: '-=menuOpen'});
      TweenLite.to($(leftBar), .5, {height:0});
      TweenLite.to($(rightBar), .5, {height:0});
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      TweenLite.to($(logo), .7, {top:0, width:150, left:45});
      // $(logo).css({top:0,width:200,left:45,transition:'all .5s'});
      // TweenLite.to($(logo), .3, {top:0, width:200, left:45});
      if (window.matchMedia('(max-width: 767px)').matches) {
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
    }
  });

  $(window).on('popstate', function(event) {
    if ($ (menuIcon).hasClass('menuOpen')) {
      TweenLite.set(menuIcon, {className: '+=menuClose'});
      TweenLite.set(menuIcon, {className: '-=menuOpen'});
      TweenLite.to($(leftBar), .5, {height:0});
      TweenLite.to($(rightBar), .5, {height:0});
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      TweenLite.to($(logo), .5, {top:0, width:150, left:45});
      if (window.matchMedia('(max-width: 767px)').matches) {
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
    }
  });
}
function removeHref() {
  if (window.matchMedia('(min-width: 992px)').matches) {
    $('.contact-info .link').removeAttr('href');
    $('.h1 .link').removeAttr('href');
  }
}
function contactFormValidation() {
  $("form[name='contact-form']").validate({
    rules: {
      firstname: "required",
      message: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      name: "Please enter your Name",
      message: "Please enter your messgae",
      email: "Please enter a valid email address"
    },
    errorElement: 'p',

    submitHandler: function(form) {
      form.submit();
    }
  });
}
function careerFormValidation() {
  $("form[name='careerForm']").validate({
    rules: {
      Name: "required",
      Phone: "required",
      DOB: "required",
      // Gender: "required",
      Degree: "required",
      location: "required",
      Resume: "required",
      agree: "required",
      message: "required",
      // Gender:{ required:true },
      Position: {
                    required: true,
                    minlength: 1
            },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      Name: "Please enter your Name",
      Phone: "Please enter your Phone Number",
      DOB: "Please enter your Date of birth",
      // Gender: "Please Select Your Gender",
      Degree: "Please Select Your Qulification",
      Location: "Please enter your messgae",
      Resume: "Upload Your Resume",
      agree: "Please enter your messgae",
      CoverLetter: "Please enter your Answer",
      Email: "Please enter a valid email address",
      Position: "Please select at least one position "

    },
    errorElement: 'p',

    submitHandler: function(form) {
      form.submit();
    }
  });
}
function ChkBoxAnimation() {
  $(".c-checkbox").hover(
    function () {
      var checkboxEl = $(this);
      checkboxEl.children(".check_border").addClass('check_border_expand');
    },
    function () {
      var checkboxEl = $(this);
        checkboxEl.children(".check_border").addClass('check_border_collaps');
        checkboxEl.children(".check_border").removeClass('check_border_expand');
        setTimeout(function () {
          $('#terms .check_border').removeClass('check_border_collaps');
        }, 250);
    });
  $('.c-checkbox').focusin(
    function (){
      var checkboxEl = $(this);
      checkboxEl.children(".check_border").addClass("check_border_expand");
    // $('#Front-End-Developer .check_border').addClass('check_border_expand');
  });
}
function careerRadioBtn() {
  $('#Male').focusin(function () {
     $(this).attr('checked',true);
  });
  $('#Male').focusout(function () {
    $(this).attr('checked',false);
  });
  $('#Female').focusin(function () {
    $(this).attr('checked',true);
  });
  $('#Female').focusout(function () {
    $(this).attr('checked',false);
  });
}
function dropDownBox() {

  	var defaultselectbox = $('#cusSelectbox');
  	var numOfOptions = $('#cusSelectbox').children('option').length;

  	// hide select tag
  	defaultselectbox.addClass('s-hidden');

  	// wrapping default selectbox into custom select block
  	defaultselectbox.wrap('<div class="cusSelBlock"></div>');

  	// creating custom select div
  	defaultselectbox.after('<div class="selectLabel"></div>');

  	// getting default select box selected value
  	$('.selectLabel').text(defaultselectbox.children('option').eq(0).text());

  	// appending options to custom un-ordered list tag
  	var cusList = $('<ul/>', { 'class': 'options'} ).insertAfter($('.selectLabel'));

  	// generating custom list items
  	for(var i=0; i< numOfOptions; i++) {
  		$('<li/>', {
  		text: defaultselectbox.children('option').eq(i).text(),
  		rel: defaultselectbox.children('option').eq(i).val()
  		}).appendTo(cusList);
  	}
    $('.options li').first().addClass('active');

  	// open-list and close-list items functions
  	function openList() {

  		for(var i=0; i< numOfOptions; i++) {
  			$('.options').children('li').eq(i).attr('tabindex', i).css(
  				'transform', 'translateY('+(i*100+100)+'%)').css(
  				'transition-delay', i*30+'ms');
  		}
      // $('.option').children('li').first().addClass('select');
  	}
  	function closeList() {
  		for(var i=0; i< numOfOptions; i++) {
  			$('.options').children('li').eq(i).css('transform', 'translateY('+i*0+'px)').css('transition-delay', i*0+'ms');
  		}
  		$('.options').children('li').eq(1).css('transform', 'translateY('+0+'px)');
  		$('.options').children('li').eq(2).css('transform', 'translateY('+0+'px)');
  	}
  	// click event functions
  	$('.selectLabel').click(function () {
      $('.options li').find('.active').focus();
  		$(this).toggleClass('active');
  		if( $(this).hasClass('active') ) {
  			openList();
  			focusItems();
        getBudget();
  		}
  		else {
  			closeList();
  		}
  	});
    $('.options li').focusout( function(){
  		if( $('.selectLabel').hasClass('active') ) {
        closeList();
        $('.selectLabel').removeClass('active');
  		}
    });
  	$(".options li").on('keypress click', function(e) {
  		e.preventDefault();
  		$('.options li').siblings().removeClass();
  		closeList();
  		$('.selectLabel').removeClass('active');
  		$('.selectLabel').text($(this).text());
  		defaultselectbox.val($(this).text());
  		$('.selected-item p span').text($('.selectLabel').text());
  	});
    function getBudget() {
      $('.options').on('click', 'li', function(){
      $this = $(this);
  		$this.addClass('focus');
      $('.focus').focus();
      $('.option li').removeClass('select');
      });
    }
  function focusItems() {
  	$('.options').on('focus', 'li', function() {
  		$this = $(this);
  		$this.addClass('active').siblings().removeClass();
  	}).on('keydown', 'li', function(e) {
  		$this = $(this);
  		if (e.keyCode == 40) {
  			$this.next().focus();
  			return false;
  		} else if (e.keyCode == 38) {
  			$this.prev().focus();
  			return false;
  		}
  	});
    // }).find('li').first().addClass('select').focus();
  }
  window.onclick = function(event) {
    if (!event.target.matches('.selectLabel')) {
      if( $('.selectLabel').hasClass('active') ) {
        closeList();
        $('.selectLabel').removeClass('active');
      }
    }
  }
}
function fileUpload() {
  var inputs = document.querySelectorAll( '.inputfile' );
  Array.prototype.forEach.call( inputs, function( input )
  {
  	var label	 = input.nextElementSibling,
  		labelVal = label.innerHTML;

  	input.addEventListener( 'change', function( e )
  	{
  		var fileName = '';
  		if( this.files && this.files.length > 1 )
  			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
  		else
  			fileName = e.target.value.split( '\\' ).pop();

  		if( fileName )
  			label.querySelector( '.fileName' ).innerHTML = fileName;
  		else
  			label.innerHTML = labelVal;
  	});
  });
}
function porbandarPage() {

    if ((location.pathname == '/porbandar/')){
      var delay = 2000;
      setTimeout(function(){ window.location = "https://goo.gl/forms/SLhqIdfsny4Q0CKD2"; }, delay);
      };
      // console.log(location.pathname);



    }
function formSubmit() {
  /* Modify data before form submit */
  $(".btn-send").click(function (e) {
    // e.preventDefault();
    $("#replyto").val( $("#Email").val() );
    $("#subject").val( $("#Name").val() );

    $("#career-form").submit();
  });
}
function InputAnimation() {
  'use strict';

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }

  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else {
    // browser global
    window.classie = classie;
  }

  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }
  [].slice.call( document.querySelectorAll( 'textarea.input__field' ) ).forEach( function( textareaEl ) {
    if( textareaEl.value.trim() !== '' ) {
      classie.add( textareaEl.parentNode, 'input--filled' );
    }
    textareaEl.addEventListener( 'focus', onInputFocus );
    textareaEl.addEventListener( 'blur', onInputBlur );
  });

  [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    // var selectEl = document.querySelectorAll( 'textarea');
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }
    // if( selectEl.value.trim() !== '' ) {
    // 	classie.add( inputEl.parentNode, 'input--filled' );
    // }


    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
}
function ChangeNavColor() {
  var sections = $('.footer')
      , nav = $('.header')
      , nav_height = 70;
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('.brand-icon').css({'background':'#303030', 'transition':'all .5s'});
        nav.find('svg').css({'fill':'#fff', 'transition':'all .5s'});
        nav.find('.box-line-top').css({'background':'#fff', 'transition':'all .5s'});
        nav.find('.box-line-bottom').css({'background':'#fff', 'transition':'all .5s'});
        nav.find('.box-line-left').css({'background':'#fff', 'transition':'all .5s'});
        nav.find('.box-line-right').css({'background':'#fff', 'transition':'all .5s'});
        nav.find('.bar-top').css({'background':'#fff', 'transition':'all .5s'});
        nav.find('.bar-middle').css({'background':'#fff', 'transition':'all .5s'});
        nav.find('.bar-bottom').css({'background':'#fff', 'transition':'all .5s'});
        nav.find('.menu-bar').css({'background':'#303030', 'transition':'all .5s'});
      }
      else {
        $('.brand-icon').css('background','#fff');
        $('svg').css({'fill':'#000', 'transition':'all .5s'});
        $('.menu-bar').css('background','#fff');
        nav.find('.box-line-top').css({'background':'#000', 'transition':'all .5s'});
        nav.find('.box-line-bottom').css({'background':'#000', 'transition':'all .5s'});
        nav.find('.box-line-left').css({'background':'#000', 'transition':'all .5s'});
        nav.find('.box-line-right').css({'background':'#000', 'transition':'all .5s'});
        nav.find('.bar-top').css({'background':'#000', 'transition':'all .5s'});
        nav.find('.bar-middle').css({'background':'#000', 'transition':'all .5s'});
        nav.find('.bar-bottom').css({'background':'#000', 'transition':'all .5s'});
      }
      // if ($('.menu-bar').click()) {
      //   if (cur_pos >= top && cur_pos <= bottom) {
      //     $('.brand-icon').css({'background':'#303030', 'transition':'all .2s'});
      //     $('svg').css({'fill':'#fff', 'transition':'all .2s'});
      //     $('.box-line-top').css({'background':'#fff', 'transition':'all .2s'});
      //     $('.box-line-bottom').css({'background':'#fff', 'transition':'all .2s'});
      //     $('.box-line-left').css({'background':'#fff', 'transition':'all .2s'});
      //     $('.box-line-right').css({'background':'#fff', 'transition':'all .2s'});
      //     $('.bar-middle').css({'background':'#fff', 'transition':'all .2s'});
      //     $('.bar-top').css({'background':'#fff', 'transition':'all .2s'});
      //     $('.bar-bottom').css({'background':'#fff', 'transition':'all .2s'});
      //   }
      //   else {
      //     $('.brand-icon').css({'background':'#fff', 'transition':'all 1s'});
      //     $('svg').css({'fill':'#000', 'transition':'all 1s'});
      //     $('.box-line-top').css({'background':'#000', 'transition':'all .2s'});
      //     $('.box-line-bottom').css({'background':'#000', 'transition':'all .2s'});
      //     $('.box-line-left').css({'background':'#000', 'transition':'all .2s'});
      //     $('.box-line-right').css({'background':'#000', 'transition':'all .2s'});
      //     $('.bar-middle').css({'background':'#000', 'transition':'all .2s'});
      //     $('.bar-top').css({'background':'#000', 'transition':'all .2s'});
      //     $('.bar-bottom').css({'background':'#000', 'transition':'all .2s'});
      //   }
      // }
    });
  });
}
function HomePageFooter() {
  $(".copy_right").css({'position':'absolute', 'background':'#fff', 'color':'#000'});
  $(".copy_right hr").css('display','none');
  $(".copy_right .social .social_link .items i").css('color','#000');
  $(".copy_right .info_link .navigation_link .items a").css('color','#000');
  $(".copy_right .info_link .navigation_link .items .box").css('background','#000');
  $(".copy_right .right p").css('color','#000');
}
function HomePageAnimation() {
  $(".tag-line__hover.About").css({height: "25px", color: "#fff"});
  $(".tag-line__hover.About span").css({opacity: "1"});
  setTimeout(function () {
    $(".tag-line__hover.About").css({height: "8px"});
    $(".tag-line__hover.About span").css({opacity: "0"});
  }, 700);
  setTimeout(function () {
    $(".tag-line__hover.Skills").css({height: "25px", color: "#fff"});
    $(".tag-line__hover.Skills span").css({opacity: "1"});

    setTimeout(function () {
      $(".tag-line__hover.Skills").css({height: "8px"});
      $(".tag-line__hover.Skills span").css({opacity: "0"});

    }, 700);
  }, 950);
  setTimeout(function () {
    $(".tag-line__hover.Process").css({height: "25px", color: "#fff"});
    $(".tag-line__hover.Process span").css({opacity: "1"});

    setTimeout(function () {
      $(".tag-line__hover.Process").css({height: "8px"});
      $(".tag-line__hover.Process span").css({opacity: "0"});

    }, 700);
  }, 2100);
  setTimeout(function () {
    $(".tag-line__hover.Portfolio").css({height: "25px", color: "#fff"});
    $(".tag-line__hover.Portfolio span").css({opacity: "1"});

    setTimeout(function () {
      $(".tag-line__hover.Portfolio").css({height: "8px"});
      $(".tag-line__hover.Portfolio span").css({opacity: "0"});

    }, 700);
  }, 3000);

  $(".tag-line__link").hover(function () {
    $(this).find(".tag-line__hover").css({height: "25px", color: "#fff"});
    $(this).find(".tag-line__hover span").css({opacity: "1"});

  },function () {
    $(this).find(".tag-line__hover").css({height: "8px", color: "#fff"});
    $(this).find(".tag-line__hover span").css({opacity: "0"});
  });
  // var mq = window.matchMedia('@media only screen and (max-width: 767px)');
  var mq = window.matchMedia("(max-width: 700px)");
  if(mq.matches) {
    $(".tag-line__hover.About").css({height: "4px", color: "#fff"});
    $(".tag-line__hover.Skills span").css({opacity: "0"});
    setTimeout(function () {
      $(".tag-line__hover.About").css({height: "4px"});
      $(".tag-line__hover.Skills span").css({opacity: "0"});

    }, 700);
    setTimeout(function () {
      $(".tag-line__hover.Skills").css({height: "4px", color: "#fff"});
      $(".tag-line__hover.Skills span").css({opacity: "0"});

      setTimeout(function () {
        $(".tag-line__hover.Skills").css({height: "4px"});
        $(".tag-line__hover.Skills span").css({opacity: "0"});

      }, 700);
    }, 950);
    setTimeout(function () {
      $(".tag-line__hover.Process").css({height: "4px", color: "#fff"});
      $(".tag-line__hover.Process span").css({opacity: "0"});

      setTimeout(function () {
        $(".tag-line__hover.Process").css({height: "4px"});
        $(".tag-line__hover.Process span").css({opacity: "0"});

      }, 700);
    }, 2100);
    setTimeout(function () {
      $(".tag-line__hover.Portfolio").css({height: "4px", color: "#fff"});
      $(".tag-line__hover.Portfolio span").css({opacity: "0"});

      setTimeout(function () {
        $(".tag-line__hover.Portfolio").css({height: "4px"});
        $(".tag-line__hover.Portfolio span").css({opacity: "0"});

      }, 700);
    }, 3000);
    $(".tag-line__link").hover(function () {
      $(this).find(".tag-line__hover").css({height: "4px", color: "#fff"});
      $(this).find(".tag-line__hover span").css({opacity: "0"});

    },function () {
      $(this).find(".tag-line__hover").css({height: "4px", color: "#fff"});
      $(this).find(".tag-line__hover span").css({opacity: "0"});
    });
  }
}
function MyCarousel() {
  $(".client_comments").slick({
    cssEase: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    dots: true,
    dotsClass: 'slick-dots',
    arrows:false,
    centerMode: true,
    centerPadding: "20%",
    slidesToShow: 1,
    autoplay: true,
    responsive : [
      {
        breakpoint:768,
        settings:{
        centerMode: true,
        centerPadding: "5%",
        speed:1000
      }
      }
    ]
  });
  $(".client_comments").on('afterChange', function(event, slick, direction){
    $(".client_comments").slick('slickNext').find('.slick-dots li button').css({"background":"#fff", "color":"#fff"});
    $(".client_comments").slick('slickNext').find('.slick-dots .slick-active button').css({"background":"#000", "color":"#000"});
  });
}
function GeneralPage() {
  menuAnimation();
  HomePageAnimation();
  ChangeNavColor();
  removeHref();
}
function HomePage() {
  HomePageFooter();
  HomePageAnimation();
}
function SkillPage() {
  $(".copy_right hr").css('display','block');
  InputAnimation();
  contactFormValidation();
  formSubmit();
}
function ContactPage() {
  $(".copy_right hr").css('display','none');
  contactFormValidation();
  InputAnimation();
}
function HireUsPage() {
  $(".copy_right hr").css('display','none');
  ChkBoxAnimation();
  dropDownBox();
  InputAnimation();
  formSubmit();
}
function CareerPage() {
  $(".copy_right hr").css('display','none');
  fileUpload();
  ChkBoxAnimation();
  InputAnimation();
  dropDownBox();
  careerFormValidation();
  formSubmit();
}
function AboutPage() {
  MyCarousel();
  InputAnimation();
}
function PortfolioPage() {
  InputAnimation();
}
function ProcessPage() {
  InputAnimation();
}
function mainJS() {
  ChangeNavColor();
  if ($ ('.toggle-menu .link').hasClass('active')) {
    $('.link .top-line').css("width","0");
    $('.link.active .top-line').css("width","100%");
  }
  $('.111brand-icon').on('click', function(e) {
    $('.link .top-line').css("width","0");
  });

  $(function() {
   $('a[href^="mailto:"]').each(function() {
    this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
   });
  });
  $(window).scrollTop(0);
  formSubmit();
  if (location.pathname == '/porbandar/'){
    porbandarPage();
  }
  else if (location.pathname == '/'){
    HomePage();
  }
  else if (location.pathname == '/career/'){
    CareerPage();
  }
  else if (location.pathname == '/career/sales/'){
    CareerPage();
  }
  else if (location.pathname == '/portfolio/'){
    PortfolioPage();
  }
  else if (location.pathname == '/process/'){
    ProcessPage();
  }
  else if (location.pathname == '/contact-us/'){
    ContactPage();
  }
  else if (location.pathname == '/hire-us/'){
    HireUsPage();
  }
  else if (location.pathname == '/skills/'){
    SkillPage();
  }
  else if (location.pathname == '/about/'){
    AboutPage();
  }
  else if (location.pathname == '/career/thankyou/'){
    HomePageFooter();
  }
  else if (location.pathname == '/contact-us/thankyou/'){
    HomePageFooter();
  }
  else if (location.pathname == '/hire-us/thankyou/'){
    HomePageFooter();
  }
}
function currentUrl() {
  if ((location.pathname) !== ""){
    $('.barba-container a[href="' + location.pathname + '"]').click(function (e) {
         e.preventDefault();
    });
    $('.toggle-menu a[href="' + location.pathname + '"]').click(function (e) {
         e.preventDefault();
    });
    $('.brand-icon a[href="' + location.pathname + '"]').click(function (e) {
         e.preventDefault();
    });
    $('.toggle-menu a').removeClass('active');
    $('.toggle-menu a[href="' + location.pathname + '"]').addClass('active');
  }
}
$('document').ready(function(){
  $(window).scrollTop(0);

  var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */
    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */
     $('.page-loader').addClass('page-loader-start');
    return $(this.oldContainer).animate().promise();
  },

  fadeIn: function() {

    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(".fatah-line").attr("width", "0");
    $(".fatah-line").css("transition", "all 0s");
    setTimeout(function () {

      $(".fatah-line").attr("width", "677.609");
      $(".fatah-line").css("transition", "all .5s");
      $(this.oldContainer).hide();
    }, 500);

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    setTimeout(function () {
      $el.animate({ opacity: 1 }, 0, function() {

        /**
        * Do not forget to call .done() as soon your transition is finished!
        * .done() will automatically remove from the DOM the old Container
        */
        currentUrl();
        mainJS();
        _this.done();
      });
    }, 700);
    }
  });
  /**
   * Next step, you have to tell Barba to use the new Transition
   */
  currentUrl();
  mainJS();
  Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
   return FadeTransition;
  };
  Barba.Dispatcher.on('transitionCompleted', function() {
    var currentYear = (new Date).getFullYear();
    $("#year").text( (new Date).getFullYear() );
  });
  Barba.Prefetch.init();
  Barba.Pjax.start();
  Barba.Dispatcher.on('initStateChange', function() {
  if (typeof ga === 'function') {
      ga('send', 'pageview', location.pathname);
    }
  });
  GeneralPage();
});
