<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars($_POST["nombre"]);
  $email = htmlspecialchars($_POST["email"]);
  $mensaje = htmlspecialchars($_POST["mensaje"]);

  $destinatario = "tcarmona86@gmail.com";
  $asunto = "Nuevo mensaje desde el formulario de contacto";
  $contenido = "Nombre: $nombre\nCorreo: $email\nMensaje:\n$mensaje";
  $headers = "From: $email";

  if (mail($destinatario, $asunto, $contenido, $headers)) {
    echo "Mensaje enviado correctamente.";
  } else {
    echo "Hubo un error al enviar el mensaje.";
  }
}
?>
