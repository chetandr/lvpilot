<?php 
    //$coilState = $_GET['coilstate'];
/*-Crown
-Wedge
-As-cast gauge (center of profile)
-Cast speed
-Chemistry (  BAR chart)
-Mill Amps at HS Mill 1st pass
-Weather temp at rolling time
-Weather humidity at rolling time
*/
    
    $finalArray = array(
                        array('key' => 'crown', 'value' => 'Crown', 'rank' => 1),
                        /*array('key' => 'wedge', 'value' => 'Wedge', 'rank' => 2),
                        array('key' => 'as-cast-gauge', 'value' => 'As-cast Gauge', 'rank' => 3),
                        array('key' => 'cast-speed', 'value' => 'Cast Speed', 'rank' => 4),
                        array('key' => 'coil-chemistry-zinc', 'value' => 'Coil-Chemistry (% Zinc)', 'rank' => 5),
                        array('key' => 'mill-amps-at-hs-mill-1st-pass', 'value' => 'Mill Amps at HS Mill 1st pass', 'rank' => 6),
                        array('key' => 'weather-temp-at-rolling-time', 'value' => 'Weather temp at rolling time', 'rank' => 7),
                        array('key' => 'weather-humidity-at-rolling-time', 'value' => 'Weather humidity at rolling time', 'rank' => 8)*/
                       );
    header('Access-Control-Allow-Origin: *');
    echo json_encode($finalArray);
?>