(function() {

  $(document).ready(function() {

    $("button").click(function() {
      $.ajax({
        type: 'POST',
        url: '/api/' + $('#param').val(),
      }).then(function(result) {
        $('#result').fadeIn(500);
        $('#unix').text(result.unix);
        $('#natural').text(result.natural);
      });
    });

    $('#param').focus(function() {
      $('#result').fadeOut(500);
    });

  });

})();