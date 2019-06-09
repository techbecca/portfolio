<?php
  // required headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $albums = array();
  $path = "../resources/img/albums";
  $it = new FilesystemIterator($path, FilesystemIterator::SKIP_DOTS);
  foreach ($it as $filepath => $fileinfo) {
    // If it's an album and not a file
    if ($fileinfo->isDir()) {
      // Create album from directory
      $album = new Album($fileinfo->getFilename(), $filepath);
      // If album isn't empty
      if ($album->$empty === FALSE) {
        // Add to list of albums
        $albums[]=$album;
      }
    }
  }
  // Check if images are there
  if (sizeof($albums)>0) {
    // Set response code - 200 OK
    http_response_code(200);
    // Show albums in json formats
    echo json_encode($albums);
  } else {
    // Set response code - 404 Not found
    http_response_code(404);
    // Set error message
    echo json_encode(array('message' => "No albums found"));
  }

  /**
   *
   */
  private class Album
  {
    var $name;
    var $path;
    var $images;
    var $empty = TRUE;

    function __construct($name, $path)
    {
      $this->$name = $name;
      $this->$path = $path;
      $this->$images = get_images($path);
      if (sizeof($images)>0) {
        $this->$empty = FALSE;
      }
    }

    function get_images($path="") {
      $images = array();
      if ($path="" && is_string($path)) {
        throw new \Exception("No path was given", 1);
      } else {
        // Collect the images
        // TODO: use glob() to only get valid img formats
        $imgIt = new FilesystemIterator($path, FilesystemIterator::KEY_AS_PATHNAME);
        foreach ($imgIt as $imgFileinfo) {
          //TODO: test that we actually have an image before displaying
          array_push($images, $imgIt->key());
        }
      }
      return $images;
    }
  }



 ?>
