import $ from 'jquery';

$(document).ready(function() {
  $('#header-logo a').click(function() {
    event.preventDefault();
    var mainHeaderHeight = $('#main-header').height();
    $('html, body').animate(
      {
        scrollTop: $('#betease-home').offset().top - mainHeaderHeight
      },
      'slow'
    );
    return false;
  });
});
