<?php
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);
$data['timestamp'] = time();
$file = fopen('data.csv', 'a');

fputcsv($file, $data);

// Close the file
fclose($file);
