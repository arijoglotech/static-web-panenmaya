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

  // Smoothscroll plugin for some links & buttons
  function smoothScrollSection() {
    jQuery('a.logo').smoothScroll();
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

  jQuery(function () {
    ctaBox();
    smoothScrollSection();
    headerShrink();
  });

})(jQuery, window, document);
