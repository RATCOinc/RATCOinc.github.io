<!div class="w3-row">
<?php
    $file = fopen("page_programs/sidemenu", "r") or die("Unable to open file!");
?>
<div class="w3-sidenav w3-black" style="max-width: 150px;">
    <div class="w3-accordion">

<?php
    function create_menu($file, $level) {
        while(!feof($file)) {
            $line = trim(fgets($file));
            if (strcmp($line, "-end") == 0)
                return;
            $strs = explode("-", $line);
            $url = trim(fgets($file));
            if (sizeof($strs) > 1) { //expandable
                echo '<a onclick="myAccFunc'.$level.'(this)" href="'.$url.'">'.$strs[0].'</a>';
                echo '<div class="w3-accordion-content w3-white w3-card-4" style="padding-left: 10px;">';
                create_menu($file, $level+1);
                echo '</div>';
            } else { //non-expandable
                echo '<a href="'.$url.'">'.$strs[0].'</a>';
            }
        }
    }

    create_menu($file, 1);
/*
    while (!feof($file)) {
        $line = trim(fgets($file));
        $strs = explode("-", $line);
        if (sizeof($strs) > 1) { //expandable
            echo '<a onclick="myAccFunc(this)" href="#">'.$strs[0].'</a>';
            echo '<div class="w3-accordion-content w3-white w3-card-4" style="padding-left: 10px;">';
            $i=0;
            while($i<3) {
                $line = trim(fgets($file));
                $strs = explode("-", $line);
                if (strcmp($line, "-end") == 0)
                    break;
                echo '<a href="#">'.$line.'</a>';
                $i++;
            }
            echo '</div>';
        } else { //non-expandable
            echo '<a href="#">'.$strs[0].'</a>';
        }


//        echo '<li class="w3-hover-red"><a href="' . $link . '">' . $desc . '</a></li>';
    }
*/

?>

<?php
    fclose($file);
?>
    </div>
</div>