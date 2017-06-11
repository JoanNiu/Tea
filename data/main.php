<?php
    header("Content-Type:application/json;charset=utf-8");
    $start=$_REQUEST["start"];
    require("init.php");
    $sql="SELECT did,name,price,img_sm,intro";
    $sql.=" FROM tea_dish LIMIT 0,$start";
    $result=mysqli_query($conn,$sql);
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $str = json_encode($rows);
    echo $str;
?>
