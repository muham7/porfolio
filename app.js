document.getElementById("promptBtn").addEventListener("click", function() {

    let name = prompt("Ismingizni kiriting:");
    if (name) {
  
        alert("Salom, " + name + "!");
    } else {
        alert("Siz ism kiritmadingiz.");
    }
});