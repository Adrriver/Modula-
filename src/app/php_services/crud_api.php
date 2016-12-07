<?php
	require_once("Rest.inc.php");

	class ModulaAPI extends REST {

		public $data = "";

		const DBServer = "127.0.0.1";
		const DBUser = "root";
		const DBPassword = "01d925a0dc25c0b909e51536316e8697"
		const DB = "modula"

		private $db = NULL;
		private $mysqli = NULL;
		public function __construct(){
			parent::__construct();
			$this->dbConnect();
		}

 		private function dbConnect(){
			$this->mysql = new mysqli(self::DBServer, self::DBUser, 
										self::DBPassword, self::DB);
		}

		public function processRequest(){
			$funct = strtolower(trim(str_replace("/", "", $REQUEST['x'])));
			if((int)method_exists($this, $funct) > 0)
				$this->$funct();
			else
				$this->response('', 404);  
		}
		//author: Craig Swearingen
		private function login(){

			$success = respArray();
			$failed = 0;

			if ($_SERVER['REQUEST_METHOD'] == 'POST') {

 	
			 	if ((!empty($_POST['user'])) && (!empty($_POST['password'])) ) {
			 		if(alreadyRegistered($_POST['user']))
			 		{
			 			if(getHashedPassword($_POST['username']) == md5($_POST['password']))
			 			{
			 				if(isOpen($_POST['user'])) {
			 	  //modula_user ( modula_user_id STRING, user_first STRING, 
			 					//user_last STRING, user_status STRING (fKey  user_status, status), 
			 					//school_code STRING (fKey  school school_code), 
			 					//e_mail STRING (fKey  e_mail_addresses, e_mail)) 
 
			 					$_SESSION['loggedIn'] = true;
			 					$_SESSION['username'] = $_POST['username'];
			 				    $_SESSION['status'] = $attribs->user_status;
			 					$success = loadUser(array('loggedIn'=>$_SESSION['loggedIn'],
			 										 'token'=>$_SESSION['username'],
			 											'username'=>$_SESSION['username']));

			 					return this->response(this->json_encode($success),200);
			 					
			 				} else {
			 					
			 					$failed = array('loggedIn'=>'false','token'=>'NULL',
			 									'status'=>$_POST['username'] . 's account is locked.'
			 													      . '  Please see Help page');
			 					return this->response(this->json_encode($success),200);
			 				}
			 			
			 		   } else
			 			{
			 				echo json_encode(FALSE);
			 			
			 	   }else
			 		{
			 			echo json_encode(FALSE);
			 		
			 		
				} else { // Forgot a field.

			 		echo json_encode(FALSE);
				}

			 } 
}

	
function registerUser(){
	$form_ = json_decode(file_get_contents("php://input"), true);
	$form = $form[0];
	if( !($response = validateCode($form['regist_code']))["valid"] == 'invalid'){
		if( $response["status"] == 'teacher'){
			$username = $form['username'];
			$password = $form['password'];
			$userfirst = $form['first'];
			$userlast = $form['last'];
			$schoolid = $form['id']; 
			$email = $form['email'];
			$status = $form['standing'];

//'".$_SESSION['date_start']."','".$_SESSION['date_end']."','".$_SESSION['adults']."','"

			$add_user = "INSERT '".$username."', '".$password."', '".$userfirst."', '".$userlast."', '".$schoolid."'
						, '".$email."','".$status."' INTO modula_users";
			$add_teacher = "INSERT '".$username."' INTO teachers";
				if(!($add_resp = $this->mysqli->query($add_user))){

				}
					$add_response = $add_resp->fetch_assoc();

				if(!($add_teach_res = $this->mysqli->query($add_teacher))){
				
				}
					
				$success = array('reponse: ' => "Success", "msg" => "Teacher Added!", "data" => $username);
			 	return this->response(this->json_encode($add_response),200);
			 } else {
			 	$username = $form['username'];
				$password = $form['password'];
				$userfirst = $form['first'];
				$userlast = $form['last'];
				$schoolid = $form['id']; 
				$email = $form['email'];
				$teacher = $form['teacher'];
				$code = $form['regist_code'];

				$add_user = "INSERT '".$username."', '".$password."', '".$userfirst."', '".$userlast."', 
							'".$schoolid."', '".$email."' INTO modula_users";
				$get_curr_mod = "SELECT * FROM invited WHERE modId = '".$code."'";
				if(!($add_resp = $this->mysqli->query($add_user))){

				}
					$add_response = $add_resp->fetch_assoc();

				if(!($curr_mod = $this->mysqli->query($get_curr_mod))){

				}
					$mod = $curr_mod->fetch_assoc();
					$mod_ = $mod["modId"]
				$add_student = "INSERT '".$username."', '".$teacher."', '".$mod_."' INTO students"; 

				if(!($add_student_res = $this->mysqli->query($add_student))){

				}
					

				$success = array('reponse: ' => "Success", "msg" => "Student Added!", "data" => $username);
			 	return this->response(this->json_encode($add_response),200);
			 }
			 	return this->$this->response('Something went wrong',404);
}

function validateCode($code){
	$select = "SELECT * FROM invited WHERE code = '".$code."'";
	if(!($val_resp = $this->mysqli->query($select))){

	}
	$response = array();

	if($result->num_rows > 0){
		return "invalid";
		$res = $result->fetch_assoc()
		if($res["status"] == 'teacher'){
			$response["valid"] = TRUE;
			$response["status"] = "teacher";
			return $response;
		} else {
			$response["valid"] = TRUE;
			$response["status"] = "student";
			return $response;
		}
	

}

/* from 'header.php', by Craig Swearingen */

function alreadyRegistered($username) //TODO
{
	$select = "SELECT * FROM modula_users WHERE username='" . $username . "'";
	
		
		if(!($result = $mysqli->query($select))){
  		   $found = FALSE;
		}
		
		if($result->num_rows > 0)
		{
			$found = TRUE;
		}
		
			}
	

	return $found;

}

function getHashedPassword($username) //TODO
{
	$select = "SELECT password FROM modula_users WHERE username='" . $username . "'";
	
		
		if(!($result = $mysqli->query($select))){
  		  
		}
		
		$row =$result->fetch_assoc();
		$str = $row['password'];
		
	
	return $hashed;

}
function getUserStatus() //TODO
{
	$select = "SELECT * FROM modula_users WHERE user_id='" . $userId . "'";
	$dbc = new mysqli('127.0.0.1',DBUser,DBPassword,DB);
	$found = FALSE;	
	$status = "";
	if($dbc->connect_error)
	{
		echo "Connection Failed" . $dbc->connect_error;
	} else
	{
		
		if(!($result = $dbc->query($select))){
  		  
		}
		
		$row =$result->fetch_assoc();
	 	$status = $row->status;
		$result->close();
		$dbc->close();
	}
	
		return $status;

}

function isOpen($username) //TODO
{
	$select = "SELECT standing FROM modula_users WHERE username='" . $username . "'";
	
		
		if(!($result = $dbc->query($select))){
  		  
		}
		
		$row =$result->fetch_assoc();
		$standing = $row['standing'];

	
	
	
	if($standing == "open")
		return TRUE;

	return FALSE;

}

function loadUser($loginSucc, $token, $username){ //TODO

	$prof_row = "";
	$status = getUserStatus($username);

	if($status == 'teacher'){
		$teacher_ = json_decode(file_get_contents("php://input"),true);
		$teacher = $teacher[0];
		$id = (int)$teacher['ID'];
			//teacher (students  STRUCT {name STRING, studentID STRING} , teacherUserId  STRING , 
		    //firstName  STRING , lastName  STRING , registrationDate  DATE , username STRING , selectedStudent Student ) 	
		$select_teach_profile = "SELECT COUNT(*), m.* FROM modula_users As m WHERE m.username = '".$id."'
								 LEFT JOIN (SELECT s.current_module,su.* FROM students As s WHERE '".$id."'= s.teacher
								 INNER JOIN modula_users As m_u WHERE s.username = m_u.username);"

/*			$dbc = new mysqli('127.0.0.1', DBUser, DBPassword, DB);
			$found = FALSE;
			if($dbc->connect_error) {
				echo "Connection Failed" . $dbc->connect_error;
			} else {*/
				if(!($prof_result = $this->mysqli->query($select_teach_profile))){

				}

				$prof_row = $prof_result->fetch_assoc();
				
			
	} else {
		$student_ = json_decode(file_get_contents("php://input"),true);
		$tuple = 
		$student = $student[0];
		$id = (int)$student['id'];
		$select_stud_profile = "SELECT s.*,m.* FROM student AS s WHERE studentUserId = '".$id."' 
								INNER JOIN modula_users AS m WHERE modula_user_id = '".$id."' 
								ON s.studentUserId = m.modula_user_id";
			/*$dbc = new mysqli('127.0.0.1', DBUser, DBPassword, DB);
			$found = FALSE;
			if($dbc->connect_error){
				echo "Connection Failed" . $dbc->connect_error;
			} else {*/
				if(!($prof_result = $this->mysqli->query($select_student_profile))){
					$prof_row = array("Error");
				}

				$prof_row = $prof_result->fetch_assoc();
				
									

	}

	return $prof_row; 
}

function getModperf(){

	$user = json_decode(file_get_contents("php://input"), true);
	$user_last = $user[0]['user_last'];
	$status = $_SESSION['status'];
	$tuples = array();
	if(authorize($username = $user['username'])){ //legal call?
		
		if($status == 'teacher'){
			$teacherId = $_SESSION['username'];

			//$tName = $teacher['teacher'];
			$perf_rows = "SELECT * FROM module_performance WHERE moduleAuthor = '".$username."'
					  GROUPBY date_created";
				if(!($perf_rows_resp = $this->mysqli->query($perf_rows))){
				
						return $this->response('Something went wrong',404);
				
				} else if($perf_rows_resp->num_rows > 0) {
				
					while($row = $perf_rows_resp -> fetch_assoc()){
						$tuples[] = $row;
					}
				
				} else {
							
				}
		 			return $this->response($this->json_encode($tuples),200);

		 } else if($status == 'student'){		 	
		 	$perf_rows = "SELECT * FROM module_performance WHERE student = '".$username."'";

		 	if(!($perf_rows_resp = $this->mysqli->query($perf_rows))){
				
						return $this->response('Something went wrong',404);
				
				} else if($perf_rows_resp->num_rows > 0) {
				
					while($row = $perf_rows_resp -> fetch_assoc()){
						$tuples[] = $row;
					}
				
				} else {
							
				}
		 			return $this->response($this->json_encode($tuples),200);

		 }
 			 	
	}
}


function sendInvitation(){
	$invitation_ = json_decode(file_get_contents("php://input"), true);
	$invitation = $invitation[0];
	if(authorize($invitation['requestor'])){
		$student = $invitation['email'];
		$modId = $invitation['modId'];
		$code = $invitation['code'];
	  	if(!alreadyRegistered($student)){
	  		$first_invite = "INSERT '".$student."', '".$modeId."', '".$code."' INTO invited";
	  	} else {
			$insert_invite = "INSERT $student, $modId"
		}
			return $this->response("Invitation sent!", 200);

			//send e-mail
	}
}

function getStudents(){
	$teacherId = $_SESSION['username'];
	$get_students = "SELECT s.*,u.* FROM students AS s WHERE teacher = '".$teacherId."'
					 JOIN modula_user ON s.username == u.username";
	$tuples = array();
	if(!($get_res = $this->$mysqli->query($get_students))){
		return $this->response("Something went wrong.  Please resubmit", 404);
	}
		if($get_res->num_rows > 0){
			
				while($row = $get_res-> fetch_assoc()){
					$tuples[] = $row;
				}
	} else {
				$tuples[] = ' ';
	}
			return $this->response($this->json_encode($tuples), 200);
}

function authorize($user){
	
	if($user == $_SESSION['username']){
		return true;
	return false;
}

function submit_module(){
	$formWizard_ = json_decode(file_get_contents("php://input"), true);
	$formWizard = $formWizard_[0];
	$teacher_name =  $formWizard['teacher']?
	$teacher_user_id = $_SESSION['username'];
	$class = $formWizard['class'];
	$date_created = $formWizard['modules'];
	$keywords = $formWizard['keywords'];
	$grade = $formWizard['grade'];
	$modules = $formWizard['modules'];
	$questions = NULL;
	$submission_date = $mod_array['date'];


	foreach($modules as $mod){

		$questions = $mod['questions'];
		$mod_name = $mod['modName'];
		$modId = getNewId($mod_name);
		$question_count = $mod['questionCount'];
		$difficulty = $mod['difficulty'];

	//create module
		$new_module = "INSERT INTO modules (modId, mod_title, author, date_cr, diff)
				   VALUES ('".$modId."', '".$mod_name."', '".$teacher_user_id."', '".$date_created."', '".$difficulty)."'";

		if(!($module_add_res = $this->mysqli->query($new_module))){
			return $this->response("Something went wrong", 404);
		}	

		foreach($questions as $item) {
			$question = $item['question']; $corr = $item['correct']; $incorr_a = $item['incorr_a'];
			$incorr_b = $item['incorr_b']; $item['incorr_c']; $moduleId = $modId;
			$insert_quests = "INSERT INTO questions 
							 (id,module,question,corr_answer,incorr_a,incorr_b,incorr_c)
			 				  VALUES ('".$question."', '".$corr."', '".$incorr_a."', '".$incorr_b."', '".$incorr_c."')";
			if(!($submission_res = $this->mysqli->query($insert_quests))){

			}

		}
				$submission_res = $submission_res->fetch_assoc();
				
		    echo $item
		    // to know what's in $item
		    echo '<pre>'; var_dump($item);
			
	}	
		     return $this->response("Success!", 200);
}

function getModules(){
	$teacherId = $_SESSION['username'];
	$get_modules = "SELECT * FROM modules WHERE author = '".$teacherId."'";
	$tuples = array();
	if(!($get_res = $this->$mysqli->query($get_modules))){
		return $this->response("Something went wrong", 404);
	}
		while($row = $get_res->fetch_assoc()){
			$tuples[] = $row;
		}
		$get_response = $get_res->fetch_assoc();
		return $this->response($this->json_encode($tuples), 200);
}

function get_school_info(){
	$teacherId = $_SESSION['username'];
	$get_school_info = "SELECT * FROM schools WHERE school_id = 
						(SELECT school_id FROM modula_users 
						 WHERE username = '".$teacherId."'')";

	if(!($get_res = $this->$mysqli->query($get_school_info))){

	}

		$get_response = $get_res->fetch_assoc();
		return $this->response($this->json_encode($get_response), 200);

}

function getNewId($name){
	$id = substr(sha1($name), 10);
	$available = "SELECT * FROM modules WHERE module_id = '".$id."'"
	if(!(res = $this->mysqli->query($available))){
		$available = TRUE;

	}
	//if(res->num_rows > 0)$is_available($id)){
	if($available){
		return $id;
	} else {
		getNewId($id)
	}
}

$service = new ModulaAPI;
$service -> processAPI();

}
?>


