// Mobile menu toggle
document.querySelectorAll('.menu-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = document.getElementById(btn.getAttribute('aria-controls'));
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Carousels: arrow buttons scroll one "page" of slides
document.querySelectorAll('.carousel').forEach(function (carousel) {
  var track = carousel.querySelector('.carousel-track');
  function scroll(dir) {
    var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;
    var atStart = track.scrollLeft <= 5;
    if (dir > 0 && atEnd) track.scrollTo({ left: 0 });
    else if (dir < 0 && atStart) track.scrollTo({ left: track.scrollWidth });
    else track.scrollBy({ left: dir * track.clientWidth });
  }
  carousel.querySelector('.prev').addEventListener('click', function () { scroll(-1); });
  carousel.querySelector('.next').addEventListener('click', function () { scroll(1); });
});
