<?php 
header('Access-Control-Allow-Origin: *');
echo file_get_contents("./json/getSummaryData.json");
?>
