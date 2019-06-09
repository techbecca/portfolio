<?php
/**
 *
 */
class Album
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
