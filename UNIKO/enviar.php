<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre   = htmlspecialchars($_POST["nombre"]);
  $correo   = htmlspecialchars($_POST["correo"]);
  $telefono = htmlspecialchars($_POST["telefono"]);
  $mensaje  = nl2br(htmlspecialchars($_POST["mensaje"]));

  $mail = new PHPMailer(true);

  try {
    // 🔐 Configuración SMTP para Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'tcarmona86@gmail.com'; // tu correo Gmail
    $mail->Password = 'Hikari@2024'; // contraseña de aplicación
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // 📬 Configuración del correo
    $mail->setFrom('tcarmona86@gmail.com', 'Unyko | Consulta desde el sitio');
    $mail->addAddress('tcarmona86@unyko.cl'); // destinatario
    $mail->addReplyTo($correo, $nombre);

    $mail->isHTML(true);
    $mail->Subject = "Nuevo mensaje de contacto de $nombre";
    $mail->Body = "
      <h2>Nuevo mensaje desde unyko.cl</h2>
      <p><strong>Nombre:</strong> {$nombre}</p>
      <p><strong>Correo:</strong> {$correo}</p>
      <p><strong>Teléfono:</strong> {$telefono}</p>
      <p><strong>Mensaje:</strong><br>{$mensaje}</p>
      <hr>
      <p style='font-size:12px; color:#888;'>Este mensaje fue enviado desde el formulario de contacto del sitio web.</p>
    ";

    $mail->send();
    echo "¡Gracias! Tu mensaje fue enviado correctamente.";
  } catch (Exception $e) {
    echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
  }
}
?>
