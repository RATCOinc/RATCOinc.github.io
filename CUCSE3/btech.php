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
    <!div class="w3-row">
        <div class="w3-sidenav w3-black" style="max-width: 150px;">
            <div class="w3-accordion">
                <a onclick="myAccFunc(this)" href="#">B.Tech.</a>
                <div class="w3-accordion-content w3-white w3-card-4">
                    <a href="btech.php" class="w3-grey">About</a>
                    <a href="#">Semesters</a>
                    <a href="#">Syllabus</a>
                </div>
                <br>
                <a onclick="myAccFunc(this)" href="#">M.Tech.</a>
                <div class="w3-accordion-content w3-white w3-card-4">
                    <a href="mtech.php">About</a>
                    <a href="#">Semesters</a>
                    <a href="#">Syllabus</a>
                </div>
                <br>
                <a onclick="myAccFunc(this)" href="#">M.Sc.</a>
                <div class="w3-accordion-content w3-white w3-card-4">
                    <a href="msc.php">About</a>
                    <a href="#">Semesters</a>
                    <a href="#">Syllabus</a>
                </div>
                <br>
            </div>
        </div>
        <!--div class="w3-col s2 m2 l2">&nbsp;</div-->
        <div class="w3-container w3-card-4 w3-white" style="margin-left: 160px;">
            Eligibity:
            For admission to 3-year B.Tech. courses of the Faculty of Technology, a candidate must have HONOURS of this University in the Computer Science/Physics/Mathematics/Statistics at the graduation level are eligible. Notifications inviting applications for admission appear in the leading newspapers of Kolkata immediately after the publication of results of the B.A./B.Sc./B.Com. Hons. final examinations of this University. Admission is made on merit on the results of the current year's examination of this University. A limited number of seats are reserved for students of other universities who have obtained first class honours degree during the current year. A quota for S.C./ S.T. students is also available. For further details of this Secretary of Faculty Councils may be contacted.

            Application:
            - Application forms for the admission to CUCSE, Kolkata are distributed among the candidates from Rajabazar Science College Campus.

            Selection:
            - Selection is strictly in order of merit. B.Sc.(Hons.) in Computer Science are eligible. Intake capacity of CUCSE for BTECH course is 30.

            Facilities of Study for Foreign Students:
            Foreign students are welcome to study under the University of Calcutta either at postgraduate or undergraduate level provided they have student Visa and are otherwise eligible for the purpose. In such cases, their applications along with relevant papers must be sponsored through their respective Embassies/High Commissions supported by ‘no objection' clearance from the Ministry of External Affairs, Govt. of India.
        </div>
    </div>

    <?php
        require('page_parts/footer.php');
    ?>
    <script type="text/javascript">
        menuItemIndex = 1;
        document.getElementById("menuItem"+menuItemIndex).className = "w3-brown w3-hover-red";
    </script>

<?php
    require('page_parts/sidemenu_open.php');
?>
</body>
</html>