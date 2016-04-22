<script>
    var lastOpened = null;
    function myAccFunc(accordian) {
        var x = accordian.nextElementSibling;//document.getElementById("demoAcc");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-brown";
        } else {
            x.className = x.className.replace(" w3-show", "");
            x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" w3-brown", "");
            x = null;
        }

        if(lastOpened) {
            y=lastOpened;
            y.className = y.className.replace(" w3-show", "");
            y.previousElementSibling.className =
                y.previousElementSibling.className.replace(" w3-brown", "");
        }
        lastOpened = x;
        return false;
    }

    //        function myDropFunc() {
    //            var x = document.getElementById("demoDrop");
    //            if (x.className.indexOf("w3-show") == -1) {
    //                x.className += " w3-show";
    //                x.previousElementSibling.className += " w3-green";
    //            } else {
    //                x.className = x.className.replace(" w3-show", "");
    //                x.previousElementSibling.className =
    //                    x.previousElementSibling.className.replace(" w3-green", "");
    //            }
    //        }
</script>
<script type="text/javascript">
    sidemenu = document.getElementsByClassName('w3-sidenav')[0];
    links = sidemenu.getElementsByTagName('a');
    for (var i=0; i<links.length; i++) {
        if (links[i].getAttribute('href') == document.URL.split('/').pop().split('#')[0]) {
            links[i].parentNode.previousElementSibling.click();
            break;
        }
    }
</script>