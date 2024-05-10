// constructor
function Facultades(name, campus) {
    this.name   = name;
    this.campus = campus;
}

// Validación
function isValid(unaFacultad) {
    let validacion = true;

    if (unaFacultad.school=="") {
        validacion = false;
    }

    if (unaFacultad.campus=="") {
        validacion = false;
    }

    return validacion;
}

// register
function register() {
    let inputName   = document.getElementById("txtFacultad").value;
    let inputCampus = document.getElementById("txtCampus").value;

    let nuevaFacultad = new Facultades(inputName, inputCampus);
    if(isValid(nuevaFacultad)){
        saveItems(nuevaFacultad);
    } else {
        alert("Por favor completa los campos");
    }
}