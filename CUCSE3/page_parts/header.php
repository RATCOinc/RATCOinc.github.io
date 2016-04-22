    <title>CUCSE</title>
    <link rel="icon" href="pic/cu_logo.ico"
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/w3.css">
    <style type="text/css">
        body {
            margin-left: 10%;
            margin-right: 10%;
            background-color: darkgrey;
        }
        /*remove the margins if the device is smaller and in portrait oriented*/
        @media only screen and (max-aspect-ratio: 16/9) {
            body {
                margin-left: 0%;
                margin-right: 0%;
            }
        }
        .search {
            width: 130px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            background-color: white;
            background-image: url('pic/searchicon.png');
            background-position: 10px 10px;
            background-repeat: no-repeat;
            padding: 5px 20px 5px 40px;
            /*padding-left: 40px;*/
            -webkit-transition: width 0.4s ease-in-out;
            transition: width 0.4s ease-in-out;
        }
        .search:focus {
            width: 100%;
        }
        #slideShowImages img {
            width: 100%;
            height: 100%;
        }
    </style>