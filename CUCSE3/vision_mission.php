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
    <div class="w3-row">
        <div class="w3-col w3-card-4 w3-white w3-padding-8 w3-container w3-animate-zoom">
            <b>Our Vision</b>
            <br><br>
            The Department aims to take a pioneering role in disseminating knowledge related to Computer Science & Engineering in the national context and foster international standard R&D activities through active collaboration with reputed Universities and institutes. The intent is to emerge as a model of excellence for challenging, learner-centric academic activities that will be achieved with the highest level of intellectual excellence, embracing diversity, and inspiring confidence to undertake wide range of collaborative research.

        </div>
    </div>
    <br>
    <div class="w3-row">
        <div class="w3-col w3-card-4 w3-white w3-padding-8 w3-container w3-animate-zoom">
            <b>Our Mission</b>
            <br>
            <ul>
                <li>To create highest standards of excellence in teaching, research and knowledge development built on strong foundations through rigorous and internationally compliant curriculum.</li>
                <li>To create manpower towards intellectual leadership for the society with a strong bend of mind for quality research in the core areas of Computer Science and Engineering.</li>
                <li>To create competent man power with deep awareness on ethics, skills and leadership qualities essential for the professionals as well as for the society by and large.</li>
                <li>To provide the technical knowledge and soft skills required for success in professional life, career.</li>
            </ul>
        </div>
    </div>


    <?php
        require('page_parts/footer.php');
    ?>

    <script type="text/javascript">
        menuItemIndex = 1;
        document.getElementById("menuItem"+menuItemIndex).className = "w3-brown w3-hover-red";
    </script>
</body>
</html>