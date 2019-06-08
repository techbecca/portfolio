<?php
  // required headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  function albums()
  {
    $list = array();
    $list = get_albums("./resources/img/albums");
    if (sizeof($list)>0)
    {
      // Set response code - 200 OK
      http_response_code(200);

      // Show albums in json formats
      echo json_encode($list);

    }
    else {
      // Set response code - 404 Not found
      http_response_code(404);

      // Set error message
      echo json_encode(array('message' => "No albums found"));
    }
  }

  // Get albums data from folders
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
        $images = array();
        $imgIt = new FilesystemIterator($filepath, FilesystemIterator::KEY_AS_PATHNAME);
        foreach ($imgIt as $imgFileinfo) {
          //TODO: test that we actually have an image before displaying
          array_push($images, $imgIt->key());
        }
        // TODO: use glob() to only get valid img formats
        // Enter a key-value pair with name and a scan of the directory
        $albums[$name]=$images;
      }
    }
    return $albums;
  }
 ?>
