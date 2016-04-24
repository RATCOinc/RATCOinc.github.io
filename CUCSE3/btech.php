<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/html">
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

    <!--main content-->
    <?php
        require('page_parts/generate_sidemenu.php');
    ?>
        <!--div class="w3-col s2 m2 l2">&nbsp;</div-->
    <div class="w3-container w3-card-4 w3-white w3-padding-8" style="margin-left: 160px;">
        <?php
            require('page_parts/program_objectives.php');
        ?>
        <br>
        <?php
            require('page_parts/program_outcome.php');
        ?>
    </div>

    <?php
        require('page_parts/footer.php');
    ?>
    <script type="text/javascript">
        menuItemIndex = 2;
        document.getElementById("menuItem"+menuItemIndex).className = "w3-brown w3-hover-red";
    </script>

<?php
    require('page_parts/sidemenu_open_close_script.php');
?>
</body>
</html>