<?php 
    $limits = array( "mill1" =>
        array(
            array(
                'label' => 'Target Gauge',
                'values' => array(0.0085, 0.0045, 0.0025, 0.0012)
            ),
            array(
                'label' => 'Rewind Tension',
                'values' => array(5.00, 5.25, 5.50, 6.00)
            ),
            array(
                'label' => 'Roll Load',
                'values' => array(1.00, 1.25, 1.50, 1.75, 2.0)
            ),
            array(
                'label' => 'Coolant Temp',
                'values' => array(80, 85, 90, 95, 100)
            ),
            array(
                'label' => 'Unwind Tension',
                'values' => array(265,266,267,268,269,270,280,281,282,283,284,285,286,287,289,290)
            ),
        ),
        "mill2" =>
        array(
            array(
                'label' => 'Target Gauge',
                'values' => array(0.0185, 0.0045, 0.0025, 0.0012)
            ),
            array(
                'label' => 'Rewind Tension',
                'values' => array(5.00, 5.25, 5.50, 6.00)
            ),
            array(
                'label' => 'Roll Load',
                'values' => array(1.00, 1.25, 1.50, 1.75, 2.0)
            ),
            array(
                'label' => 'Coolant Temp',
                'values' => array(80, 85, 90, 95, 100)
            ),
            array(
                'label' => 'Unwind Tension',
                'values' => array(265,266,267,268,269,270,280,281,282,283,284,285,286,287,289,290)
            ),
        ),
        "mill3" =>
        array(
            array(
                'label' => 'Target Gauge',
                'values' => array(0.0285, 0.0045, 0.0025, 0.0012)
            ),
            array(
                'label' => 'Rewind Tension',
                'values' => array(5.00, 5.25, 5.50, 6.00)
            ),
            array(
                'label' => 'Roll Load',
                'values' => array(1.00, 1.25, 1.50, 1.75, 2.0)
            ),
            array(
                'label' => 'Coolant Temp',
                'values' => array(80, 85, 90, 95, 100)
            ),
            array(
                'label' => 'Unwind Tension',
                'values' => array(265,266,267,268,269,270,280,281,282,283,284,285,286,287,289,290)
            ),
        ),
        "mill4" =>
        array(
            array(
                'label' => 'Target Gauge',
                'values' => array(0.0380, 0.0045, 0.0025, 0.0012)
            ),
            array(
                'label' => 'Rewind Tension',
                'values' => array(4.00, 5.25, 5.50, 6.00)
            ),
            array(
                'label' => 'Roll Load',
                'values' => array(1.00, 1.25, 1.50, 1.75, 2.0)
            ),
            array(
                'label' => 'Coolant Temp',
                'values' => array(75, 85, 90, 95, 100)
            ),
            array(
                'label' => 'Unwind Tension',
                'values' => array(260,266,267,268,269,270,280,281,282,283,284,285,286,287,289,290)
            ),
        ),
        "mill5" =>
        array(
            array(
                'label' => 'Target Gauge',
                'values' => array(0.0485, 0.0045, 0.0025, 0.0012)
            ),
            array(
                'label' => 'Rewind Tension',
                'values' => array(5.00, 5.25, 5.50, 6.00)
            ),
            array(
                'label' => 'Roll Load',
                'values' => array(1.00, 1.25, 1.50, 1.75, 2.0)
            ),
            array(
                'label' => 'Coolant Temp',
                'values' => array(80, 85, 90, 95, 100)
            ),
            array(
                'label' => 'Unwind Tension',
                'values' => array(265,266,267,268,269,270,280,281,282,283,284,285,286,287,289,290)
            ),
        ),
        "mill6" =>
        array(
            array(
                'label' => 'Target Gauge',
                'values' => array(0.0585, 0.0045, 0.0025, 0.0012)
            ),
            array(
                'label' => 'Rewind Tension',
                'values' => array(5.00, 5.25, 5.50, 6.00)
            ),
            array(
                'label' => 'Roll Load',
                'values' => array(1.00, 1.25, 1.50, 1.75, 2.0)
            ),
            array(
                'label' => 'Coolant Temp',
                'values' => array(80, 85, 90, 95, 100)
            ),
            array(
                'label' => 'Unwind Tension',
                'values' => array(265,266,267,268,269,270,280,281,282,283,284,285,286,287,289,290)
            ),
        )

    );
    $hsLimits = array("mill1" =>
        array(
            array(
                'label' => 'Target Gauge',
                'values' => array(0.0585, 0.0045, 0.0025, 0.0012)
            ),
            array(
                'label' => 'Rewind Tension',
                'values' => array(5.00, 5.25, 5.50, 6.00)
            ),
            array(
                'label' => 'Roll Load',
                'values' => array(1.00, 1.25, 1.50, 1.75, 2.0)
            ),
            array(
                'label' => 'Coolant Temp',
                'values' => array(80, 85, 90, 95, 100)
            ),
            array(
                'label' => 'Unwind Tension',
                'values' => array(265,266,267,268,269,270,280,281,282,283,284,285,286,287,289,290)
            ),
        )
    );
    $plantLimits = array('lousville' => $limits, 'hotsprings' => $hsLimits);

    header('Access-Control-Allow-Origin: *');
    header('Content-type: json');
    echo json_encode($plantLimits);
?>