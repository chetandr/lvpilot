<?php
    $mills = array(
        array('key'=>'mill1', 'value' => 'Mill 1', 'targetGauge' => [0.045,0.085,.125]),
        array('key'=>'mill2', 'value' => 'Mill 2', 'targetGauge' => [0.145,0.085,.125]),
        array('key'=>'mill3', 'value' => 'Mill 3', 'targetGauge' => [0.245,0.085,.125]),
        array('key'=>'mill4', 'value' => 'Mill 4', 'targetGauge' => [0.345,0.085,.125]),
        array('key'=>'mill5', 'value' => 'Mill 5', 'targetGauge' => [0.445,0.085,.125]),
        array('key'=>'mill6', 'value' => 'Mill 6', 'targetGauge' => [0.545,0.085,.125]),
    );
    header('Access-Control-Allow-Origin: *');
    echo json_encode($mills);
?>