window.onload = function() {
    var canvas = document.getElementById('draw');
    if (!canvas.getContext)
        return;
    
    // var ctx = canvas.getContext('2d'); 
    canvas.width = canvas.height = window.innerWidth*0.8;
    // canvas.height = window.innerWidth;
}

function draw() {
    var canvas = document.getElementById('draw');
    if (!canvas.getContext)
        return;
    
    var ctx = canvas.getContext('2d'); 
    // ctx.canvas.width  = window.innerWidth;
    // ctx.canvas.height = window.innerWidth;

    console.log(window.innerWidth);
    ctx.fillStyle = "#FF0000";
    
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    // var R = 45;
    // ctx.beginPath();
    // ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = '#FF0000';
    // ctx.stroke();

    ctx.beginPath();
    ctx.fillRect(X,Y,3,3);
    ctx.fillRect(X+10,Y+10,3,3);
    ctx.stroke();

}

function midpoint_circle_ver1(r, ctx, table1, table2) {

}