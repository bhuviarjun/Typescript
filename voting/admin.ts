const abutton = document.getElementById("btn1") as HTMLButtonElement;

function adminlogin(){
    const adminIDInput = (document.getElementById("adminID") as HTMLInputElement).value;
    const passwordInput = (document.getElementById("password") as HTMLInputElement).value;
    if (adminIDInput === "Admin" && passwordInput === "12345") {
        location.href = "votecount.html";
    } else {
        alert("Invalid AdminID or password. Please try again.");
    }
}


abutton.addEventListener("click", adminlogin);