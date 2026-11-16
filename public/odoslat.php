<?php
// Zmeňte adresy podľa potreby.
$to = 'detskecentrumkatka@gmail.com';
$bcc = 'petrik.baca@gmail.com';

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

// Povoliť požiadavky iba z rovnakej domény (vrátane preflightu pre JSON).
$host = strtolower((string)parse_url('https://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST));
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $originHost = strtolower((string)parse_url($origin, PHP_URL_HOST));
    if ($originHost === '' || $host === '' || !hash_equals($host, $originHost)) {
        respond(403, ['success' => false, 'error' => 'Požiadavka z nepovolenej domény.']);
    }
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST, OPTIONS');
    respond(405, ['success' => false, 'error' => 'Povolené je iba odoslanie formulára.']);
}
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 65536) {
    respond(413, ['success' => false, 'error' => 'Formulár je príliš veľký.']);
}

$contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
if ($contentType === 'application/json') {
    $input = json_decode(file_get_contents('php://input'), true);
} elseif ($contentType === 'multipart/form-data' || $contentType === 'application/x-www-form-urlencoded') {
    $input = $_POST;
} else {
    respond(415, ['success' => false, 'error' => 'Nepodporovaný formát formulára.']);
}
if (!is_array($input)) {
    respond(400, ['success' => false, 'error' => 'Formulár sa nepodarilo načítať.']);
}

function clean_text(mixed $value, int $limit = 1000): string
{
    if (!is_scalar($value)) {
        return '';
    }
    $text = trim(strip_tags((string)$value));
    $text = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $text) ?? '';
    return function_exists('mb_substr') ? mb_substr($text, 0, $limit, 'UTF-8') : substr($text, 0, $limit);
}

// Honeypot: robot dostane úspešnú odpoveď, ale e-mail sa neodošle.
if (clean_text($input['website'] ?? '', 200) !== '') {
    respond(200, ['success' => true]);
}

$name = clean_text($input['name'] ?? '', 120);
$email = clean_text($input['email'] ?? '', 254);
$phone = clean_text($input['phone'] ?? '', 40);
$children = clean_text($input['children'] ?? '', 3);
$date = clean_text($input['date'] ?? '', 10);
$time = clean_text($input['time'] ?? '', 40);
$note = clean_text($input['note'] ?? '', 3000);
$pack = clean_text($input['pack'] ?? '', 100);
$mascot = clean_text($input['mascot'] ?? '', 100);

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $date === '' || $time === '') {
    respond(422, ['success' => false, 'error' => 'Skontrolujte, prosím, povinné údaje formulára.']);
}
$dateObject = DateTime::createFromFormat('Y-m-d', $date);
if (!$dateObject || $dateObject->format('Y-m-d') !== $date) {
    respond(422, ['success' => false, 'error' => 'Zadaný dátum nie je platný.']);
}

$packs = ['Oslava' => 190, 'Uzatvorená spoločnosť' => 360];
$mascots = ['Bez maskota' => 0, 'Maskot v centre bez animátora' => 20, 'Maskot s animátorom' => 40];
$foodPrices = [
    'Ovocné a mäsové prkénko' => 18,
    'Hranolky' => 4,
    'Pizza' => 9,
    'Nugetky' => 6,
    'Párok v rožku' => 3,
    'Zemiaková kvetina' => 5,
    'Palacinky' => 4,
];
if (!isset($packs[$pack]) || !isset($mascots[$mascot])) {
    respond(422, ['success' => false, 'error' => 'Vybraný balík alebo maskot nie je platný.']);
}

$foodInput = $input['food'] ?? [];
if (!is_array($foodInput)) {
    respond(422, ['success' => false, 'error' => 'Výber cateringu nie je platný.']);
}
$foodLines = [];
$total = $packs[$pack] + $mascots[$mascot];
foreach ($foodInput as $entry) {
    if (!is_array($entry)) {
        continue;
    }
    $foodName = clean_text($entry['name'] ?? '', 100);
    $quantityText = clean_text($entry['quantity'] ?? '0', 3);
    if (!isset($foodPrices[$foodName]) || !preg_match('/^\d{1,3}$/', $quantityText)) {
        continue;
    }
    $quantity = min(100, (int)$quantityText);
    if ($quantity > 0) {
        $lineTotal = $quantity * $foodPrices[$foodName];
        $total += $lineTotal;
        $foodLines[] = $foodName . ': ' . $quantity . ' ks (' . $lineTotal . ' €)';
    }
}
if ($children !== '' && (!ctype_digit($children) || (int)$children < 1 || (int)$children > 60)) {
    respond(422, ['success' => false, 'error' => 'Počet detí musí byť od 1 do 60.']);
}

$hostForMail = preg_match('/^[a-z0-9.-]+$/i', $host) ? $host : 'localhost';
$from = 'formular@' . $hostForMail;
$subject = '=?UTF-8?B?' . base64_encode('Nový dopyt na oslavu – ' . $name) . '?=';
$body = implode("\r\n", [
    'Nový dopyt na oslavu z webovej stránky',
    '',
    'Meno: ' . $name,
    'E-mail: ' . $email,
    'Telefón: ' . ($phone !== '' ? $phone : 'neuvedený'),
    'Počet detí: ' . ($children !== '' ? $children : 'neuvedený'),
    'Dátum: ' . $date,
    'Čas: ' . $time,
    '',
    'Balík: ' . $pack . ' (' . $packs[$pack] . ' €)',
    'Maskot: ' . $mascot . ($mascots[$mascot] > 0 ? ' (' . $mascots[$mascot] . ' €)' : ''),
    'Catering:',
    $foodLines ? implode("\r\n", $foodLines) : 'Bez cateringu',
    '',
    'Orientačná cena: ' . $total . ' €',
    '',
    'Poznámka:',
    $note !== '' ? $note : 'Bez poznámky',
]);
$headers = [
    'From: Detské centrum Katka <' . $from . '>',
    'Reply-To: ' . $email,
    'Bcc: ' . $bcc,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

if (!mail($to, $subject, $body, implode("\r\n", $headers), '-f' . $from)) {
    respond(500, ['success' => false, 'error' => 'E-mail sa nepodarilo odoslať.']);
}
respond(200, ['success' => true]);
