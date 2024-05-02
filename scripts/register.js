let students=[];

// Constructor
function Student(name,age){
    this.name=name;
    this.age=age;
}

// Validación
function isValid(unAlumno) {
    let validacion = true;

    if (unAlumno.name=="") {
        validacion = false;
    }
    if (unAlumno.age=="") {
        validacion = false;
    }

    return validacion;
}

// Registrar 
function registrar (){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;

    let nuevoAlumno = new Student(inputNombre, inputEdad);
    if(isValid(nuevoAlumno)){
        students.push(nuevoAlumno);
        console.log(students);
    } else {
        alert("Por favor completa los campos");
    }
}

function init() {
    let student1 = new Student("Samuel",99);
    students.push(student1);
}

window.onload=init; // Espera a renderizar el HTML

