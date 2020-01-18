<?php
   $rest_json = file_get_contents("php://input");
   $_POST = json_decode($rest_json, true);
     $servername = "sql12.freemysqlhosting.net";
     $username = "sql12319457";
     $password = "7E9XHyz4N5";
     $dbname = "sql12319457";
   $db = new mysqli($servername, $username, $password, $dbname);
if(!$db) die("database connection error");
?>
