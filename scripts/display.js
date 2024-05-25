function displayTable(student) {

    var htmlTags="";

    htmlTags=`
    <tr>
        <td> ${student.name}</td>
        <td class='text-center'> ${student.age}</td>
        <td> ${student.gender}</td>
        <td> ${student.email}</td>
        <td> ${student.subject1}</td>
        <td> ${student.subject2}</td>
        <td> ${student.subject3}</td>
        <td> ${student.school}</td>
    </tr>
    `;

    $('#studentTable tbody').append(htmlTags);
}

function displayCards() {
    let card= "";
    card=`

        <div id="${student.name}" class='students'>
            <h4> Nombre: ${student.name}</h4>
            <p> Edad: ${student.age}</p>
            <button> Eliminar</button>
        </div>
        `;

    document.getElementById("studentList").innerHTML+=card;
}

function displayTable2() {
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
    card+=`</tbody</table>`;
    document.getElementById("studentList").innerHTML=card;
}


function searchToDataBase (){
    $.ajax({
        url: "./app/get_students.php",
        type: "GET",
        dataType:"json",
        success:function(response){
            console.log(response);
            if(response.success) {
                console.log(response.data);
                response.data.forEach(displayTable);
            } else {
                console.log("Error en la respuesta del servidor");
            }
        }, 
        error:function(xhr, status, error) {
            console.log(error);
        }
    })
}

function init(){
    searchToDataBase();
}

window.onload=init;

