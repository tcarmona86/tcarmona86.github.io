<?php
//use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//require 'phpmailer/src/PHPMailer.php';
//require 'phpmailer/src/SMTP.php';
//require 'phpmailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars($_POST["nombre"]);
  $email = htmlspecialchars($_POST["email"]);
  $mensaje = nl2br(htmlspecialchars($_POST["mensaje"])); // nl2br para conservar saltos de línea

  $mail = new PHPMailer(true);

  try {
    // 🔐 Configuración SMTP de Titan
    $mail->isSMTP();
   // $mail->Host = 'smtp.titan.email';
    $mail->SMTPAuth = true;
    $mail->Username = 'contacto@digitbox.cl';
    $mail->Password = 'Contacto@2025';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // 📬 Configuración del correo
    $mail->setFrom('contacto@digitbox.cl', 'Digitbox | Consulta desde el sitio');
    $mail->addAddress('contacto@digitbox.cl');
    $mail->addReplyTo($email, $nombre);

    $mail->isHTML(true);
    $mail->Subject = "Nuevo mensaje de contacto de $nombre";
    $mail->Body = "
      <h2>Nuevo mensaje desde digitbox.cl</h2>
      <p><strong>Nombre:</strong> {$nombre}</p>
      <p><strong>Correo:</strong> {$email}</p>
      <p><strong>Mensaje:</strong><br>{$mensaje}</p>
      <hr>
      <p style='font-size:12px; color:#888;'>Este mensaje fue enviado desde el formulario de contacto del sitio web.</p>
    ";

    $mail->send();

    // ✅ Aquí va el mensaje que se mostrará en contacto.html
    echo "¡Gracias! Tu mensaje fue enviado correctamente.";
  } catch (Exception $e) {
    // También puedes devolver este mensaje si quieres mostrarlo en pantalla
    echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
  }
}
?>

