<?php
    header("Content-Type:application/json;charset=utf-8");
    $kw=$_REQUEST["kw"];
    if(empty($kw)){
        echo '[]';
        return;
    }
    require("init.php");
    $sql="SELECT did,name,price,img_sm,intro FROM tea_dish WHERE name LIKE '%龙井%' OR detail LIKE '%龙井%'";
    $sql.=" FROM tea_dish";
    $sql.=" WHERE name LIKE '%$kw%' OR detail LIKE '%$kw%'";
    $result=mysqli_query($conn,$sql);
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $str = json_encode($rows);
    echo $str;
?>
