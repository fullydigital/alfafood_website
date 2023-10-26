<?php

$email_from = "absender@domain.de";
$sendermail_antwort = true;
$name_von_emailfeld = "Email";

$empfaenger = "info@alfafood.eu";
$mail_cc = "";
$betreff = "Neue Newslettereintragung";

$url_ok = "https://www.mreinert.de";
$url_fehler = "https://www.mreinert.de";

// Diese Felder werden nicht in der Mail stehen
$ignore_fields = array('submit');

// Datum, wann die Mail erstellt wurde
$name_tag = array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
$num_tag = date("w");
$tag = $name_tag[$num_tag];
$jahr = date("Y");
$n = date("d");
$monat = date("m");
$time = date("H:i");

// Erste Zeile unserer Email
$msg = "Gesendet am $tag, den $n.$monat.$jahr - $time Uhr \n\n";

// Hier werden alle Eingabefelder abgefragt
foreach ($_POST as $name => $value) {
  if (in_array($name, $ignore_fields)) {
    continue; // Ignore Felder werden nicht in die Mail eingefügt
  }
  $msg .= "$name: \n$value\n\n";
  if ($name === 'location' && value === 'Ingolstadt') {
    $empfaenger = 'ingolstadt@alfafood.eu';
  }
}

// E-Mail Adresse des Besuchers als Absender
if ($sendermail_antwort and isset($_POST['Email']) and filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL)) {
  $email_from = $_POST['Email'];
}

$header = "From $email_from";

if (!empty($mail_cc)) {
  $header .= "\n";
  $header .= "Cc: $mail_cc";
}

// Email als UTF-8 senden
$header .= "\nContent-type: text/plain; charset=utf-8";

$mail_senden = mail($empfaenger, $betreff, $msg, $header);

// Weiterleitung, hier könnten jetzt per echo auch Ausgaben stehen
if ($mail_senden) {
  header("Location: " . $url_ok);
  exit();
} else {
  header("Location: " . $url_fehler);
  exit();
}