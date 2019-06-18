$(document).ready(function() {

  $.getJSON("./api/albums.php", function(albums, status) {
    // Loop through albums, for each album:
    for (var albumName in albums) {
      // Create element for html heading & Append heading to albums div
      $('<h2>' + albumName + '</h2>').appendTo(".albums");
      // Add container element with album name as id
      var container = $('<div>');
      container.attr('class', 'container');
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
        var modal = $("#myModal").clone().removeAttr('id').attr('id', 'modal_${imgId}');
        img.click(function() {
          modal.show();
          modal.find('.modal-content').attr('src', imgSrc);
        });

        // When you click any close Button
        // TODO: make it so it only closes the specific modal
        modal.find(".close").click(function() {
          // Hides all modals
          modal.hide();
        })

        // Append image & modal to container div
        container.append(img);
        container.append(modal);

      }
      // Append container to album
      container.appendTo(".albums");
    }
  });
});
