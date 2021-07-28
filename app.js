// Global Variables
const notify = document.querySelector(".notify");
    console.log(notify);
const albums = document.querySelectorAll(".album");
    console.log(albums);
const itemsTotal = document.querySelector(".items-total");
const saveBtn = document.querySelector(".button");


const albumsSelected=[];
let i = 0;
while( i < albums.length){
    albums[i].onclick = function(e){
        let albumTitle = this.querySelector(".title").textContent;
        
        if(this.classList.contains("selected") !== true){
            console.log("does not have the selected class");
        }
    }
    console.log(i)
    i++
};




// Click album 
// Show user album has been selected, add selected class to album
// Create an array that adds selected album to the array
// Calculate total of selected albums
// When saved btn is clicked show notification with total of saved albums