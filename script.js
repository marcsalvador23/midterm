var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["middlename"] = document.getElementById("middlename").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["birthday"] = document.getElementById("birthday").value;
    formData["course"] = document.getElementById("course").value;
    formData["schoolyear"] = document.getElementById("schoolyear").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("enrollmentinformation").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.middlename;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.gender;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.birthday;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = data.course;
    cell4 = newRow.insertCell(7);
    cell4.innerHTML = data.schoolyear;
    cell4 = newRow.insertCell(8);
    cell4.innerHTML = `<a onClick="onEdit(this)">EDIT</a>
                       <a onClick="onDelete(this)">DELETE</a>`;
}  

function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("enrollmentinformation");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; 
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }




function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("course").value = "";
    document.getElementById("schoolyear").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("middlename").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
    document.getElementById("birthday").value = selectedRow.cells[5].innerHTML;
    document.getElementById("course").value = selectedRow.cells[6].innerHTML;
    document.getElementById("schoolyear").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FirstName;
    selectedRow.cells[1].innerHTML = formData.middlename;
    selectedRow.cells[2].innerHTML = formData.lastname;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.birthday;
    selectedRow.cells[6].innerHTML = formData.course;
    selectedRow.cells[7].innerHTML = formData.schoolyear;

}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this Record? ')) {
        row = td.parentElement.parentElement;
        document.getElementById("enrollmentinformation").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == "") {
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }
    return isValid;
}