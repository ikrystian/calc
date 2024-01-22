<?php
$csvFile = 'data.csv';
$data = [];

if (($handle = fopen($csvFile, 'r')) !== false) {
  while (($row = fgetcsv($handle)) !== false) {
    $data[] = $row;
  }
  fclose($handle);
}

usort($data, function ($a, $b) {
  return strtotime($a[1]) - strtotime($b[1]);
});

foreach ($data as $row) {
  echo implode(', ', $row) . "<br>";
}
