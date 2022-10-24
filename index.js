var selectedRow = null;

// Show Alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

// Clear All Fields
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#cod").value = "";
}

// Add Data

document.querySelector("#student-form").addEventListener("submit", (event) => {
    event.preventDefault();
    // Get Form Values
 const firstName = document.querySelector("#firstName").value;
 const lastName = document.querySelector("#lastName").value;
 const cod = document.querySelector("#cod").value;

 // Validation
 if (firstName == "" || lastName == "" || cod == "") {
   showAlert("Plase fill in all fields", "danger");
 } else {
   if (selectedRow == null) {
     const list = document.querySelector("#student-list");
     const row = document.createElement("tr");

     row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${cod}</td>
        <td> 
           <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
           <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        </td>
        `;
     list.appendChild(row);
     selectedRow = null;
     showAlert("Student Added", "success");
   } else {
     selectedRow.children[0].textContent = firstName;
     selectedRow.children[1].textContent = lastName;
     selectedRow.children[2].textContent = cod;

     selectedRow = null;
        showAlert("Student info Edited", "info");

   }
   clearFields();
 }
})

// Edit data

document.querySelector("#student-list").addEventListener("click", (event) => {
    target = event.target;
    if(target.classList.contains("edit")){
         showAlert("Editing student", "warning");

        selectedRow = target.parentElement.parentElement;
       document.querySelector("#firstName").value =
        selectedRow.children[0].textContent;
//
       document.querySelector("#lastName").value =
         selectedRow.children[1].textContent;
//
       document.querySelector("#cod").value =
         selectedRow.children[2].textContent;


}
})

// Delete Data
document.querySelector("#student-list").addEventListener("click", (event) => {
    target = event.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});


