$(document).ready(function() {

  showAlbums();

});

function showAlbums() {
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
        // Append image to container div
        container.append(img);
      }
      // Append container to album
      container.appendTo(".albums");
    }
  });

}
