$(document).ready(function() {

  var theID; //holds the id of the menu item that was clicked 

  $('.close').click(function() {
    $(this).hide()
  });
  $('.itemDetail').hide();


  /* This gets the ID of the button that was clicked 
  Need to add btn class back to HTML
  $('.btn').click(function() {
    theID = $(this).attr('id');
    console.log( theID );

  }); */

//For the Pretzel Section
  $('#a').click(function() {
    $('#detailOne').slideToggle();
  });

  $('#b').click(function() {
    $('#detailTwo').slideToggle();
  });

  $('#c').click(function() {
    $('#detailThree').slideToggle();
  });

  $('#d').click(function() {
    $('#detailFour').slideToggle();
  });

  $('#e').click(function() {
    $('#detailFive').slideToggle();
  });

  $('#f').click(function() {
    $('#detailSix').slideToggle();
  });

  // For the Dip No functional change from above.
  $('#g').click(function() {
    $('#detailSeven').slideToggle();
  });

  $('#h').click(function() {
    $('#detailEight').slideToggle();
  });

  $('#i').click(function() {
    $('#detailNine').slideToggle();
  });

  $('#j').click(function() {
    $('#detailTen').slideToggle();
  });

  $('#k').click(function() {
    $('#detailEleven').slideToggle();
  });

  $('#l').click(function() {
    $('#detailTwelve').slideToggle();
  }); 


});
