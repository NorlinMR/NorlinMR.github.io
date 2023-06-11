# NorlinMR.github.io
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
</head>

<body class="body">
    <div id="Main">
        <div id="header">
            <p id="ht">Game of Colors</p>
        </div>
        <div id="container">
            <div id="p1"> <br> Welcome to the color game, you have 9 attempts
                <br> to form at least one of the following shapes,


                <ol>
                    <li>Horizontal line of at least one color..</li>
                    <li>Vertical line of at least one color.</li>
                    <li>Diagonal line of at least one color.</li>
                    <li>You must use your nine attempts.</li>
                </ol>

                <br>You only get one try per number good luck and have fun.
                <button>Start</button>
            </div>
            <div id="p2">
                <center>
                    <div class="pp2">
                        <div id="row1">
                            <div id="n1"><button id="b1"
                                    onclick="random_item(),change_colors_b1('n1','n2','n3','b1');">1</button></div>
                            <div id="n2"><button id="b2"
                                    onclick="random_item(),change_colors_b1('n1','n2','n3','b2');">2</button></div>
                            <div id="n3"><button id="b3"
                                    onclick="random_item(),change_colors_b1('n1','n2','n3','b3');">3</button></div>
                        </div>
                        <div id="row2">

                            <div id="n4"><button id="b4"
                                    onclick="random_item(),change_colors_b1('n4','n5','n6','b4');">4</button></div>
                            <div id="n5"><button id="b5"
                                    onclick="random_item(),change_colors_b1('n4','n5','n6','b5');">5</button></div>
                            <div id="n6"><button id="b6"
                                    onclick="random_item(),change_colors_b1('n4','n5','n6','b6');">6</button></div>
                        </div>
                        <div id="row3">

                            <div id="n7"><button id="b7"
                                    onclick="random_item(),change_colors_b1('n7','n8','n9','b7');">7</button></div>
                            <div id="n8"><button id="b8"
                                    onclick="random_item(),change_colors_b1('n7','n8','n9','b8');">8</button></div>
                            <div id="n9"><button id="b9"
                                    onclick="random_item(),change_colors_b1('n7','n8','n9','b9');">9</button></div>
                        </div>
                    </div>
                </center>
            </div>
            <div id="p3">
                <h1><label for=""><br>You only get one try per number good luck and have fun.</label></h1>
            </div>

        </div>

    </div>
    <script src="./script.js"></script>
</body>

</html>
