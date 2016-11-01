$(document).ready(function() {

  var theID; //holds the id of the menu item that was clicked 

  $('.close').click(function() {
    this.hide()
  });
  $('.itemDetail').hide();

  $('.btn').click(function() {
    theID = $(this).attr('id');
    console.log(theID);
  });





/*


 

  $('.item2').click(function() {
    $('#detalTwo').slideToggle();
  }); 
*/
});
