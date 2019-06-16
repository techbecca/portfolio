$(document).ready(function() {

  $.getJSON("./api/albums.php", function(albums, status) {
    // Loop through albums, for each album:
    for (var key in albums) {
      // Create element for html heading & Append heading to albums div
      $('<h2>' + key + '</h2>').appendTo(".albums");
      // Add container element with album name as id
      var container = $('<div>');
      container.attr('class', 'container');
      // For each image:
      for (imgSrc of albums[key]) {
        // Create image element & Add source attribute
        var img = $('<img />', {
          src: imgSrc
        });
        // Create modal
        var modal = $("#myModal").clone();
        img.click(function() {
          modal.show();
          modal.find('img').attr('src', imgSrc);
        });
        // Append image & modal to container div
        container.append(img);
        container.append(modal);

      }
      // Append container to album
      container.appendTo(".albums");
    }
  });

  // When you click any close Button
  // TODO: make it so it only closes the specific modal
  $(".close").click(function() {
    // Hides all modals
    $(".modal").hide();
  })

});
