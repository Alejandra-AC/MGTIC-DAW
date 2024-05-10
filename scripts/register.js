let students=[];

// Constructor
function Student(name,age,gender,email,password,subject1,subject2,subject3,school){
    this.name     = name;
    this.age      = age;
    this.gender   = gender;
    this.email    = email;
    this.password = password;
    this.subject1 = subject1;
    this.subject2 = subject2;
    this.subject3 = subject3;
    this.school   = school;
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

    if (unAlumno.gender=="") {
        validacion = false;
    }

    if (unAlumno.email=="") {
        validacion = false;
    }

    if (unAlumno.password=="") {
        validacion = false;
    }

    if (unAlumno.subject1=="") {
        validacion = false;
    }

    if (unAlumno.subject2=="") {
        validacion = false;
    }

    if (unAlumno.subject3=="") {
        validacion = false;
    }
    
    if (unAlumno.school=="") {
        validacion = false;
    }

    return validacion;
}

// Registrar 
function registrar (){
    let inputNombre   = document.getElementById("txtNombre").value;
    let inputEdad     = document.getElementById("txtEdad").value;
    let inputGenero   = document.getElementById("txtGenero").value;
    let inputEmail    = document.getElementById("txtEmail").value;
    let inputContra   = document.getElementById("txtContra").value;
    let inputMateria1 = document.getElementById("txtMateria1").value;
    let inputMateria2 = document.getElementById("txtMateria2").value;
    let inputMateria3 = document.getElementById("txtMateria3").value;
    let inputFacultad = document.getElementById("txtFacultad").value;

    let nuevoAlumno = new Student(inputNombre, inputEdad, inputGenero, inputEmail, inputContra, inputMateria1, inputMateria2, inputMateria3, inputFacultad);
    if(isValid(nuevoAlumno)){
        students.push(nuevoAlumno);
        displayTable();
    } else {
        alert("Por favor completa los campos");
    }
}

function init() {
    let student1 = [];
    //students.push(student1);

    displayCards();
}

window.onload=init; // Espera a renderizar el HTML

