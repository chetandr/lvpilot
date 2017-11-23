<?php
	$csvFile = fopen("./reject_reasons.csv", "r");
    $csvData = array();
    $arTempalte = array();
    $cnt = 0;
    $coilData = array();
    // get the stores for the item
	$rejectCounts = array();
	
    while($data = fgets($csvFile)) {
        if($cnt > 0) {
            $arrData = explode(",", $data);
			$rejectType = str_ireplace("\r\n",'',$arrData[2]);
			if(isset($rejectCounts[$rejectType])) {
				$rejectCounts[$rejectType]++;
			} else {
				$rejectCounts[$rejectType] = 1;
			}
			$coilData[$arrData[1]] = $arrData;
        } else {
            $arTempalte = explode(",", str_replace("/","_",strtolower(str_replace(" ", "_", $data))));
        }
        $cnt++;
    }
	$arrayFinal = array();
	foreach($rejectCounts as $reason=>$count) {
		$arrayFinal[] = array('key' => $reason, 'y' => $count); 
	}
	header('Access-Control-Allow-Origin: *');
	echo json_encode($arrayFinal);
?>