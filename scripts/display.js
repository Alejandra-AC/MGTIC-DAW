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
    let card= `<table><thead><tr><th>Nombre</th><th>Edad</th><th>Facultad</th><th>Email</th></tr></thead><tbody>`;
    if(students.length!=0) {
    for(let i=0;i<students.length;i++){
        let student = students[i];
        card+=`
        <tr>
            <td> ${student.name}</td>
            <td> ${student.age}</td>
            <td> ${student.email}</td>
            <td> ${student.school}</td>
        </tr>
        `;

    }
} else {
    card+=`
    <tr>
        <td colspan='4'>No hay estudiantes registrados</td>
      
    </tr>
    `;
}
    card+=`</tbody</table>
    `;
    document.getElementById("studentList").innerHTML=card;
}