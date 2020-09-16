<?php
    $name = "prachi";
    $address = "my adresse";
    $clg_name = "MIT";
    $mobile = "9874737372";
    $sub = "subject";
    $email = "email@gamil.com";
    $sex = "Female";
    $lang = "English";
    try{
        $con = mysqli_connect("localhost","root","Prachi_Patil","reg_db") or die("connection not established");

    if($con==false){
        print("ERROR : ".mysqli_connect_error()."<br>");
    }
    else{
        $sql = "insert into registration_details value(?,?,?,?,?,?,?,?)";
        $ps = mysqli_prepare($con, $sql);
        if($ps!=false){
            mysqli_stmt_bind_param($ps,"s",$name);
            mysqli_stmt_bind_param($ps,"s",$address);
            mysqli_stmt_bind_param($ps,"s",$clg_name);
            mysqli_stmt_bind_param($ps,"s",$mobile);
            mysqli_stmt_bind_param($ps,"s",$email);
            mysqli_stmt_bind_param($ps,"s",$sex);
            mysqli_stmt_bind_param($ps,"s",$lang);

            mysqli_stmt_execute($ps);
            
            $n = mysqli_stmt_affected_rows($ps);
            mysqli_stmt_close($ps);
            mysqli_close($con);

            if($n == 1){
                print("<font face='calibri' size='5pt' color='green'>Data Saved</font>");

            }
            else{
                mysqli_close($con);
                print("Prepared Statement is not created<br>");
            }
        }
    }
    
    }
    catch (Exception $ex){
        print($ex->get_message()."<br>");
    }
?>