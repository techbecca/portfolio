var production = false;
var environment = production ? "." : "http://www.techbecca.me";

document.addEventListener("DOMContentLoaded", function () {
  // Get files from endpoint and process them
  $.getJSON(environment + "/api/albums.php", function (albums, status) {
    // Loop through albums, for each album:
    for (const albumName in albums) {
      const section = document.createElement("section");
      section.setAttribute("class", "album");
      section.setAttribute("id", albumName);

      // Create element for album heading & Append heading to album section
      const heading = document.createElement("h2");
      heading.innerHTML = albumName;
      section.appendChild(heading);

      // Add container element with album name as id
      const container = document.createElement("div");
      container.setAttribute("class", "container");

      // For each image:
      let i = 0;
      for (let imgSrc of albums[albumName]) {
        // Create id & source path
        const imgId = albumName + "-" + i++;
        imgSrc = environment + imgSrc.substring(2);

        // Create image element & Add source attribute
        const img = document.createElement("img");
        img.setAttribute("src", imgSrc);
        img.setAttribute("id", imgId);
        img.setAttribute("alt", imgId);

        // Add on-click event that displays a modal of the image
        img.addEventListener("click", displayImageAsModal);

        // Append image to container div
        container.appendChild(img);
      }
      // Append container to album
      section.appendChild(container);

      // Append album to albums div
      document.getElementById("albums").appendChild(section);
    }
  });

  // Add close on-click event on x icon
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    document.getElementById("myModal").style.display = "none";
  });
});

function displayImageAsModal(event) {
  try {
    document.getElementById("myModal").style.display = "flex";
    document
      .getElementById("img01")
      .setAttribute("src", event.target.getAttribute("src"));
    document.getElementById("caption").innerText =
      event.target.getAttribute("alt");
  } catch (error) {
    console.log("Modal function didn't work", error);
  }
}
