<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $basedeDatos = "ejemplo";

    $enlace= mysqli_connect ($servidor, $usuario, $clave, $basedeDatos);
?>


<?php
    if(isset($_POST['registro'])){
        $nombre= $_POST ['nombre'];
        $correo= $_POST ['correo'];
        $numero= $_POST ['numero'];
        $mensaje= $_POST ['mensaje'];

        $insertarDatos = "INSERT INTO datos VALUES('$nombre', '$correo', '$numero', '$mensaje', '')";

        $ejecutarInsertar = mysqli_query ($enlace, $insertarDatos);
    }
    header('Location:exito.html')
?>

