var production = true;
var environment = production ? "." : "http://www.techbecca.me";
$(document).ready(function() {

  $.getJSON(environment + "/api/albums.php", function(albums, status) {
    // Loop through albums, for each album:
    for (var albumName in albums) {
      var section = $('<section>').attr('class', 'album').attr('id', albumName);
      // Create element for html heading & Append heading to albums div
      $('<h2>' + albumName + '</h2>').appendTo(section);
      // Add container element with album name as id
      var container = $('<div>');
      container.attr('class', 'container');
      // For each image:
      let i = 0;
      for (imgSrc of albums[albumName]) {
        // Create id
        let imgId = albumName + "-" + i++;
        imgSrc = environment + imgSrc.substring(2);
        // Create image element & Add source attribute
        var img = $('<img />', {
          src: imgSrc,
          id: imgId,
          alt: imgId
        });
        img.click(function() {
          $("#myModal").css('display', 'flex');
          $("#img01").attr('src', $(this).attr('src'));
          $("#caption").text($(this).attr('alt'));
        });
        // Append image to container div
        container.append(img);
      }
      // Append container to album
      container.appendTo(section);
      section.appendTo("#albums")
    }


  });

  $(".close").click(function() {
    $("#myModal").hide();
  })

});
