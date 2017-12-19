<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/json');
$colors = array(0 => '#3b6a47',10 => '#9d8b83',20 => '#da2207',30 => '#4720c7',40 => '#6692a6',50 => '#935e87',60 => '#872217',70 => '#a7e8d8',80 => '#c28ad5',90 => '#64278b');
echo '[';
for($i = 0; $i <100; $i +=10) {
    
    $valueCnt = 0;
    
     $csvItemList = fopen("./csv/hs.csv", "r");
        $itemList = array();
        $cnt = 0;
        $arrlist = "";
        while($data = fgets($csvItemList)) {

            if($cnt > 0) {

               $arrData = explode(",", str_replace(PHP_EOL,"",$data));
                $deviationperc = round($arrData[$arrKeyIndex['cm_avg_speed']] - $arrData[$arrKeyIndex['target_speed']],2);
                $deviationperc = round(($deviationperc/$arrData[$arrKeyIndex['target_speed']]) * 100,2);
                if($deviationperc >=$i && $deviationperc <= $i + 10) {
                   if($valueCnt > 0) {
                        $arrlist .= ",";
                    }
                    $valueCnt++;
                    $date = rand(1451606400,1514764800);
                    $arrlist .= '{"y":'.$arrData[$arrKeyIndex['cu_perc']].',"x":'.$deviationperc.',"date":'.$date.',"caster":'.rand(1,10).',"sampleno":'.$arrData[$arrKeyIndex['sampleno']].'}';
                }


            } else {
                $arTempalte = explode(",", str_replace(PHP_EOL,"",str_replace("/","_",strtolower(str_replace(" ", "_", $data)))));
                $arrKeyIndex = array_flip($arTempalte);
            }
    
           // if($cnt == 100) break;
    
            $cnt++;
        }
        
        if($arrlist != "") {
            if($i != 0) {
                echo ",";
            } 
           // var_dump($arrlist);
            echo '{';
            $x = $i + 10;
            echo '"key":"'.$i.' to '.$x.'",';
            echo '"color":"'.$colors[$i].'",';
            echo '"values":[';
            echo $arrlist;
            echo "]";
            echo "}";
        }
    
    
}
echo "]";
//var_dump(count($arTempalte));
?>
