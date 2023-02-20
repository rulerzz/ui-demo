var dropdown = document.getElementById("button-icon");
var dropdownList = document.getElementById("dropdown");
var dropdownListCount = document.getElementsByClassName("dropdown-item").length;
dropdown.addEventListener("click", function () {
    if(dropdownList.style.display === "none")
        dropdownList.style.display = "block";
    else
        dropdownList.style.display = "none";
    dropdownList.style.height = dropdownListCount * 3 +  "rem";
});
