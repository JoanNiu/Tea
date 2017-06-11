<?php
    header("Content-Type:application/json;charset=utf-8");
    $did=$_REQUEST["did"];
    require("init.php");
    $sql="select * from tea_dish where did=$did";
    $result=mysqli_query($conn,$sql);
    $row= mysqli_fetch_assoc($result);
    $str = json_encode($row);
    echo $str;
?>
