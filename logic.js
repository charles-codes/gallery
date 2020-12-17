// script to switch flex display viewing mode
  var items = $(".column");

  var i;

  function displayQuarter() {
    for (i = 0; i < items.length; i++) {
      items[i].style.flex = "25%";
    }
  }

  function displayThird() {
    for (i = 0; i < items.length; i++) {
      items[i].style.flex = "33%";
    }
  }

  function displayHalf() {
    for (i = 0; i < items.length; i++) {
      items[i].style.flex = "50%";
    }
  }

  function displayWhole() {
    for (i = 0; i < items.length; i++) {
      items[i].style.flex = "100%";
    }
  }

  // script to add active class to currently selected button
  var header = $(".gallery_header");
  var buttons = $(".button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var selectedButton = $(".active");
      selectedButton[0].className = selectedButton[0].className.replace(" active", "");
      this.className += " active";
    });
  }


// jQuery script for image modal
  var modal = document.getElementById("myModal");

  var img = $(".photo");
  var modalImg = $("#modal_img");
  var captionText = document.getElementById("caption");
  $(".photo").click(function() {
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr("src", newSrc);
    captionText.innerHTML = this.alt;
  });

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }