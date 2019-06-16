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
        img.click(function() {
          $("#myModal").show();
          $("#img01").attr('src', imgSrc);
        });
        // Append image to container div
        container.append(img);
      }
      // Append container to album
      container.appendTo(".albums");
    }

    $.each($("div.albums").children('img'), function(index, image){
      console.log("Index: " + index + " Src: " + image.src);
      let modalId = '#modal-' + image.id;
      let modalContentId = '#modal-content-'+image.id;
      // Add click-on img to open modal
      image.click(function() {
        $(modalId).show();
        $(modalContentId).attr('src', $(this).src);
      });

      // When you click the close button
      $()(".close").click(function() {
        // Hides the modal
        $(modalId).hide();
      })
    });

  });

  $(".close").click(function() {
    $("#myModal").hide();
  })

});
