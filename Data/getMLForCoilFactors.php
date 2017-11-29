<?php
    header('Access-Control-Allow-Origin: *');
/*switch($_GET['factor']) {
    case 'coil-chemistry-zinc':
        sleep(1);
    case 'avg-coil-gauge';
        sleep(1);
    case 'mill-speed';
        sleep(1);
}
{ "louisville": [{"key": "Oven","value": [ 15, 31]},{"key": "WorkRolls","value": [ 138, 171, 173, 226, 230, 231, 236, 246, 155, 201, 202, 210, 217, 220, 228, 234, 235, 239, 243, 188, 193, 204, 216, 224, 227, 238, 241, 244, 180, 213, 232, 242, 29, 176, 177, 190, 214, 218, 219, 240, 208, 209, 221, 237, 178, 179, 189, 207, 222, 225, 229, 233, 245, 194, 172, 0, 215, 139]},{"key": "Alloy","value": [ 1101]}], "hotsprings": [{"key": "Caster","value": [ 1, 2, 3, 4, 5, 6, 7, 8, 9]} ]}
*/ 

   /* function getOven() {
        $oven = array(15,31);
        $i = rand(0,1);
        return $oven[$i];
    }
    
    function getWorkRolls() {
        $workrolls = array(138, 171, 173, 226, 230, 231, 236, 246, 155, 201, 202, 210, 217, 220, 228, 234, 235, 239, 243, 188, 193, 204, 216, 224, 227, 238, 241, 244, 180, 213, 232, 242, 29, 176, 177, 190, 214, 218, 219, 240, 208, 209, 221, 237, 178, 179, 189, 207, 222, 225, 229, 233, 245, 194, 172, 0, 215, 139);
        $i = rand(0,count($workrolls) - 1);
        return $workrolls[$i];
    }
    function getAlloy() {
        $alloy = 1101;
        return $alloy;
    }
    
    function getCaster() {
        $caster = array(1, 2, 3, 4, 5, 6, 7, 8, 9);
        $i = rand(0,8);
        return $caster[$i];
    }
    
    function getAcceptReject() {
        $acceptReject = array(  'Accepted', 
                                'Rejected (Mill Edge Cracks)', 
                                'Rejected (Mill - Oscillated ID)', 
                                'Rejected (Mill - Gauge Spikes)',
                                'Rejected (Mill - Crane Damage)',
                                'Rejected (Mill - Too Small)',
                                'Rejected (Cast - Voids)',
                                'Rejected (Cast - Too Small)',
                                'Rejected (Cast - Dog Ears)',
                                'Rejected (Cast - Profile)',
                                'Rejected (Cast - Edge Freeze)'
                              
                             );
        $i = rand(0,10);
        return $acceptReject[$i];
    }
    
    function getGroups() {
        $arrayReject = array("Web Breaks", "Non Standard");
        $acrej = getAcceptReject();
        $i = rand(0,1);
        $otherGroup = $acrej === 'Accepted' ? 'Good' : $arrayReject[$i];
        return array($acrej, $otherGroup);
    }
    
    { "louisville": [{"key": "Oven","value": [ 15, 31]},{"key": "WorkRolls","value": [ 138, 171, 173, 226, 230, 231, 236, 246, 155, 201, 202, 210, 217, 220, 228, 234, 235, 239, 243, 188, 193, 204, 216, 224, 227, 238, 241, 244, 180, 213, 232, 242, 29, 176, 177, 190, 214, 218, 219, 240, 208, 209, 221, 237, 178, 179, 189, 207, 222, 225, 229, 233, 245, 194, 172, 0, 215, 139]},{"key": "Alloy","value": [ 1101]}], "hotsprings": [{"key": "Caster","value": [ 1, 2, 3, 4, 5, 6, 7, 8, 9]} ]}

    for($i =0; $i<200; $i++) {
        $grp = getGroups();
        $arr[] = array(
            'x' => $i,
            'y' => rand(100,3000),
            'size' => .1,
            'shape' => 'circle',
            'oven' => getOven(),
            'workrolls' => getWorkRolls(),
            'aloy' => getAlloy(),
            'caster' => getCaster(),
            'date' => rand(1451606400,1511837804),
            'group1' => $grp[0],
            'group2' => $grp[1]
        );
    }

    
$options = array('chart' => 'scatterChart','xAxisLabel' => 'Coil Number', 'yAxisLabel' => ucfirst($_GET['factor']), 'threshold' => true, 'thresholdValues' => array('max' => 2000, 'min'=>500));*/
//echo json_encode(array("options"=>$options, "data"=>$arr));
echo file_get_contents('./json/getMLForCoilFactors.json');
/*print_r(json_encode(json_decode($jsonString)));*/
?>