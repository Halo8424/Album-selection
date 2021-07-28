// Global Variables
const notify = document.querySelector(".notify");
console.log(notify);
const albums = document.querySelectorAll(".album");
console.log(albums);
const itemsTotal = document.querySelector(".items-total");
const saveBtn = document.querySelector(".button");

let albumsSelected = [];
let i = 0;
while (i < albums.length) {
  albums[i].onclick = function (e) {
    let albumTitle = this.querySelector(".title").textContent;

    if (this.classList.contains("selected") !== true) {
      this.classList.add("selected");
      // pushing album title to array
      albumsSelected.push(albumTitle);
    } else {
      this.classList.remove("selected");
      // to remove the album title from the array
      albumsSelected = albumsSelected.filter(function (item) {
        return item !== albumTitle;
      });
    }
    console.log(albumsSelected);
  };

  i++;
} 

saveBtn.onclick = function () {
  itemsTotal.textContent = albumsSelected.length + " items saved";
  notify.classList.add("active");

  // to remove the notification
  setTimeout(function(){
    notify.classList.remove("active");
  }, 2000)
  console.log("saved");
};

// Click album
// Show user album has been selected, add selected class to album
// Create an array that adds selected album to the array
// Calculate total of selected albums
// When saved btn is clicked show notification with total of saved albums
