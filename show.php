<?php

header('Content-Type: application/json');

$con = mysqli_connect("localhost","id14885796_prachi","Patil@Mitaoe123","id14885796_registration") or die("connection not established");


$sql = "SELECT * FROM register";
$result = mysqli_query($con,$sql) or die("SQL Query failed..");

if(mysqli_num_rows($result) > 0 ){
	$output = mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($output);

}else{
	echo json_encode(array('Message' => 'No record found...','status' => false));
}
?>
