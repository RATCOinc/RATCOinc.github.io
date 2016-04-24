<script>
    var lastOpened = null;
    function myAccFunc1(accordian) {
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

    var lastOpened2 = null;
    function myAccFunc2(accordian) {
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

        if(lastOpened2) {
            y=lastOpened2;
            y.className = y.className.replace(" w3-show", "");
            y.previousElementSibling.className =
                y.previousElementSibling.className.replace(" w3-brown", "");
        }
        lastOpened2 = x;
        return false;
    }

    var lastOpened3 = null;
    function myAccFunc3(accordian) {
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

        if(lastOpened3) {
            y=lastOpened3;
            y.className = y.className.replace(" w3-show", "");
            y.previousElementSibling.className =
                y.previousElementSibling.className.replace(" w3-brown", "");
        }
        lastOpened3 = x;
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
//    sidemenu = document.getElementsByClassName('w3-sidenav')[0];
//    links = sidemenu.getElementsByTagName('a');
//    for (var i=0; i<links.length; i++) {
//        if (links[i].getAttribute('href') == document.URL.split('/').pop().split('#')[0]) {
//            links[i].parentNode.previousElementSibling.click();
//            links[i].className = "w3-grey";
//            break;
//        }
//    }
</script>
<script type="text/javascript">
    function expand_menu(nodes) {
        var found = false;
        for (var i=0; i<nodes.length; i++) {
//            console.log(nodes[i].tagName);
            if (nodes[i].tagName == 'A') {
                if (nodes[i].getAttribute('href') == document.URL.split('/').pop().split('#')[0]) {
                    nodes[i].className = "w3-grey";
                    found = true; //found
                }
            } else if (nodes[i].tagName == 'DIV') {
                if (nodes[i].className.indexOf("w3-accordion-content") >= 0) { //exists
                    found = expand_menu(nodes[i].children); //see if found in lower level
                }
            }
            if (found) { //this branch contains the URL? then expand
                nodes[i].parentNode.previousElementSibling.click(); //see side-menu structure
                return found;
            }
        }
    }
    sidemenu = document.getElementsByClassName('w3-accordion')[0];
    nodes  = sidemenu.children;
    expand_menu(nodes);
</script>