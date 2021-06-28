sleepTime = 500;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function canvasInit() {
    var canvas = document.getElementById('draw');
    if (!canvas.getContext)
        return;
    
    // var ctx = canvas.getContext('2d'); 
    // canvas.width = canvas.height = window.innerWidth*0.8;
    canvas.height = canvas.width;
    // canvas.height = window.innerWidth;
}

window.onload = function() {
    canvasInit()
};

window.onresize = function() {
    canvasInit()
};

function draw() {
    var canvas = document.getElementById('draw');
    if (!canvas.getContext)
        return;
    
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = canvas.width; //hack
    // ctx.canvas.width  = window.innerWidth;
    // ctx.canvas.height = window.innerWidth;

    // console.log(window.innerWidth);
    ctx.fillStyle = "#FF0000";
    
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    // var R = 45;
    // ctx.beginPath();
    // ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = '#FF0000';
    // ctx.stroke();
    
    ctx.translate(X, Y);
    
    scale = ctx.canvas.width / 50;
    ctx.scale(scale, scale);

    // ctx.beginPath();
    // ctx.fillRect(X,Y,3,3);
    // ctx.fillRect(X+10,Y+10,3,3);
    // ctx.stroke();

    
    xc = document.getElementById('xc').value;
    yc = document.getElementById('yc').value;
    r = document.getElementById('r').value;

    midpoint_circle_ver1(xc, yc, r, ctx);
}

function buildRowString(values, tag='td') {
    var str = '<tr>';
    for (const value of values) {
        str += '<' + tag + '>' + value + '</' + tag + '>';
    }
    str += '</tr>';
    return str;
}

// function initTable1() {
//     table1 = document.getElementById("table1");
//     const headers = ['iteration<br />#', 'd<sub>old</sub>', 'case', 'Δd<sub>E</sub>', 'Δd<sub>SE</sub>', 'd<sub>new</sub>', 'point<br />x, y']
    
//     table1.innerHTML = buildRowString(headers, 'th');

//     table1.classList.add("myBorder");
//     // table1.style.border = '1px solid white';

//     return table1;
// }

function draw_circle(x, y, xc, yc, ctx, table2) {
    // ctx.beginPath();
    ctx.fillRect(x,y,1,1);
    // ctx.fillRect(X+10,Y+10,3,3);
    // ctx.stroke();
}

async function midpoint_circle_ver1(xc, yc, r, ctx) {
    table1 = document.getElementById("table1");
    const headers = ['iter<br />#', 'd<sub>old</sub>', 'case', 'Δd<sub>E</sub><br />2x+3', 'Δd<sub>SE</sub><br />2(x-y)+5', 'd<sub>new</sub>', 'point<br />x, y']
    tbody1 = buildRowString(headers, 'th');
    table1.innerHTML = tbody1;
    table1.classList.add("myBorder");
    
    table2 = document.getElementById("table2");
    // const headers = ['iter<br />#', 'd<sub>old</sub>', 'case', 'Δd<sub>E</sub><br />2x+3', 'Δd<sub>SE</sub><br />2(x-y)+5', 'd<sub>new</sub>', 'point<br />x, y']
    // tbody2 = buildRowString(headers, 'th');
    // table2.innerHTML = tbody2;
    // table2.classList.add("myBorder");
    
    var x = 0;
    var y = r;
    var d = 1-r;

    await sleep(sleepTime);
    
    draw_circle(x, y, xc, yc, ctx, table2);
    var i = 0;
    row = [i++, '-', '-', '-', '-', '1-R='+d, 0+', R='+r]
    tbody1 += buildRowString(row);
    table1.innerHTML = tbody1;


    while(y > x) { //2nd octant
        await sleep(sleepTime);

        row = [i++, d, '-', '-', '-', '-', '-']
        
        if (d <= 0) { //east
            row[2] = '&le;0, East';
            row[3] = `2(${x})+3=${2*x + 3}`;
            row[5] = `${d}+(${2*x + 3})=${d + 2*x + 3}`;
            row[6] = `${x}+1=${x+1}, ${y}`;
            d += 2*x + 3;
        } else { //south-east
            row[2] = '&gt;0, SouthEast';
            row[4] = `2(${x}-${y})+5=${2*(x-y) + 5}`;
            row[5] = `${d}+(${2*(x-y) + 5})=${d + 2*(x-y) + 5}`;
            row[6] = `${x}+1=${x+1}, ${y}-1=${y-1}`;
            d += 2*(x-y) + 5;
            y--;
        }
        x++;
        draw_circle(x, y, xc, yc, ctx, table2);
        tbody1 += buildRowString(row);
        table1.innerHTML = tbody1;
    }
}