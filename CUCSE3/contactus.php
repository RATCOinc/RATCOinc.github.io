<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <?php
        require('page_parts/header.php');
    ?>

</head>
<body>
<?php
        require('page_parts/banner.php');
        require('page_parts/menu.php');
?>
<!--google map popup-->
<div id="map_modal" class="w3-modal">
    <div class="w3-modal-content w3-animate-zoom" style="width:520px;height:420px;">
        <div class="w3-container w3-black">
            <span onclick="document.getElementById('map_modal').style.display='none'" class="w3-closebtn">&times;</span>
            CUCSE
        </div>
        <div class="w3-container" id="map_frame">

        </div>
        <!--div class="w3-container w3-teal">
            <p>Modal Footer</p>
        </div-->
    </div>
</div>
<br>
<div class="w3-row w3-black w3-card-4">
    <div class="w3-col s12 m12 l6">
        <div class="w3-margin-8">
            Department of Computer Science and Engineering<br>
            Calcutta University Technology Campus<br>
            JD-3, JD Block, Sector III<br>
            Kolkata - 700098<br>
            West Bengal, India<br>
            Phone: 033 2241 0071
        </div>
    </div>
    <div class="w3-col s12 m12 l2">
        <div class="w3-margin-8">
            <button onclick="loadMap();" class="w3-btn w3-hover-red">
                Locate on map
                <br>
                <img src="pic/gmap.png">
            </button>
        </div>
    </div>
    <div class="w3-col s12 m12 l4">
        <div class="w3-right-align w3-margin-8 w3-margin-top">
            <br>Copyright &copy; 2016<br>
            <b>CUCSE</b><br>
            All Rights Reserved
        </div>
    </div>
</div>
<script type="text/javascript">
    function loadMap() {
        document.getElementById('map_modal').style.display='block';
        document.getElementById("map_frame").innerHTML = '<iframe src="map.html" height="380px" width="500px"></iframe>';
//            var xhttp = new XMLHttpRequest();
//            xhttp.onreadystatechange = function() {
//                if (xhttp.readyState == 4 && xhttp.status == 200) {
//                    document.getElementById("map_frame").innerHTML = '<iframe height="380px" width="500px">'
//                                    +xhttp.responseText+'</iframe>';
//                    console.log(xhttp.responseText);
//                }
//            };
//            xhttp.open("GET", "map.html", true);
//            xhttp.send();
    }
</script>
<script type="text/javascript">
    menuItemIndex = 5;
    document.getElementById("menuItem"+menuItemIndex).className = "w3-brown w3-hover-red";
</script>

</body>
</html>
