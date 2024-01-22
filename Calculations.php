<?php
class CsvProcessor {
  private $csvFile;
  private $data = [];

  public function __construct($csvFile) {
      $this->csvFile = $csvFile;
  }

  public function readCsv() {
      if (($handle = fopen($this->csvFile, 'r')) !== false) {
          while (($row = fgetcsv($handle)) !== false) {
              $this->data[] = $row;
          }
          fclose($handle);
      }
  }

  public function sortByDate() {
      usort($this->data, function ($a, $b) {
          return strtotime($a[1]) - strtotime($b[1]);
      });
  }

  public function displayData() {
      foreach ($this->data as $row) {
          echo implode(', ', $row) . "<br>";
      }
  }
}

$csvFile = 'data.csv';
$csvProcessor = new CsvProcessor($csvFile);

$csvProcessor->readCsv();
$csvProcessor->sortByDate();
$csvProcessor->displayData();