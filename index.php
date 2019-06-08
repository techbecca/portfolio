
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

  <div class="script">
    <button id='myButton'>Click to Slide or Toggle</button>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.
</p>
    <!-- Add jQuery lib -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script>
      $("#myButton").click(function () {
          $("p").slideToggle("slow");
      });
    </script>
  </div>
  <h1> Gallery </h1>
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
