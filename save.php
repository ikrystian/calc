<?php
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);
$data['timestamp'] = time();
$data['date'] = date('Y-m-d H:i:s');
$file = fopen('data.csv', 'a');

fputcsv($file, $data);


fclose($file);
