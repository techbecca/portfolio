<?php

  function get_albums($path = "./resources/img/albums";) {
    var $albums = array();
    var $images;
    var $name;

    $it = new FilesystemIterator($path, FilesystemIterator::SKIP_DOTS);
    foreach ($it as $filepath => $fileinfo) {
      // If it's an album and not a file
      if ($fileinfo->isDir()) {
        // Collect name of album
        $name = $fileinfo->getFilename();
        // Collect the images
        $images = array_diff(scandir($path), array('.', '..'));
        // TODO: use glob() to only get valid img formats
        // Enter a key-value pair with name and a scan of the directory
        $albums[$name]=$images;
      }
      var_dump($albums);
    }
  }
 ?>
