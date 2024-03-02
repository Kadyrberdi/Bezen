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


  //profil sahypada tab goýmak
  var tabsItem = $(".account__main__toggle__item");
  var contentItem = $(".profile__main");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("account__main__toggle__item--active");
    contentItem.removeClass("profile__main--active");
    $(activeContent).addClass("profile__main--active");
    $(this).addClass("account__main__toggle__item--active");
  });

  //search acylyp yapylyan.
  var search = $(".search__inputs");
  var searchOverlay = $(".search__overlay");
  search.on("click", openSearch);
  searchOverlay.on("click", closeSearch);

  function openSearch() {
    var searchOverlay = $(".search__overlay");
    var searchModal = $(".search__modal");
    searchOverlay.addClass("search__overlay--visible");
    searchModal.addClass("search__modal--visible");
  }
  function closeSearch(event) {
    event.preventDefault();
    var searchOverlay = $(".search__overlay");
    var searchModal = $(".search__modal");
    
    searchOverlay.removeClass("search__overlay--visible");
    searchModal.removeClass("search__modal--visible");

  }
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      var searchOverlay = $(".search__overlay");
      var searchModal = $(".search__modal");
      searchOverlay.removeClass("search__overlay--visible");
      searchModal.removeClass("search__modal--visible");
    }
  }); 
  //followers acylyp yapylyan.
  var followers = $("[data-toggle=followers]");
  var closeFollowers = $(".followers__close");
  var followersOverlay = $(".followers__overlay");
  followers.on("click", openFollowers);
  closeFollowers.on("click", closeFollowers_f);
  followersOverlay.on("click", closeFollowers_f);
  function openFollowers() {
    var followersOverlay = $(".followers__overlay");
    var followersDialog = $(".followers__dialog");
    followersOverlay.addClass("followers__overlay--visible");
    followersDialog.addClass("followers__dialog--visible");
  }
  function closeFollowers_f(event) {
    event.preventDefault();
    var followersOverlay = $(".followers__overlay");
    var followersDialog = $(".followers__dialog");
    followersOverlay.removeClass("followers__overlay--visible");
    followersDialog.removeClass("followers__dialog--visible");

  }
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      var followersOverlay = $(".followers__overlay");
      var followersDialog = $(".followers__dialog");
      followersOverlay.removeClass("followers__overlay--visible");
      followersDialog.removeClass("followers__dialog--visible");
    }
  });

  //following acylyp yapylyan.
  var following = $("[data-toggle=following]");
  var closeFollowing = $(".following__close");
  var followingOverlay = $(".following__overlay");
  following.on("click", openFollowing);
  closeFollowing.on("click", closeFollowing_f);
  followingOverlay.on("click", closeFollowing_f);
  function openFollowing() {
    var followingOverlay = $(".following__overlay");
    var followingDialog = $(".following__dialog");
    followingOverlay.addClass("following__overlay--visible");
    followingDialog.addClass("following__dialog--visible");
  }
  function closeFollowing_f(event) {
    event.preventDefault();
    var followingOverlay = $(".following__overlay");
    var followingDialog = $(".following__dialog");
    followingOverlay.removeClass("following__overlay--visible");
    followingDialog.removeClass("following__dialog--visible");

  }
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      var followingOverlay = $(".following__overlay");
      var followingDialog = $(".following__dialog");
      followingOverlay.removeClass("following__overlay--visible");
      followingDialog.removeClass("following__dialog--visible");
    }
  });

});