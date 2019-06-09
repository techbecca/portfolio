$(document).ready(function() {
  // gallery html
  var gallery_html = `
      <h1> Gallery </h1>
      <p> Hello world </p>
    `;

  // app html
  var app_html = `
        <div class='container'>

            <div class='page-header'>
                <h1 id='page-title'>Read Products</h1>
            </div>

            <!-- this is where the contents will be shown. -->
            <div id='page-content'></div>

        </div>`;

  // inject to 'gallery' in index.html
  $("#gallery").html(gallery_html);

});
