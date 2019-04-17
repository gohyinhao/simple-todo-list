$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (event) {
  $(this).parent().fadeOut(function () {
    $(this).remove();
  });
  event.stopPropagation();
});

$('input[type="text"]').on('keypress', function (event) {
  if (event.which === 13) {
    // retrieve new task name
    var taskName = $(this).val();

    // reset input to be empty
    $(this).val('');

    // append new task to ul
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + taskName + '</li>');
  }
});

$('.fa-plus').on('click', function () {
  $('input[type="text"]').fadeToggle();
});