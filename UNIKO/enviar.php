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
    // 🔐 Configuración SMTP Ferozo
    $mail->isSMTP(); 
    $mail->Host = 'c2701701.ferozo.com'; 
    $mail->SMTPAuth = true; 
    $mail->Username = 'hola@unyko.cl'; 
    $mail->Password = 'Hol@2026'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
    $mail->Port = 465;

    // 📬 Configuración del correo
    $mail->setFrom('hola@unyko.cl', 'Unyko | Consulta desde el sitio');
    $mail->addAddress('hola@unyko.cl'); // destinatario

    // Reply-To validado (solo aquí)
    if (!empty($correo) && filter_var($correo, FILTER_VALIDATE_EMAIL)) { 
      $mail->addReplyTo($correo, $nombre); 
    } else { 
      $mail->addReplyTo('hola@unyko.cl', 'Unyko'); 
    }

    $mail->isHTML(true);
    $mail->Subject = "Nuevo mensaje de contacto de $nombre";
    $mail->Body = "
      <h2>Nuevo mensaje desde Unyko.cl</h2>
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
