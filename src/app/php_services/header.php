<?php
session_start();
$filePath = "../users/";
$host = "127.0.0.1";
$user = "web_user";
$password = "webpassword";
$db = "fanclub";

function alreadyRegistered( $username)
{
	$select = "SELECT * FROM users WHERE username='" . $username . "'";
	$dbc = new mysqli('127.0.0.1','web_user' ,'webpassword', 'fanclub');
	$found = FALSE;
	if($dbc->connect_error)
	{
		echo "Connection Failed" . $dbc->connect_error;
	} else
	{
		
		if(!($result = $dbc->query($select))){
  		  
		}
		
		if($result->num_rows > 0)
		{
			$found = TRUE;
		}
		$result->close();
		$dbc->close();
	}
	

	return $found;

}

function getHashedPassword($username)
{
	$select = "SELECT password FROM users WHERE username='" . $username . "'";
	$dbc = new mysqli('127.0.0.1','web_user' ,'webpassword', 'fanclub');
	$found = FALSE;
	$str = "";
	if($dbc->connect_error)
	{
		echo "Connection Failed" . $dbc->connect_error;
	} else
	{
		
		if(!($result = $dbc->query($select))){
  		  
		}
		
		$row =$result->fetch_assoc();
		$str = $row['password'];
		$result->close();
		$dbc->close();
	}
	
	
	return $str;

}
function isAdmin($username)
{
	$select = "SELECT admin FROM users WHERE username='" . $username . "'";
	$dbc = new mysqli('127.0.0.1','web_user' ,'webpassword', 'fanclub');
	$found = FALSE;
	$str = "";
	if($dbc->connect_error)
	{
		echo "Connection Failed" . $dbc->connect_error;
	} else
	{
		
		if(!($result = $dbc->query($select))){
  		  
		}
		
		$row =$result->fetch_assoc();
		$str = $row['admin'];
		$result->close();
		$dbc->close();
	}
	
	
	if($str == "y")
		return true;

	return false;

}

function isOpen($username)
{
	$select = "SELECT status FROM users WHERE username='" . $username . "'";
	$dbc = new mysqli('127.0.0.1','web_user' ,'webpassword', 'fanclub');
	$found = FALSE;
	$str = "";
	if($dbc->connect_error)
	{
		echo "Connection Failed" . $dbc->connect_error;
	} else
	{
		
		if(!($result = $dbc->query($select))){
  		  
		}
		
		$row =$result->fetch_assoc();
		$str = $row['status'];
		$result->close();
		$dbc->close();
	}
	
	
	if($str == "open")
		return true;

	return false;

}
?>


