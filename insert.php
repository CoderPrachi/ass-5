<?php
    
header('Content-Type: application/json');
header('Access-control-Allow-Origin:*');
header('Access-Control-Allow-Methods: POST');

$data = json_decode(file_get_contents("php://input"), true);

    $name = $data['nm'];
    $address = $data['ad'];
    $clg_name = $data['cg'];
    $mobile = $data['mb'];
   
    $email =$data['em'];
    
    try{
            // $con = mysqli_connect("localhost","root","Prachi_Patil","reg_db") or die("connection not established");
        $con = mysqli_connect("localhost","id14885796_prachi","Patil@Mitaoe123","id14885796_registration") or die("connection not established");

        if($con==false){
            echo json_encode(array('Message' => 'connection nahi zal','status' => false));
        }
        else{
           $sql = "INSERT INTO `id14885796_registration`.`register`(`name`, `addr`, `clgnm`, `mobile`, `email`) VALUES ('{$name}', '{$address}', '{$clg_name}', '{$mobile}','{$email}')";
            if(mysqli_query($con,$sql)){
                echo json_encode(array('Message' => 'Record inserted..','status' => true));
            }
            else{
                echo json_encode(array('Message' => 'not inserted','status' => false));
            }
        }
    }
    catch (Exception $ex){
        // print($ex->get_message()."<br>");
        echo json_encode(array('Message' => $ex->get_message(),'status' => false));
    }
?>
