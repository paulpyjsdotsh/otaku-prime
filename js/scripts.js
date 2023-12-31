$(function () {
  // init feather icons
  feather.replace();

  // init tooltip & popovers
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  //page scroll
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 20,
        },
        1000
      );
    event.preventDefault();
  });

  // Slick sliders
  $(".slick-about").html(
    Array(8)
      .fill(null)
      .map(
        (_, i) =>
          `
          <img
            src="img/slider-${i + 1}.jpeg"
            class="img-fluid rounded d-block mx-auto"
            style="aspect-ratio: 1/1; object-fit: cover"
            alt="Slider image ${i + 1}"
          />
        `
      )
      .join("")
  );
  $(".slick-about").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  });

  //toggle scroll menu
  var scrollTop = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //adjust menu background
    if (scroll > 80) {
      if (scroll > scrollTop) {
        $(".smart-scroll").addClass("scrolling").removeClass("up");
      } else {
        $(".smart-scroll").addClass("up");
      }
    } else {
      // remove if scroll = scrollTop
      $(".smart-scroll").removeClass("scrolling").removeClass("up");
    }

    scrollTop = scroll;

    // adjust scroll to top
    if (scroll >= 600) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
    return false;
  });

  // scroll top top
  $(".scroll-top").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  if (lozad) {
    const observer = lozad(document.querySelectorAll("img")); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
    observer.observe({
      rootMargin: "10px 0px", // syntax similar to that of CSS Margin
      threshold: 0.1, // ratio of element convergence
      enableAutoReload: true, // it will reload the new image when validating attributes changes
    });
  }

  // Masonry cosplay
  $(".cosplay").masonry({
    // options...
    itemSelector: ".cosplay-item",
    columnWidth: ".cosplay-sizer",
    percentPosition: true,
  });
});
