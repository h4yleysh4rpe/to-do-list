let button = document.getElementById("confirm");

let message = document.getElementById("confMsg");

function addToList(input) {
    let table = document.getElementById("mainTable");
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    
    let newInput = document.getElementById("newTask").value;
    td2.innerHTML = newInput;
    td1.innerHTML = "<input type='checkbox'>";

    confMsg.innerText = "Task " + newInput + " added successfully."

    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}

