// Mobile menu toggle
document.querySelectorAll('.menu-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = document.getElementById(btn.getAttribute('aria-controls'));
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Carousels: arrows and dots move one "page" of slides at a time
document.querySelectorAll('.carousel').forEach(function (carousel) {
  var track = carousel.querySelector('.carousel-track');
  var slides = track.querySelectorAll('.carousel-slide');
  var dots = document.createElement('div');
  dots.className = 'carousel-dots';
  carousel.after(dots);
  var perPage = 1, pageCount = 1;

  function step() {
    return slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth;
  }
  function currentPage() {
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) return pageCount - 1;
    return Math.round(track.scrollLeft / step() / perPage);
  }
  function goTo(page) {
    if (page < 0) page = pageCount - 1;
    if (page >= pageCount) page = 0;
    track.scrollTo({ left: page * perPage * step() });
  }
  function update() {
    var active = currentPage();
    dots.querySelectorAll('button').forEach(function (dot, i) {
      dot.classList.toggle('active', i === active);
      dot.setAttribute('aria-current', i === active);
    });
  }
  function build() {
    perPage = Math.max(1, Math.round(track.clientWidth / step()));
    pageCount = Math.ceil(slides.length / perPage);
    dots.innerHTML = '';
    for (var i = 0; i < pageCount; i++) {
      var dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Go to page ' + (i + 1));
      dot.addEventListener('click', goTo.bind(null, i));
      dots.appendChild(dot);
    }
    dots.hidden = pageCount < 2;
    update();
  }

  carousel.querySelector('.prev').addEventListener('click', function () { goTo(currentPage() - 1); });
  carousel.querySelector('.next').addEventListener('click', function () { goTo(currentPage() + 1); });
  track.addEventListener('scroll', function () { window.requestAnimationFrame(update); }, { passive: true });
  window.addEventListener('resize', build);
  build();
});
