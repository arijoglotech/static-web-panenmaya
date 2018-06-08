/*!
 * panenmaya
 * Template HTML Panenmaya
 * http://joglotech.com/
 * @author Junior Front-End
 * @version 1.0.0
 * Copyright 2018. Internal License licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  // CTA background image
  function ctaBox() {
    jQuery(".cta-box").backstretch("assets/img/brooke-cagle-609873-unsplash.jpg");
  }

  // Cache selectors
  function scrollSpyCustom() {
    var lastId,
      mainNav = jQuery("#main-nav"),
      mainNavHeight = mainNav.outerHeight() + 15,
      // All list items
      menuItems = mainNav.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function () {
        var item = jQuery(jQuery(this).attr("href"));
        if (item.length) { return item; }
      });

    // Bind to scroll
    jQuery(window).scroll(function () {
      // Get container scroll position
      var fromTop = jQuery(this).scrollTop() + mainNavHeight;
      // Get id of current scroll item
      var cur = scrollItems.map(function () {
        if (jQuery(this).offset().top < fromTop)
        {
          return this;
        }
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
  }

  // Smoothscroll plugin for some links & buttons
  function smoothScrollSection() {
    jQuery('.main-nav a').smoothScroll();
    jQuery('footer ul a').smoothScroll();
    jQuery('a.logo').smoothScroll();
    jQuery('.to-section').smoothScroll();
  }

  // Header shrink on scroll
  function headerShrink() {
    jQuery(document).on("scroll", function () {
      if
      (jQuery(document).scrollTop() > 100) {
        jQuery("header").addClass("shrink");
      }
      else {
        jQuery("header").removeClass("shrink");
      }
    });
  }

  // Owl carousel for team section
  function teamCarousel() {
    jQuery('.owl-carousel').owlCarousel({
      loop: true,
      dots: false,
      stagePadding: 15,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
          margin: 10,
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
    });
  }

  function eventPopup(){
    $('.event-container').each(function () {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 100,
        gallery: {
          enabled: true
        },
        callbacks: {
          beforeOpen: function () {
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
          }
        },
        closeOnContentClick: true,
        midClick: true
      });
    });
  }

  jQuery(function () {
    ctaBox();
    scrollSpyCustom();
    smoothScrollSection();
    headerShrink();
    teamCarousel();
    eventPopup();
  });

})(jQuery, window, document);
