<?php 
    $coilState = $_GET['coilstate'];
    
    $finalArray = array(array('key' => 'coil-chemistry-zinc', 'Value' => 'Coil-Chemistry (% Zinc)'),
                        array('key' => 'avg-coil-gauge', 'Value' => 'Average Coil Gauge'),
                        array('key' => 'mill-speed', 'Value' => 'Mill Speed'),
                        array('key' => 'gauge-at-center-from-coil-profile', 'Value' => 'Gauge At Center From Coil Center')
                       );
    header('Access-Control-Allow-Origin: *');
    echo json_encode($finalArray);
?>