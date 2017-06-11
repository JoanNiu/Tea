<?php
    header("Content-Type:application/json;charset=utf-8");
    $phone=$_REQUEST["phone"];
    require("init.php");
    $sql="SELECT o.oid,o.did,d.img_sm,o.user_name,o.order_time";
    $sql.=" FROM tea_order o,tea_dish d";
    $sql.=" WHERE o.did=d.did AND o.phone=$phone";
    $result=mysqli_query($conn,$sql);
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $str = json_encode($rows);
    echo $str;
?>
