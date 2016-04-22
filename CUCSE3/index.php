<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/html">
<head>
    <?php
        require('page_parts/header.php');
    ?>


    <!--https://msdn.microsoft.com/en-us/library/hh920769(v=vs.85).aspx-->
    <!--script src="http://samples.msdn.microsoft.com/workshop/samples/imageslideshow/slideshow.js"></script-->
    <script type="text/javascript" src="js/slideshow.js"></script>
</head>
<body>
    <?php
        require('page_parts/banner.php');
        require('page_parts/menu.php');
    ?>
    <!--main content-->
    <div class="w3-row">
        <div class="w3-col s12 m12 l8">
            <div id="slideShowImages" style="width: 100%; height: 300px;">
               <img src="pic/slide/0.jpg"/>
               <img src="pic/slide/1.jpg"/>
               <img src="pic/slide/2.jpg"/>
            </div>
        </div>
        <div class="w3-col s12 m12 l4">
            <div class="w3-card-4 w3-white" style="margin-left: 20px">
                <ul class="w3-ul w3-center">
                    <li><h3>NEWS AND EVENTS</h3></li>
                    <?php
                        $myfile = fopen("events", "r") or die("Unable to open file!");
                        for($i=0;$i<6 and !feof($myfile);$i++) {
                            $desc = fgets($myfile);
                            $link = fgets($myfile);
                            echo '<li class="w3-hover-red"><a href="' . $link . '">' . $desc . '</a></li>';
                        }
                        fclose($myfile);
                    ?>
                </ul>
                <a href="#" class="w3-right">see all</a>

                </div>
            </div>

        </div>
    </div>

    <?php
        require('page_parts/footer.php');
    ?>

    <script>
        var v = document.getElementById("slideShowImages");
        v.style.height = v.clientWidth*9/16;
        console.log(v.clientWidth);
    </script>

    <script type="text/javascript">
        menuItemIndex = 0;
        document.getElementById("menuItem"+menuItemIndex).className = "w3-brown w3-hover-red";
    </script>
</body>
</html>