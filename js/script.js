$(document).ready(function () {
  $("#loader").show();

  // Hide loader once everything is loaded
  $(window).on("load", function () {
    setTimeout(function () {
      $("#loader").fadeOut("1000", function () {
        $("#body-wrapper").fadeIn("1000");
      });
    }, 1000);
  });

  AOS.init();
  // Dropdown in mobile view
  $(".sub-btn").click(function () {
    var $subMenu = $(this).next(".sub-menu");
    var $dropdownIcon = $(this).find(".dropdown");

    if ($subMenu.is(":visible")) {
      $subMenu.slideUp();
      $dropdownIcon.removeClass("rotate");
    } else {
      $(".sub-menu").slideUp();
      $(".dropdown").removeClass("rotate");
      $subMenu.slideDown();
      $dropdownIcon.addClass("rotate");
    }
  });

  $(".toggle-menu").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });

  // Back button
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".back").fadeIn("");
    } else {
      $(".back").fadeOut("");
    }
  });

  $(".back").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  });

  // Sticky header
  $(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
      $(".main-navigation").addClass("fixed-header");
    } else {
      $(".main-navigation").removeClass("fixed-header");
    }
  });

  // Theme changer
  $(".theme-btn").click(function () {
    $(".theme-box").fadeToggle();
  });

  $(".theme-box a").on("click", function () {
    var path = $(this).data("path");
    $("#case-swithcer").attr("href", path);
  });

  // Owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Swiper slider
  var swiper = new Swiper(".mySwiper,.blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // Pointer js
  var $cursor = $(".cursor");
  var $cursorinner = $(".cursor2");
  var $a = $("a");

  $(document).on("mousemove", function (e) {
    $cursor.css(
      "transform",
      `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    );
  });

  $(document).on("mousemove", function (e) {
    $cursorinner.css({
      left: e.clientX + "px",
      top: e.clientY + "px",
    });
  });

  $(document).on("mousedown", function () {
    $cursor.addClass("click");
    $cursorinner.addClass("cursorinnerhover");
  });

  $(document).on("mouseup", function () {
    $cursor.removeClass("click");
    $cursorinner.removeClass("cursorinnerhover");
  });

  $a.on("mouseover", function () {
    $cursor.addClass("hover");
  });

  $a.on("mouseleave", function () {
    $cursor.removeClass("hover");
  });

  // Counter
  var counted = 0;
  $(window).scroll(function () {
    var oTop = $(".counter1").offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      counted = 1;
    }
  });
});
