
<html>

<?php
//include './api/albums.php';

 ?>

<head>
  <meta charset="utf-8">
  <title>Techbecca's Portfolio</title>
  <link rel="stylesheet" type="text/css" href="resources/css/style.css" />
  <!-- Old fonts
  <link href="https://fonts.googleapis.com/css?family=Cardo" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
  --->
  <link href="http://fonts.googleapis.com/css?family=Dancing+Script:700|EB+Garamond" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="header background-red white">
    <br/>
    <br/>
    <h1>Techbecca's Portfolio</h1>
    <h3>View my shit. Hopefully it's awesome.</h3>
    <br/>
  </div>

  <h1> Gallery </h1>
  <button id='myButton' style="align:center">Click to Slide or Toggle Albums</button>
    <!-- Add jQuery lib -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script>
      $("#myButton").click(function () {
          $(".albums").slideToggle("slow");
      });
  </script>
  <div class="albums">

    <?php
      $path = "./resources/img/albums";
      $it = new FilesystemIterator($path, FilesystemIterator::SKIP_DOTS);
      foreach ($it as $filepath => $fileinfo) {
        if ($fileinfo->isDir()) {
          echo "<h2>".$fileinfo->getFilename()."</h2>";
          echo "<div class=\"container\">";
          $imgIt = new FilesystemIterator($filepath, FilesystemIterator::KEY_AS_PATHNAME);
          foreach ($imgIt as $imgFileinfo) {
            //TODO: test that we actually have an image before displaying
            echo "<img src=\"".$imgIt->key()."\" >";
          }
          echo "</div>";
        }
      }
    ?>
  </div>
  <!--
  <div class="projects">
    <ul>
      <li> <a href="#">link 1</a> </li>
      <li> <a href="#">link 2</a> </li>
      <li> <a href="#">link 3</a> </li>
      <li> <a href="#">link 4</a> </li>
    </ul>
  </div>
  -->
</body>

</html>
