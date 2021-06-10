var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            document.getElementById("submit").addEventListener("click", insertNewRecord(formData));
        }
        else {
            document.getElementById("reset").addEventListener("click", updateRecord(formData));
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["genre"] = document.getElementById("genre").value;
    formData["description"] = document.getElementById("description").value;
    formData["year"] = document.getElementById("year").value;
    htmlElementToArray(formData["title"]);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("movieList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.genre;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.year;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a href="#" onClick='onEdit(this)' style="margin-right:5px;color:green">Edit</a>
                       <a onClick="onDelete(this)"><i class="fa fa-remove" style="margin-left:5px;color:red"></i></a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("description").value = "";
    document.getElementById("year").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("genre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("year").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.genre;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.year;
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("movieList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function designFunction() {
    document.getElementById("movieList").style.color = "#458bca";
    document.getElementById("movieList").style.fontWeight = "900";
    document.getElementById("movieList").style.fontSize = "14px";
}

function htmlElementToArray(element) {
    const arrayHtml = Array.from(element);
    arrayHtml.forEach(designFunction);
    return arrayHtml;
}


function validate() {
    isValid = true;
    if (document.getElementById("title").value == "") {
        isValid = false;
        document.getElementById("titleValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("titleValidationError").classList.contains("hide")) {
            document.getElementById("titleValidationError").classList.add("hide");
        }
    }
    return isValid;
}