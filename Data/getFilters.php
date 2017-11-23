<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-type: json');
    //echo "<pre>";
    echo str_replace("\r\n", "",file_get_contents('json/Mills_filters.json'));
    //print_r(json_decode(file_get_contents('json/Mills_filters.json')));
?>