$(document).ready(function () {

  //Dörede basaňda şu aşakdaky modal akno işleýär
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  modalOverlay.on("click", closeModal);
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
    var UplInput = document.querySelector(".form__img");
    var bgImage = document.querySelector(".form__left");
    var hideInput = document.querySelector(".form__left__items");

    bgImage.style.backgroundImage = 'none';
    hideInput.style.display = 'flex';
    UplInput.value = null;
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


  //mataň görnüşini saýlamak
  $(".custom-select-wrapper-colour").on("click", function (e) {
    e.preventDefault();
    $(".select-options-wrapper").toggle();
  });

  $(".select-options-wrapper ul li").on("click", function (e) {
    e.preventDefault();
    console.log($(this).text());
    $(this).closest("ul").find("li").removeClass("--selected");
    $(this).addClass("--selected");
    $(".selected-option span").html($(this).text());
  });

  $(document).on("click", function (e) {
    if ($(e.target).closest(".custom-select-wrapper-colour").length === 0) {
      $(".select-options-wrapper").hide();
    }
  });

});