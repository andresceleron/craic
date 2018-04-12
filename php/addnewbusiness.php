
<?php
	//variables for the cal_days_in_monthdb connection 
	require("phpsqlsearch_dbinfo.php");
	
	// data from the html page      			  table business structure
	$name = $_POST["businessName"]; 					//name` varchar(50) NOT NULL,
	$email = $_POST["email"]; 						//email` varchar(50) NOT NULL,
	$passw = $_POST["password"]; 						//password` varchar(100) NOT NULL,
	$id_type = $_POST["selected_type"];				//id_business_type_fk  INT(10)
	$id_plan = $_POST["selected_plan"];				//id_plan_fk int(11) NOT NULL,
	$phone = $_POST["phone"]; 						//phone` varchar(25) NOT NULL,
	$address = $_POST["address"]; 			
													//address` varchar(250) NOT NULL,
	$eircode = 'D02 HK35'; 			//$_POST["eircode"]; 					//eircode` varchar(20) NOT NULL,
	$lat = '53.346209'; 				//$_POST["latitude`"]; 						//latitude` decimal(10,8) DEFAULT NULL,
	$lng = '-6.259032'; 				//$_POST["longitude"]; 						//longitude` decimal(10,8) DEFAULT NULL,
	$URL = './img/CCT_logo.png'; 	//$_POST["url"]; 				//URL_profile_pic` varchar(250) DEFAULT NULL, 
	
	$connection=mysqli_connect ($servername, $username, $password); 
	if (!$connection) {
	  die("Not connected : " . mysqli_error());	}
	
	// Set the active mySQL database
	$db_selected = mysqli_select_db($connection, $database);
	if (!$db_selected) {
	die ("Can\'t use db : " . mysqli_error()); }
  
	
	$sql = "call sp_addnewbusiness('$name', '$email', '$passw', '$id_type', '$id_plan', '$phone', 
			'$address', '$eircode', '$lat', '$lng', '$URL')"; 
	$result = mysqli_query($connection,$sql);

	if (!$result) {
	  die("Invalid query: " . mysqli_error($connection));
	}
	else { 
		echo "New business created successfully";
	}	
	
	mysqli_close($connection);

	
?>





