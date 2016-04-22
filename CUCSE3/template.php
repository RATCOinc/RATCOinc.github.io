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
        require('page_parts/footer.php');
    ?>

    <script type="text/javascript">
        menuItemIndex = 0;
        document.getElementById("menuItem"+menuItemIndex).className = "w3-brown w3-hover-red";
    </script>
</body>
</html>