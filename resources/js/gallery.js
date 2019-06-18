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

        // <!-- The Modal -->
        // <div id="myModal" class="modal">
        //   <!-- The Close Button -->
        //   <span class="close">&times;</span>
        //   <!-- Modal Content (The Image) -->
        //   <img class="modal-content">
        //   <!-- Modal Caption (Image Text) -->
        //   <div id="caption"></div>
        // </div>
        modalId = "modal-"+imgId;
        var modal = $('div').attr('class', 'modal').attr('id', modalId);
        modal.append($('span').text('&times;').attr('close'));
        modal.append($('img').attr({
          class: "modal-content",
          src: imgSrc,
          alt: imgId
        }));
        img.click(function() {
          $('#'+modalId).children('.modal-content').attr('src', $(this).src);
          $('#'+modalId).show();
        });

        // When you click any close Button
        $('#'+modalId).children(".close").click(function() {
          // Hides all modals
          $('#'+modalId).hide();
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
