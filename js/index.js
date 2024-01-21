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
var closeContentButton = document.querySelectorAll(".details__close");
var contentOverlay = document.querySelectorAll(".details__overlay"); */

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
  var contentOverlay = document.querySelector(".details__overlay");
  var contentDialog = document.querySelector(".details__dialog");
  contentOverlay.classList.add("details__overlay--visible");
  contentDialog.classList.add("details__dialog--visible");
} */

// Function to close content
/* function closeContent(event) {
  event.preventDefault();
  var contentOverlay = document.querySelector(".details__overlay");
  var contentDialog = document.querySelector(".details__dialog");
  contentOverlay.classList.remove("details__overlay--visible");
  contentDialog.classList.remove("details__dialog--visible");
} */

// Add keyup event listener for the 'Esc' key (keyCode 27)
/* document.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    var contentOverlay = document.querySelector(".details__overlay");
    var contentDialog = document.querySelector(".details__dialog");
    contentOverlay.classList.remove("details__overlay--visible");
    contentDialog.classList.remove("details__dialog--visible");
  }
}); */
function getUploadedFile() {
  var input = document.querySelector(".form__img");
  var file = input.files[0];

  if (file) {
      alert("File selected: " + file.name);
      // You can use 'file' for further processing before form submission.
  } else {
      alert("No file selected.");
  }
}

//modal aknoda surat goýmak
function previewImage() {
const UplInput = document.querySelector(".form__img"),
  bgImage = document.querySelector(".form__left"),
  hideInput = document.querySelector(".form__left__items"),
  file = UplInput.files[0],
  reader = new FileReader();

  reader.onloadend = function () {
    bgImage.style.backgroundImage = 'url("' + reader.result + '")';
    hideInput.style.display = 'none';
  };

  if (file) {
      reader.readAsDataURL(file);
  } else {
      preview.src = "#";
  }
}
