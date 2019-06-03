
<html>

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
  <div class="header">
    <br/>
    <br/>
    <h1>Techbecca's Portfolio</h1>
    <h3>View my shit. Hopefully it's awesome.</h3>
    <br/>
  </div>
  <div class="albums">
    <h1> Gallery </h1>
    <?php
      $path = "./resources/img/albums";
      $it = new FilesystemIterator($path, FilesystemIterator::SKIP_DOTS);
      foreach ($it as $filepath => $fileinfo) {
        if ($fileinfo->isDir()) {
          echo "<h2>".$fileinfo->getFilename()."</h2>";
          $imgIt = new FilesystemIterator($filepath, FilesystemIterator::KEY_AS_PATHNAME);
          foreach ($imgIt as $imgFileinfo) {
            echo "<img src=\"".$imgIt->key()."\" width=\"200\" height=\"200\">";
          }
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
