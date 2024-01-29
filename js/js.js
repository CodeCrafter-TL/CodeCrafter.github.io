function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.classList.remove("hide");
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("hide");
    setTimeout(function(){
        popup.style.display = "none";
    }, 300);
}