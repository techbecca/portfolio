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
        tempModal = $('#' + modalId);
        img.click(function() {
          tempModal.children('.modal-content').attr('src', $(this).src);
          tempModal.show();
        });

        // When you click any close Button
        tempModal.find(".close").click(function() {
          // Hides all modals
          tempModal.hide();
        })

        // Append image & modal to albumContainer div
        albumContainer.append(img);
        albumContainer.append(modal);

      } // End album generation
      // Append album albumContainer to albums
      albumContainer.appendTo(".albums");
    }
  });
});
