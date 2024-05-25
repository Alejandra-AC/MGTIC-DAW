<?php 
// CORS
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["name"],$_POST["age"])){
        $nombre=$_POST["name"];
        $edad=$_POST["age"];
        $genero=$_POST["gender"];
        $correo=$_POST["email"];
        $contra=$_POST["password"];
        $materia1=$_POST["subject1"];
        $materia2=$_POST["subject2"];
        $materia3=$_POST["subject3"];
        $facultad=$_POST["school"];

        $stmt_insert_usuarios = $conn->prepare("INSERT INTO estudiantes (name,age,gender,email,password,subject1,subject2,subject3,school) VALUES (?,?,?,?,?,?,?,?,?)");
        $stmt_insert_usuarios->bind_param("sisssssss",$nombre,$edad,$genero,$correo,$contra,$materia1,$materia2,$materia3,$facultad);

        $stmt_insert_usuarios->execute();
        
        echo json_encode(array("success"=>true));
        $stmt_insert_usuarios->close();
    }

    $conn->close();
    exit();

}

?>
