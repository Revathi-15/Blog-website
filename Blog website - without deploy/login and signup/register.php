<?php
include 'connect.php';

if(isset($_POST['signUp'])){
$firstName = isset($_POST['FirstName']) ? $_POST['FirstName'] : '';
    $lastName=$_POST['LastName'];
    $email=$_POST['Email'];
    $password=$_POST['Password'];
    $password=md5($password);

     $checkEmail="SELECT * From new_users where Email='$email'";
     $result=$conn->query($checkEmail);
     if($result->num_rows>0){
        echo "Email Address Already Exists !";
     }
     else{
        $insertQuery="INSERT INTO new_users(FirstName,LastName,Email,Password)
                       VALUES ('$firstName','$lastName','$email','$password')";
            if($conn->query($insertQuery)==TRUE){
                header("location: ../home/index.php");
                exit();
            }
            else{
                echo "Error:".$conn->error;
            }
     }
}

if(isset($_POST['signIn'])){
   $email=$_POST['Email'];
   $password=$_POST['Password'];
   $password=md5($password) ;
   
   $sql="SELECT * FROM new_users WHERE Email='$email' and Password='$password'";
   $result=$conn->query($sql);
   if($result->num_rows>0){
    session_start();
    $row=$result->fetch_assoc();
    $_SESSION['Email']=$row['Email'];
    header("Location: ../home/index.php");
    exit();
   }
   else{
    echo "Not Found, Incorrect Email or Password";
   }
}
?>