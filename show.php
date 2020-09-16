<?php
$con=mysqli_connect("localhost","root","prachi","mydatabase");

if(array_key_exists("view_btn",$_POST))
{
	$sql="select * from registration_details";
	$con = mysqli_connect("localhost","root","Prachi_Patil","reg_db") or die("connection not established");
    
    $i=0;

	if($con==false)
		print("ERROR:".mysqli_connect_error());
	else
	{
		$result_set=mysqli_query($con,$sql);
		if(mysqli_num_rows($result_set)>0)
		{
			while(true)
			{
                $arr[$i]=mysqli_fetch_array($result_set);
                $i++;
				if($arr==false)
					break;	
			}			
		}
		else
		{
			print("Table is empty<br/>");
		}
		mysqli_close($con);
	}
}
?>