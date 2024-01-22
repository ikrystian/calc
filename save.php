<?php
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);
$data['timestamp'] = time();
$data['date'] = date('Y-m-d H:i:s');
$file = fopen('data.csv', 'a');

if (fputcsv($file, $data)) {
  $status = 'success';
} else {
  $status = 'error';
}

fclose($file);

echo json_encode(['status' => $status]);

