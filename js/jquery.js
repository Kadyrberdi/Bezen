$(document).ready(function () {

  //Dörede basaňda şu aşakdaky modal akno işleýär
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

  //Suratyň gyrasyna basaňda şu aşakdaky modal akno işlemeli
  //var contentButton = $("[data-toggle=data_content]");
  var contentButton = $(".grid-item");
  var closeContentButton = $(".data_content__close");
  contentButton.on("click", openContent);
  closeContentButton.on("click", closeContent);
  function openContent() {
    console.log('salam');
    var contentOverlay = $(".data_content__overlay");
    var contentDialog = $(".data_content__dialog");
    contentOverlay.addClass("data_content__overlay--visible");
    contentDialog.addClass("data_content__dialog--visible");
  }
  function closeContent(event) {
    event.preventDefault();
    var contentOverlay = $(".data_content__overlay");
    var contentDialog = $(".data_content__dialog");
    contentOverlay.removeClass("data_content__overlay--visible");
    contentDialog.removeClass("data_content__dialog--visible");
  }
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      var contentOverlay = $(".data_content__overlay");
      var contentDialog = $(".data_content__dialog");
      contentOverlay.removeClass("data_content__overlay--visible");
      contentDialog.removeClass("data_content__dialog--visible");
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