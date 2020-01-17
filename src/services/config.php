<?php
   $rest_json = file_get_contents("php://input");
   $_POST = json_decode($rest_json, true);
     $servername = "https://remotemysql.com/phpmyadmin/index.php?db=C3SW7sDrmJ";
     $username = "C3SW7sDrmJ";
     $password = "ux72fN5tCu";
     $dbname = "C3SW7sDrmJ";
   $db = new mysqli($servername, $username, $password, $dbname);
if(!$db) die("database connection error");
?>
