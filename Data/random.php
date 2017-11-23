<?php 
    $fp = fopen('./data.csv', 'w');
    $content = array('A','B','C','D','E','F','G','H','I');
    foreach($content as $id) {
        $data = array(
            $id,
            rand(1,100) * 0.000143, 
            80 + rand(1,10), 
            50 + rand(10,50), 
            rand(1,100) * 0.000176, 
            rand(1,100) * 0.0000136, 
            rand(1,9) * 0.09, 
            rand(1000,6000) * 0.143, 
        );
        var_dump(implode(",",$data));
        fputcsv($fp, $data);
    }
?>