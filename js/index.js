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

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "*Please specify your name",
        minlength: "Please enter at least 2 characters.",
      },
      phone: {
        required: "*Please specify your phone",
        minlength: "*Please enter at least 10 characters.",
      },
      email: {
        required: "*We need your email address to contact with you",
        email: "*Your email address must be in the format of name@domain.com",
      },
    },
  });
});