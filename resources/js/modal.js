$(function(){
  // Find all images in gallery
  var images = $('.gallery').find('img');
  // For each
  $.each(images, function(index, image){
    console.log("Index: " + index + " Src: " + image.src);
    // Add click-on img to open modal
    image.click(function() {
      $('#myModal').children('.modal-content').attr('src', $(this).src);
      $('#myModal').show();
    });

    // When you click the close button
    $(".close").click(function() {
      // Hides the modal
      $("#myModal").hide();
    })
  });

})
