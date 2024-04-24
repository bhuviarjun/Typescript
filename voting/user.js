var ids = localStorage.getItem('ids') ? JSON.parse(localStorage.getItem('ids')) : [];
var button = document.getElementById("btn");
function login() {
    var id = parseInt(document.getElementById("input1").value);
    if (ids.includes(id))
        alert("Already voted");
    else {
        ids.push(id);
        localStorage.setItem('ids', JSON.stringify(ids));
        location.href = "vote.html";
    }
}
button.addEventListener("click", login);
