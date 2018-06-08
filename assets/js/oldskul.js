$(document).ready(function () {

  // CTA background image
  $(".cta-box").backstretch("assets/img/brooke-cagle-609873-unsplash.jpg");

  // Cache selectors
  var lastId,
    mainNav = $("#main-nav"),
    mainNavHeight = mainNav.outerHeight() + 15,
    // All list items
    menuItems = mainNav.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + mainNavHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

  // Smoothscroll plugin for some links & buttons
  $('.main-nav a').smoothScroll();
  $('footer ul a').smoothScroll();
  $('a.logo').smoothScroll();
  $('.to-section').smoothScroll();

  // Header shrink on scroll
  $(document).on("scroll", function () {
    if
    ($(document).scrollTop() > 100) {
      $("header").addClass("shrink");
    }
    else {
      $("header").removeClass("shrink");
    }
  });

  // Owl carousel for team section
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    stagePadding: 15,
    margin: 30,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3,
        stagePadding: 10,
      },
      1024: {
        items: 7
      },
      1280: {
        items: 8
      }
    }
  })

});