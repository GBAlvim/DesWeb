function addTask() {
    var nomeInput = document.getElementById("nomeInput");
    var cpfInput = document.getElementById("cpfInput");
    var idadeInput = document.getElementById("idadeInput");

    var nome = nomeInput.value.trim();
    var cpf = cpfInput.value.trim();
    var idade = idadeInput.value.trim();

    if (nome === "" || cpf === "" || idade === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var infoTable = document.getElementById("infoBody");

    var newRow = infoTable.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = nome;
    cell2.innerHTML = cpf;
    cell3.innerHTML = idade;

    var editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.onclick = function() {
        editTask(newRow);
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function() {
        deleteTask(newRow);
    };

    cell4.appendChild(editButton);
    cell4.appendChild(deleteButton);

    nomeInput.value = "";
    cpfInput.value = "";
    idadeInput.value = "";
}

function editTask(row) {
    var nome = prompt("Alterar Nome:");
    var cpf = prompt("Alterar CPF:");
    var idade = prompt("Alterar Idade:");

    if (nome !== null && cpf !== null && idade !== null) {
        row.cells[0].innerHTML = nome;
        row.cells[1].innerHTML = cpf;
        row.cells[2].innerHTML = idade;
    }
}

function deleteTask(row) {
    if (confirm("Tem certeza que deseja excluir?")) {
        row.parentNode.removeChild(row);
    }
}
