function displayCards() {
    let card= "";
    for(let i=0;i<students.length;i++){
        let student = students[i];
        card+=`
        <div class='students'>
            <h4> Nombre: ${student.name}</h4>
            <p> Edad: ${student.age}</p>
            <button> Eliminar</button>
        </div>
        `;
    }

    document.getElementById("studentList").innerHTML=card;
}

function displayTable() {
    let card= `<table><thead><tr><th width='40%'>Nombre</th><th width='10%'>Edad</th><th width='20%'>Facultad</th><th width='30%'>Email</th></tr></thead><tbody>`;
    if(students.length!=0) {
    for(let i=0;i<students.length;i++){
        let student = students[i];
        card+=`
        <tr>
            <td> ${student.name}</td>
            <td class='text-center'> ${student.age}</td>
            <td> ${student.school}</td>
            <td> ${student.email}</td>
        </tr>
        `;

    }
} else {
    card+=`
    <tr>
        <td colspan='4' class='text-blank'>No hay estudiantes registrados</td>
      
    </tr>
    `;
}
    card+=`</tbody</table>
    `;
    document.getElementById("studentList").innerHTML=card;
}