<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'vendor/autoload.php'; // Pfade entsprechend anpassen

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["firstname"];
    $last_name = $_POST["lastname"];
    $email = $_POST["email"];
    $location = $_POST["location"];
    $professional = $_POST["professional"];
    $message = $_POST["message"];

    // PDF-Datei verarbeiten
    $pdf_tmp_name = $_FILES["letter"]["tmp_name"];
    $pdf_name = $_FILES["letter"]["name"];
    $pdf_destination = __DIR__ . "/uploads/" . $pdf_name;
    move_uploaded_file($pdf_tmp_name, $pdf_destination);

    // E-Mail senden
    $mail = new PHPMailer(true);

    try {
      $mail->setFrom($email, $first_name . ' ' . $last_name);
      $mail->addAddress('info@alfafood.eu');
      $mail->addAttachment($pdf_destination);
      $mail->isHTML(true);
      $mail->Subject = "Neue Bewerbung";
      $mail->Body = "Vorname: $first_name<br>Nachname: $last_name<br>Email: $email<br>Filialenort: $location<br>Stelle: $professional<br>Nachricht: $message";

      $mail->send();
      echo 'Die E-Mail wurde erfolgreich versendet.';
    } catch (Exception $e) {
      echo "Die E-Mail konnte nicht gesendet werden. Fehler: {$mail->ErrorInfo}";
    }
  } else {
    echo 'Ungültige Anfrage.';
  }
