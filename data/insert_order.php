<?php
    header("Content-Type:application/json;charset=utf-8");
    $did=$_REQUEST["did"];
    $userName=$_REQUEST["user_name"];
    $gender=$_REQUEST["gender"];
    $phone=$_REQUEST["phone"];
    $addr=$_REQUEST["addr"];
    $orderTime=time()*1000;

    if(empty($userName)||empty($gender)||empty($phone)||empty($addr)||empty($did)){
        echo "[]";
        return;
    }
    require("init.php");
    $sql="INSERT INTO tea_order VALUES(null,$phone,'$userName',$gender,$orderTime,'$addr',$did)";
    $result=mysqli_query($conn,$sql);
    $output=[];
    if($result){
        $arr["msg"]="success";
        $arr["oid"]=mysqli_insert_id($conn);

        $output[]=$arr;
    }else{
        $arr["msg"]="error";
        $output[]=$arr;
    }
    echo json_encode($output);
?>