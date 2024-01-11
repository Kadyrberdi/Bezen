//Masonry grid
var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 160,
  gutter: 10
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry('.grid', {
  // options
});



// Download Button Function 
const download_buttons = document.querySelectorAll(".grid-item--download");
download_buttons.forEach(element => {
  element.onclick = function(e) {
  e.stopPropagation();
  };
});


// Like Button Functions
const like_buttons = document.querySelectorAll(".grid-item--like");

like_buttons.forEach(like_button => {
    like_button.onclick = function(e) {
    e.stopPropagation();
    like_img = like_button.getElementsByTagName("svg")[0]
    like_count = like_button.getElementsByTagName("span")[0]
    like_img.classList.toggle('like__img')

    if (like_img.classList.contains('like__img')) {
      like_count.innerText = parseInt(like_count.innerText) + 1;
      
    }
    else
    {
      like_count.innerText = parseInt(like_count.innerText) - 1;
    };
    
    // popup.children[1].getElementsByTagName("input")[0].value=element.parentElement.children[0].src;
  };
});







//Share Button Functions
const viewBtn = document.querySelectorAll(".view-modal"),
      popup = document.querySelector(".popup"),
      close = popup.querySelector(".close"),
      field = popup.querySelector(".field"),
      input = field.querySelector("input"),
      copy = field.querySelector("button");

viewBtn.forEach(element => {
  element.onclick = function(e) {
    e.stopPropagation();
    popup.classList.toggle("show");
    popup.children[1].getElementsByTagName("input")[0].value=element.parentElement.children[0].src;
  };
});

close.onclick = ()=>{
  popup.classList.toggle("show");
}

copy.onclick = ()=>{
  input.select(); //select input value
  if(document.execCommand("copy")){ //if the selected text copy
    field.classList.add("active");
    copy.innerText = "Copied";
    setTimeout(()=>{
      window.getSelection().removeAllRanges(); //remove selection from document
      field.classList.remove("active");
      copy.innerText = "Copy";
    }, 3000);
  }
}



// şundan aşakda surata basaňda modal akno çykýanynyň kodlary bar, indi o details.page-de we şoň üçin gerek däl. 
//
// 
//
// 
//
// 
//
//Preview Functions
/* var contentButton = document.querySelectorAll(".grid-item");
var photo = document.querySelectorAll(".grid-item--img");
var closeContentButton = document.querySelectorAll(".data_content__close");
var contentOverlay = document.querySelectorAll(".data_content__overlay"); */

// Add click event listeners
/* contentButton.forEach(function (button) {
  button.addEventListener("click", openContent);
});

closeContentButton.forEach(function (button) {
  button.addEventListener("click", closeContent);
});

contentOverlay.forEach(function (overlay) {
  overlay.addEventListener("click", closeContent);
}); */

// Function to open content
/* function openContent() {
  var contentOverlay = document.querySelector(".data_content__overlay");
  var contentDialog = document.querySelector(".data_content__dialog");
  contentOverlay.classList.add("data_content__overlay--visible");
  contentDialog.classList.add("data_content__dialog--visible");
} */

// Function to close content
/* function closeContent(event) {
  event.preventDefault();
  var contentOverlay = document.querySelector(".data_content__overlay");
  var contentDialog = document.querySelector(".data_content__dialog");
  contentOverlay.classList.remove("data_content__overlay--visible");
  contentDialog.classList.remove("data_content__dialog--visible");
} */

// Add keyup event listener for the 'Esc' key (keyCode 27)
/* document.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    var contentOverlay = document.querySelector(".data_content__overlay");
    var contentDialog = document.querySelector(".data_content__dialog");
    contentOverlay.classList.remove("data_content__overlay--visible");
    contentDialog.classList.remove("data_content__dialog--visible");
  }
}); */
