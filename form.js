function buat_login() {
    document.getElementById("myForm").style.display = "block";
}
var modal = document.getElementById("myForm");
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}