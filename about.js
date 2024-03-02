document.addEventListener("DOMContentLoaded", function () {
    var knowMoreButtons = document.getElementsByClassName("know-more");
    var backButtons = document.getElementsByClassName("back-btn");

    // Handle the click event on the "Know More" buttons
    Array.from(knowMoreButtons).forEach(function (button) {
      button.addEventListener("click", function () {
        // Hide the content div
        button.closest(".content").style.display = "none";

        // Show the additional information div
        var additionalInfo = button.closest(".card-arrange").getElementsByClassName("additional-info")[0];
        additionalInfo.style.display = "flex";

        // Hide the percentage within the additional information div
        additionalInfo.querySelector(".percentage").style.display = "none";
      });
    });

    // Handle the click event on the "Back" buttons
    Array.from(backButtons).forEach(function (backButton) {
      backButton.addEventListener("click", function () {
        // Hide the additional information div
        var additionalInfo = backButton.closest(".additional-info");
        additionalInfo.style.display = "none";

        // Show the content div
        var contentDiv = backButton.closest(".card-arrange").getElementsByClassName("content")[0];
        contentDiv.style.display = "block";

        // Show the percentage within the content div
        contentDiv.querySelector(".percentage").style.display = "block";
      });
    });
  });
