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
  $.getJSON("./api/albums.php", function(data, status){
    console.log(data.sort());
  });

}
