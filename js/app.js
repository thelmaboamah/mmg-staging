$('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
});

$('.dropdown-toggle').dropdown();

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});