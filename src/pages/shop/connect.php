<?php
  $username =$_POST['username'];
  $password =$_POST['password'];
  $email=    $_POST['email'];

  //database->test and then ->registration
  $conn= new mysqli('localhost','root','','test');
  if($conn->connect_error){
    die(`Connection Failed :`.$conn->connect_error);
  }else{
    $stmt=$conn->prepare("insert into registration(username,password,email)values(?,?,?)");
    $stmt->bind_param("sss",$username,$password,$email);
    $stmt->execute();
    echo "registration successfull";
    $stmt ->close();
    $conn ->close();
  }
  
  ?>
