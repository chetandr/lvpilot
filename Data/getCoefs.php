<?php
/**
 * Created by IntelliJ IDEA.
 * User: chetan_rane
 * Date: 1/11/2018
 * Time: 3:01 PM
 */
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/json');

echo file_get_contents('json/getCoefficients.json');
?>