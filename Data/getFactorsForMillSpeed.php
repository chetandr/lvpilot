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
"hotsprings"
"Mill 1"
"0.04"

*/
$mills = array(
    array('key' => 'mill1', 'value' => 'Mill1', 'targetGauge' => [0.045, 0.085, .125]),
    array('key' => 'mill2', 'value' => 'Mill2', 'targetGauge' => [0.145, 0.085, .125]),
    array('key' => 'mill3', 'value' => 'Mill3', 'targetGauge' => [0.245, 0.085, .125]),
    array('key' => 'mill4', 'value' => 'Mill4', 'targetGauge' => [0.345, 0.085, .125]),
    array('key' => 'mill5', 'value' => 'Mill5', 'targetGauge' => [0.445, 0.085, .125]),
    array('key' => 'mill6', 'value' => 'Mill6', 'targetGauge' => [0.545, 0.085, .125]),
);
$plants = array("hotsprings", "louisville");
$finalArray = array();
foreach($plants as $plant) {
    $finalArray[$plant] = array();
    foreach ($mills as $n => $mill) {
        foreach ($mill["targetGauge"] as $targetGauge) {
            $finalArray[$plant][$mill["value"]]["".$targetGauge.""] = array(
                array('key' => 'crown', 'value' => 'Crown'.$targetGauge, 'rank' => 1),
                array('key' => 'wedge', 'value' => 'Wedge'.$targetGauge, 'rank' => 9999),
                array('key' => 'as-cast-gauge', 'value' => 'As-cast Gauge'.$targetGauge, 'rank' => 3),
                array('key' => 'cast-speed', 'value' => 'Cast Speed'.$targetGauge, 'rank' => 4),
                array('key' => 'coil-chemistry-zinc', 'value' => 'Coil-Chemistry (% Zinc)'.$targetGauge, 'rank' => 5),
                array('key' => 'mill-amps-at-hs-mill-1st-pass', 'value' => 'Mill Amps at HS Mill 1st pass'.$targetGauge, 'rank' => 6),
                array('key' => 'weather-temp-at-rolling-time', 'value' => 'Weather temp at rolling time'.$targetGauge, 'rank' => 7),
                array('key' => 'weather-humidity-at-rolling-time', 'value' => 'Weather humidity at rolling time'.$targetGauge, 'rank' => 8)
            );
        }
    }
}
header('Access-Control-Allow-Origin: *');
echo json_encode($finalArray);
?>