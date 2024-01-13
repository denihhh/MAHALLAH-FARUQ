document.addEventListener("DOMContentLoaded", function () {
    function closeOtherDropdowns(selectedDropdownId) {
      var allDropdowns = document.querySelectorAll(".dropdown");
      allDropdowns.forEach(function (dropdown) {
        if (dropdown.id !== selectedDropdownId) {
          dropdown.classList.remove("active");
          dropdown.classList.remove("opened"); // Remove opened class
          dropdown.querySelector(".dropdown-content").style.display = "none";
          dropdown.style.borderRadius = "290px"; // Reset border-radius
        }
      });
    }

    function toggleDropdown(dropdownId) {
      var dropdown = document.getElementById(dropdownId);
      var dropdownContent = dropdown.querySelector(".dropdown-content");
      var menuContainer = document.querySelector(".menu-container");
      var menu = document.querySelector(".menu");

      closeOtherDropdowns(dropdownId);

      dropdown.classList.toggle("active");
      dropdownContent.style.display = dropdown.classList.contains("active") ? "block" : "none";

      // Update border-radius based on the toggle state
      dropdown.style.borderRadius = dropdown.classList.contains("active") ? "50px" : "290px";

      // Add opened class to keep track of the dropdown state
      if (dropdown.classList.contains("active")) {
        dropdown.classList.add("opened");
      }

      menuContainer.style.height = menu.offsetHeight + "px";
    }

    // Close all dropdowns when the page loads
    closeOtherDropdowns();

    document.getElementById("dropdown-toggle").addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown("dropdown");
    });

    document.getElementById("dropdown-toggle-2").addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown("dropdown-2");
    });

    document.getElementById("dropdown-toggle-3").addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown("dropdown-3");
    });

    document.getElementById("dropdown-toggle-4").addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown("dropdown-4");
    });

    document.querySelectorAll(".dropdown-content").forEach(function (content) {
      // Prevent closing dropdown when clicking inside the content
      content.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });

    document.addEventListener("click", function () {
      closeOtherDropdowns();
    });
  });

  function popup() {
alert("You have submitted!");


}

function popup2() {
  var damageTextArea = document.querySelector(".damage");

  if (damageTextArea.value.trim() !== "") {
    alert("You have submitted!");
  } else {
    alert("Please fill in the textarea before submitting.");
  }
}

function popup3() {
  var nameInput = document.querySelector(".nameH");
  var matricInput = document.querySelector(".matric");
  var phoneInput = document.querySelector(".phone");
  var reasonTextArea = document.querySelector(".reason");
  var proofInput = document.querySelector(".proof");

  // Check if all required fields are filled
  if (
    nameInput.value.trim() !== "" &&
    matricInput.value.trim() !== "" &&
    phoneInput.value.trim() !== "" &&
    reasonTextArea.value.trim() !== "" &&
    proofInput.value.trim() !== ""
  ) {
    alert("Successfully send!");
  } else {
    alert("Please fill in all fields before submitting.");
  }
}

document.getElementById("dropdown-toggle-3").addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown("dropdown-3");
});

function popup4() {
    var emergencyTextArea = document.querySelector(".emergency");
  
    if (emergencyTextArea.value.trim() !== "") {
      alert("You have submitted!");
    } else {
      alert("Please fill in the textarea before submitting.");
    }
  }

  function showNavigationBar() {
    var navigationBar = document.getElementById('navigation-bar');
    var arrowContainer = document.getElementById('arrow-container');
    var arrowIcon = document.getElementById('arrow-icon');

    navigationBar.style.display = 'block';
    arrowIcon.classList.add('up');
    arrowContainer.style.marginTop = '50px'; // Adjust the margin-top as needed


}

function hideNavigationBar() {
    var navigationBar = document.getElementById('navigation-bar');
    var arrowContainer = document.getElementById('arrow-container');
    var arrowIcon = document.getElementById('arrow-icon');

    navigationBar.style.display = 'none';
    arrowIcon.classList.remove('up');
    arrowContainer.style.marginTop = '10px'; // Adjust the original margin-top as needed
}