<?php 
    $trends = array(array("key" => "Mill Speed Trend", "bar" => true, "values" => array(
        array("x"=>10, "y"=>50, "color" => '#0A0E40', "width" => 10, "label" => "-35 To -30"),
        array("x"=>20, "y"=>30, "color" => '#0A0E40', "width" => 10, "label" => "-30 To -25"),
        array("x"=>30, "y"=>40, "color" => '#0A0E40', "width" => 10, "label" => "-25 To -20"),
        array("x"=>40, "y"=>60, "color" => '#0A0E40', "width" => 10, "label" => "-20 To -15"),
        array("x"=>50, "y"=>20, "color" => '#0A0E40', "width" => 10, "label" => "-15 To -10"),
        array("x"=>60, "y"=>45, "color" => '#0A0E40', "width" => 10, "label" => "-10 To -05"),
        array("x"=>70, "y"=>25, "color" => '#0A0E40', "width" => 10, "label" => "-05 To 0"),
        array("x"=>80, "y"=>25, "color" => '#0A0E40', "width" => 10, "label" => "0 To 05"),
        array("x"=>90, "y"=>25, "color" => '#0A0E40', "width" => 10, "label" => "05 To 10"),
        array("x"=>100, "y"=>25, "color" => '#0A0E40', "width" => 10, "label" => "10 To 15")
    )));
    header('Access-Control-Allow-Origin: *');
    header('Content-type: json');
    $millFilters = json_decode(file_get_contents('json/Mills_filters.json'));
    $finalTrends = array();
    foreach($millFilters->MillFilter as $plantKey => $plant) {
        $finalTrends[$plantKey] = array();
        foreach($plant as $millKey => $mill) {
            $finalTrends[$plantKey][$millKey] = array();
            foreach($mill->targetGauge as $targetGauge) {
                $finalTrends[$plantKey][$millKey][(string)$targetGauge] = array("range_5" => array(array("key" => "Mill Speed Trend", "bar" => true, "values" => array(
                    array("x"=>10, "y"=>ceil(50 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-35 To -30"),
                    array("x"=>20, "y"=>ceil(30 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-30 To -25"),
                    array("x"=>30, "y"=>ceil(40 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-25 To -20"),
                    array("x"=>40, "y"=>ceil(60 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-20 To -15"),
                    array("x"=>50, "y"=>ceil(20 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-15 To -10"),
                    array("x"=>60, "y"=>ceil(45 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-10 To -05"),
                    array("x"=>70, "y"=>ceil(25 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-05 To 0"),
                    array("x"=>80, "y"=>ceil(25 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "0 To 05"),
                    array("x"=>90, "y"=>ceil(25 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "05 To 10"),
                    array("x"=>100, "y"=>ceil(25 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "10 To 15") ))),
                    "range_10" => array(array("key" => "Mill Speed Trend", "bar" => true, "values" => array(
                    array("x"=>10, "y"=>ceil(50 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-40 To -30"),
                    array("x"=>20, "y"=>ceil(30 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-30 To -20"),
                    array("x"=>30, "y"=>ceil(40 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-20 To -10"),
                    array("x"=>40, "y"=>ceil(45 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "-10 To 0"),
                    array("x"=>50, "y"=>ceil(25 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "0 To 10"),
                    array("x"=>60, "y"=>ceil(25 * $targetGauge * 10), "color" => '#0A0E40', "width" => 10, "label" => "10 To 20")))));
            }
        }
    }
    //print_r($finalTrends);exit;
    $options = array('chart' => 'discreteBar', 'xAxisLabel' => 'Deviation - Mill Speed', 'yAxisLabel' => 'No. Of Coils');
    echo json_encode(array('options' => $options, 'data'=>$finalTrends));
?>