type ID = number;
const ids: ID[] = localStorage.getItem('ids') ? JSON.parse(localStorage.getItem('ids')!) : [];
const button = document.getElementById("btn") as HTMLButtonElement;

function login(): void {
    var id: number = parseInt((document.getElementById("input1") as HTMLInputElement).value);
    if (ids.includes(id))
        alert("Already voted");
    else {
        ids.push(id);
        localStorage.setItem('ids', JSON.stringify(ids));
        location.href = "vote.html";
    }
}

button.addEventListener("click", login);
