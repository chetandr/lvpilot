<?php
    $filters = array(
        'Oven' => range(1,30),
        'Caster' => range(1,10),
        'Work Rolls' => range(130,200),
        'Alloy' => range(1100,1300),
        'Select Period' => array('Jan 2107', 
                           'Feb 2017',
                           'Mar 2017',
                           'Apr 2017',
                           'May 2017',
                           'Jun 2017',
                           'Jul 2017',
                           'Aug 2017',
                           'Sept 2017',
                           'Oct 2017',
                          )
    );
header('Access-Control-Allow-Origin: *');
echo json_encode($filters);
?>