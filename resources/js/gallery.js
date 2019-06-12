$(document).ready(function() {

  showAlbums();

});

function showAlbums(){
  $.getJSON("./api/albums.php", function(albums, status){
    // Loop through albums, for each album:
    for (var key in albums) {
      console.log(key);
      // Create element for html heading
      // Append heading to albums div
      $('<h2>'+key+'</h2>').appendTo("#albums");
      // Add container element with album name as id
      var container = $(document.createElement('div'));
      container.attr('class', 'container');
      container.attr('id', key);
      container.appendTo("#albums")
      // Get array of images
      var images = albums[key];
      // For each image:
      for (imgSrc of images) {
        // Create image element
        var img = $(document.createElement('img'));
        // Add source attribute
        img.attr('src', imgSrc);
        // Append image to albums div
        img.appendTo("#"+key+"");
      }
    }
  });

}
