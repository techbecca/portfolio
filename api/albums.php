<?php
  include "../classes/album.php";
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
 ?>
