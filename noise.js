

const clickPlay = () => {
  $('.instrument').on( 'click', 'button', function() {

    const clickNote = $(this).html();

    document.getElementById(`${clickNote}Audio`).play();

  });
}

const typePlay = () => {

  $('body').keydown(function(event) {
    const eventNote = String.fromCharCode(event.keyCode).toLowerCase();

    document.getElementById(`${eventNote}Audio`).play();

  });
}

$(document).ready( function() {

  clickPlay();
  typePlay();
});
