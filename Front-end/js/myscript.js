function toggleSelectContainer() {
  var selectContainerDisplay = document.getElementById(
    "select-container-display"
  );
  var selectContainerDisplaySecond = document.getElementById(
    "select-container-displaysecond"
  );
  var firstOnlyBox = document.querySelector(".first-only-box");

  if (selectContainerDisplay.style.display === "none") {
    selectContainerDisplay.style.display = "flex"; // Show the select-container-display
    selectContainerDisplaySecond.style.display = "flex"; // Show the select-container-displaysecond
    firstOnlyBox.style.height = "250px"; // Expand the first-only-box to 250px
  } else {
    selectContainerDisplay.style.display = "none"; // Hide the select-container-display
    selectContainerDisplaySecond.style.display = "none"; // Hide the select-container-displaysecond
    firstOnlyBox.style.height = "150px"; // Revert the first-only-box height to 150px
  }
}

function toggleSelectContainers() {
  var selectContainerDisplays = document.getElementById(
    "select-container-displays"
  );
  var selectContainerDisplaySeconds = document.getElementById(
    "select-container-displayseconds"
  );
  var thirdOnlyBox = document.querySelector(".third-only-box");

  if (selectContainerDisplays.style.display === "none") {
    selectContainerDisplays.style.display = "flex"; // Show the select-container-display
    selectContainerDisplaySeconds.style.display = "flex"; // Show the select-container-displaysecond
    thirdOnlyBox.style.height = "250px"; // Expand the first-only-box to 250px
  } else {
    selectContainerDisplays.style.display = "none"; // Hide the select-container-display
    selectContainerDisplaySeconds.style.display = "none"; // Hide the select-container-displaysecond
    thirdOnlyBox.style.height = "150px"; // Revert the first-only-box height to 150px
  }
}
