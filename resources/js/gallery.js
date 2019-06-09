$(document).ready(function() {
  // gallery html
  var gallery_html = `
      <h1> Gallery </h1>
      <p> Hello world </p>
    `;

  // inject to 'gallery' in index.html
  $("#gallery").html(gallery_html);

  showAlbums();

});

function showAlbums(){
  $.getJSON("./api/albums.php", function(albums, status){
    console.log(albums);
    for (var key in albums) {
      console.log(key);
    }
  });

}
