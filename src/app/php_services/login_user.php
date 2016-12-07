<?php 
 define('TITLE', 'Login');
 include('header.php');






 if ($_SERVER['REQUEST_METHOD'] == 'POST') {

 	
 	if ((!empty($_POST['user'])) && (!empty($_POST['password'])) ) {
 		if(alreadyRegistered($_POST['user']))
 		{
 			if(getHashedPassword($_POST['user']) == md5($_POST['password']))
 			{
 				if(isOpen($_POST['user']))
 				{
 					$_SESSION['loggedIn'] = true;
 					$_SESSION['user'] = $_POST['user'];
 					if(isAdmin($_POST['user']))
 						$_SESSION['admin'] = true;
 					header("Location: index.php");
 				}
 				else
 				{
 					echo '<p>Your account has be locked.</p>';
 				}
 			}
 			else
 			{
 				echo '<p>You have enter the wrong username and/or password.</p>';
 			}
 		}else
 		{
 			echo '<p>You have enter the wrong username and/or password.</p>';
 		}
 		
	} else { // Forgot a field.

 		print '<p>Please make sure you
		enter both an email address and
		a password!<br />Go back and try
		again.</p>';
	}

 }
 else
 {

	print '<form action="login.php" method="post">
 	<p>User Name: <input type="text" name="user" size="20" /></p>
 	<p>Password: <input type="password" name="password" size="20" /></p>
	<p><input type="submit" name="submit" value="Log In!" /></p>
 	</form>';

 }

 include('footer.php');
 ?>
/* user login */
