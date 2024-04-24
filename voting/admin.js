var abutton = document.getElementById("btn1");
function adminlogin() {
    var adminIDInput = document.getElementById("adminID").value;
    var passwordInput = document.getElementById("password").value;
    if (adminIDInput === "Admin" && passwordInput === "12345") {
        location.href = "votecount.html";
    }
    else {
        alert("Invalid AdminID or password. Please try again.");
    }
}
abutton.addEventListener("click", adminlogin);
