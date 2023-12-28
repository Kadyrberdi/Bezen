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

//SHARE MODAL

const viewBtn = document.querySelectorAll(".view-modal"),
      popup = document.querySelector(".popup"),
      close = popup.querySelectorAll(".close"),
      field = popup.querySelector(".field"),
      input = field.querySelector("input"),
      copy = field.querySelector("button");

viewBtn.forEach(openPopup);
close.forEach(closePopup);

/* viewBtn.onclick = ()=>{
  popup.classList.toggle("show");
} */

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



function openPopup(viewBtn) {
  viewBtn.onclick = ()=>{
    popup.classList.toggle("show");
    a_links = popup.getElementsByClassName("social-media")
    /* a_links[0].href = "/#####"; */
  }
}
function closePopup(viewBtn) {
  close.onclick = ()=>{
    viewBtn[0].click();
    popup.classList.toggle("show");
    //card[0].click();
  }
}

