<?php
    $menuItem = 0;
?>
<!--menu bar-->
<div class="w3-row">
    <ul class="w3-navbar w3-border w3-card-4 w3-black">
        <li><a id="menuItem<?php echo $menuItem++?>" class="w3-hover-red" href="index.php">Home</a></li>
        <li class="w3-dropdown-hover w3-hover-red">
            <a id="menuItem<?php echo $menuItem++?>" class="w3-hover-red" href="#">About Us</a>
            <div class="w3-dropdown-content w3-card-4">
                <a class="w3-hover-black" href="history.php">History</a>
                <a class="w3-hover-red" href="vision_mission.php">Vision and Mission</a>
            </div>
        </li>
        <li class="w3-dropdown-hover w3-hover-red">
            <a id="menuItem<?php echo $menuItem++?>" class="w3-hover-red" href="btech.php">Programs</a>
            <div class="w3-dropdown-content w3-card-4">
                <a class="w3-hover-black" href="btech.php">B.Tech</a>
                <a class="w3-hover-red" href="mtech.php">M.Tech</a>
                <a class="w3-hover-black" href="msc.php">M.Sc</a>
            </div>
        </li>
        <li class="w3-dropdown-hover w3-hover-red">
            <a id="menuItem<?php echo $menuItem++?>" class="w3-hover-red" href="#">Academic</a>
            <div class="w3-dropdown-content w3-card-4">
                <a class="w3-hover-black" href="#">Faculties</a>
                <a class="w3-hover-red" href="#">Non-teaching staffs</a>
                <a class="w3-hover-black" href="#">Research Scholars</a>
            </div>
        </li>
        <li class="w3-dropdown-hover w3-hover-red">
            <a id="menuItem<?php echo $menuItem++?>" class="w3-hover-red" href="#">Facilities</a>
            <div class="w3-dropdown-content w3-card-4">
                <a class="w3-hover-black" href="#">Library</a>
                <a class="w3-hover-red" href="#">Laboratories</a>
            </div>
        </li>
        <li class="w3-dropdown-hover w3-hover-red">
            <a id="menuItem<?php echo $menuItem++?>" class="w3-hover-red" href="#">Activities</a>
            <div class="w3-dropdown-content w3-card-4">
                <a class="w3-hover-black" href="#">Placement</a>
                <a class="w3-hover-red" href="#">Events</a>
                <a class="w3-hover-black" href="#">RefleXons</a>
            </div>
        </li>
        <li><a id="menuItem<?php echo $menuItem++?>" class="w3-hover-red" href="contactus.php">Contact Us</a></li>
        <div class="w3-rest w3-right-align">
            <input class="search" type="text" name="search" placeholder="Search...">
        </div>
    </ul>
</div>
<br>