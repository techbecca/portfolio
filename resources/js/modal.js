$(document).ready(function() {
  var img = $(".albums").find('img');
  img.click(function() {
    $("#myModal").show();
    $("#img01").attr('src', img.attr('src'));
  });

  $(".close").click(function() {
    $("#myModal").hide();
  })
});
