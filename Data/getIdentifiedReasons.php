<?php 
    $trends = array(
        array("reason" => "Coolant Temp. > 30ºC , %Zn > 5% , No. of Passes > 5", "count" => 700),
        array("reason" => "Surrounding Temp. > 20ºC , %Zn > 5% , Rewind Tension > 300", "count" => 500),
        array("reason" => "Coolant Temp. < 30ºC , %Zn < 5% , No. of Passes > 10", "count" => 500),
        array("reason" => "Surrounding Temp. < 30ºC , %Zn < 3% , Rewind Tension > 400", "count" => 300),
    );

    header('Access-Control-Allow-Origin: *');
    header('Content-type: json');
    echo json_encode($trends);
?>