<?php
    $arrayFinal = array(
        array("key" => "Coolant Temperature","y"=> 20),
        array("key" => "Chemistry (Zn)","y" => 30),
        array("key" => "Rewind Tension","y" => 10),
        array("key" => "No. Of Pass","y" => 35),
        array("key" => "Surrounding Temperature","y" => 5),
    );
	header('Access-Control-Allow-Origin: *');
	echo json_encode($arrayFinal);
?>