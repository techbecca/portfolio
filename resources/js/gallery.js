$(document).ready(function() {

  $.getJSON("./api/albums.php", function(albums, status) {
    // Loop through albums, for each album:
    for (var albumName in albums) {
      // Create element for html heading & Append heading to albums div
      $('<h2>' + albumName + '</h2>').appendTo(".albums");
      // Add albumContainer element with album name as id
      var albumContainer = $('<div>');
      albumContainer.attr('class', 'container');
      // For each image:
      let i = 0;
      for (imgSrc of albums[albumName]) {
        // Create id
        let imgId = albumName + "-" + i++;

        // Create image element & Add source attribute
        var img = $('<img />', {
          src: imgSrc,
          id: imgId
        });

        // Create modal
        let modalId = 'modal-' + imgId;
        var modal = $("#myModal").clone().removeAttr('id').attr('id', modalId);
        //console.log(modal);
        // Append image & modal to albumContainer div
        albumContainer.append(img);
        albumContainer.append(modal);


      } // End album generation
      // Append album albumContainer to albums
      albumContainer.appendTo(".albums");
    }

    $.each($("div.albums").find('img'), function(index, img){
      console.log("Index: " + index + " Src: " + image.src);
    })
  });

});
