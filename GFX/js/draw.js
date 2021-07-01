sleepTime = 500;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function canvasInit() {
    var canvas = document.getElementById('draw');
    if (!canvas.getContext)
        return;
    
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

    
    algo = document.getElementById('algo').value;
    

    switch (algo) {
        case 'line_dda':
            // xc = Number(document.getElementById('xc').value);
            // yc = Number(document.getElementById('yc').value);
            // r = Number(document.getElementById('r').value);
            // midpoint_circle_ver1(xc, yc, r, ctx);
            return; //to avoid printing center point
        case 'circle_m1':
            xc = Number(document.getElementById('xc').value);
            yc = Number(document.getElementById('yc').value);
            r = Number(document.getElementById('r').value);
            midpoint_circle_ver1(xc, yc, r, ctx);
            break;
        case 'circle_m2':
            xc = Number(document.getElementById('xc').value);
            yc = Number(document.getElementById('yc').value);
            r = Number(document.getElementById('r').value);
            midpoint_circle_ver2(xc, yc, r, ctx);
            break;
        case 'circle_b1':
            xc = Number(document.getElementById('xc').value);
            yc = Number(document.getElementById('yc').value);
            r = Number(document.getElementById('r').value);
            Bresenham_circle_ver1(xc, yc, r, ctx);
            break;
        case 'circle_b2':
            xc = Number(document.getElementById('xc').value);
            yc = Number(document.getElementById('yc').value);
            r = Number(document.getElementById('r').value);
            Bresenham_circle_ver2(xc, yc, r, ctx);
            break;
        case 'ellipse_m1':
            xc = Number(document.getElementById('xc').value);
            yc = Number(document.getElementById('yc').value);
            a = Number(document.getElementById('a').value);
            b = Number(document.getElementById('b').value);
            midpoint_ellipse_ver1(xc, yc, a, b, ctx);
            break;
        default:
            break;
    }

    ctx.fillRect(0,0,1,1);
    ctx.font = "3px Monospace";
    ctx.fillText(`(${xc},${yc})`, 1, 1);
}

function buildRowString(values, tag='td') {
    var str = '<tr>';
    for (const value of values) {
        str += '<' + tag + '>' + value + '</' + tag + '>';
    }
    str += '</tr>';
    return str;
}

function draw_circle(x, y, xc, yc, ctx, table2) {
    // ctx.beginPath();
    dx = [1, -1, -1, 1];
    dy = [1, 1, -1, -1];

    tmp = [`${x},${y}`]
    for (let i = 0; i < 4; i++) {
        ctx.fillRect(dx[i]*x,dy[i]*y,1,1);
        ctx.fillRect(dx[i]*y,dy[i]*x,1,1);

        tmp[2*i+1] = `${dx[i]*x}+${xc}=${dx[i]*x+xc}, ${dy[i]*y}+${yc}=${dy[i]*y+yc}`;
        tmp[2*i+2] = `${dx[i]*y}+${xc}=${dx[i]*y+xc}, ${dy[i]*x}+${yc}=${dy[i]*x+yc}`;
    }
    return buildRowString(tmp);
    // ctx.fillRect(x,y,1,1);

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
    const headers2 = ['generated point<br />x, y', '2nd octant<br />x+xc, y+yc', '1st octant<br />y+xc, x+yc', '3rd octant<br />-x+xc, y+yc', '4th octant<br />-y+xc, x+yc', '6th octant<br />-x+xc, -y+yc', '5th octant<br />-y+xc, -x+yc', '7th octant<br />x+xc, -y+yc', '8th octant<br />y+xc, -x+yc']
    tbody2 = buildRowString(headers2, 'th');
    table2.innerHTML = tbody2;
    table2.classList.add("myBorder");
    
    var x = 0;
    var y = r;
    var d = 1-r;

    await sleep(sleepTime);
    
    tbody2 += draw_circle(x, y, xc, yc, ctx, table2);
    var i = 0;
    row = [i++, '-', '-', '-', '-', '1-R='+d, 0+', R='+r]
    tbody1 += buildRowString(row);
    table1.innerHTML = tbody1;
    table2.innerHTML = tbody2;

    while(y > x) { //2nd octant
        await sleep(sleepTime);

        row = [i++, d];
        
        if (d <= 0) { //east
            row[2] = '&le;0, East';
            row[3] = `2(${x})+3=${2*x+3}`;
            row[4] = '-';
            row[5] = `${d}+(${2*x+3})=${d + 2*x+3}`;
            row[6] = `${x}+1=${x+1}, ${y}`;
            d += 2*x+3;
        } else { //south-east
            row[2] = '&gt;0, SouthEast';
            row[3] = '-';
            row[4] = `2(${x}-${y})+5=${2*(x-y)+5}`;
            row[5] = `${d}+(${2*(x-y)+5})=${d + 2*(x-y)+5}`;
            row[6] = `${x}+1=${x+1}, ${y}-1=${y-1}`;
            d += 2*(x-y)+5;
            y--;
        }
        x++;
        tbody2 += draw_circle(x, y, xc, yc, ctx, table2);
        tbody1 += buildRowString(row);
        table1.innerHTML = tbody1;
        table2.innerHTML = tbody2;
    }
}

async function midpoint_circle_ver2(xc, yc, r, ctx) {
    table1 = document.getElementById("table1");
    const headers = ['iter #', 'd<sub>old</sub>', 'case', 'd<sub>new</sub>', 'Δd<sub>E</sub>', 'Δd<sub>SE</sub>', 'point x, y']
    tbody1 = buildRowString(headers, 'th');
    table1.innerHTML = tbody1;
    table1.classList.add("myBorder");
    
    table2 = document.getElementById("table2");
    const headers2 = ['generated point<br />x, y', '2nd octant<br />x+xc, y+yc', '1st octant<br />y+xc, x+yc', '3rd octant<br />-x+xc, y+yc', '4th octant<br />-y+xc, x+yc', '6th octant<br />-x+xc, -y+yc', '5th octant<br />-y+xc, -x+yc', '7th octant<br />x+xc, -y+yc', '8th octant<br />y+xc, -x+yc']
    tbody2 = buildRowString(headers2, 'th');
    table2.innerHTML = tbody2;
    table2.classList.add("myBorder");
    
    var x = 0;
    var y = r;
    var d = 1-r;
    var dE = 3;
    var dSE = 5-2*r;

    await sleep(sleepTime);
    
    tbody2 += draw_circle(x, y, xc, yc, ctx, table2);
    var i = 0;
    row = [i++, '-', '-', '1-R='+d, '2*0+3='+dE, '2(0-R)+5='+dSE, 0+', R='+r]
    tbody1 += buildRowString(row);
    table1.innerHTML = tbody1;
    table2.innerHTML = tbody2;

    while(y > x) { //2nd octant
        await sleep(sleepTime);

        row = [i++, d];
        
        if (d <= 0) { //east
            row[2] = '&le;0, East';
            row[3] = `${d}+(${dE})=${d + dE}`;
            row[4] = `${dE}+2=${dE+2}`;
            row[5] = `${dSE}+2=${dSE+2}`;
            row[6] = `${x}+1=${x+1}, ${y}`;
            d += dE;
            dE += 2;
            dSE += 2;
        } else { //south-east
            row[2] = '&gt;0, SouthEast';
            row[3] = `${d}+(${dSE})=${d + dSE}`;
            row[4] = `${dE}+2=${dE+2}`;
            row[5] = `${dSE}+4=${dSE+4}`;
            row[6] = `${x}+1=${x+1}, ${y}-1=${y-1}`;
            d += dSE;
            dE += 2;
            dSE += 4;
            y--;
        }
        x++;
        tbody2 += draw_circle(x, y, xc, yc, ctx, table2);
        tbody1 += buildRowString(row);
        table1.innerHTML = tbody1;
        table2.innerHTML = tbody2;
    }
}

async function Bresenham_circle_ver1(xc, yc, r, ctx) {
    table1 = document.getElementById("table1");
    const headers = ['iter<br />#', 'd<sub>old</sub>', 'case', 'Δd<sub>E</sub><br />4x+6', 'Δd<sub>SE</sub><br />4(x-y)+10', 'd<sub>new</sub>', 'point<br />x, y']
    tbody1 = buildRowString(headers, 'th');
    table1.innerHTML = tbody1;
    table1.classList.add("myBorder");
    
    table2 = document.getElementById("table2");
    const headers2 = ['generated point<br />x, y', '2nd octant<br />x+xc, y+yc', '1st octant<br />y+xc, x+yc', '3rd octant<br />-x+xc, y+yc', '4th octant<br />-y+xc, x+yc', '6th octant<br />-x+xc, -y+yc', '5th octant<br />-y+xc, -x+yc', '7th octant<br />x+xc, -y+yc', '8th octant<br />y+xc, -x+yc']
    tbody2 = buildRowString(headers2, 'th');
    table2.innerHTML = tbody2;
    table2.classList.add("myBorder");
    
    var x = 0;
    var y = r;
    var d = 3-2*r;

    await sleep(sleepTime);
    
    tbody2 += draw_circle(x, y, xc, yc, ctx, table2);
    var i = 0;
    row = [i++, '-', '-', '-', '-', '1-R='+d, 0+', R='+r]
    tbody1 += buildRowString(row);
    table1.innerHTML = tbody1;
    table2.innerHTML = tbody2;

    while(y > x) { //2nd octant
        await sleep(sleepTime);

        row = [i++, d];
        
        if (d <= 0) { //east
            row[2] = '&le;0, East';
            row[3] = `4(${x})+6=${4*x+6}`;
            row[4] = '-';
            row[5] = `${d}+(${4*x+6})=${d + 4*x+6}`;
            row[6] = `${x}+1=${x+1}, ${y}`;
            d += 4*x+6;
        } else { //south-east
            row[2] = '&gt;0, SouthEast';
            row[3] = '-';
            row[4] = `4(${x}-${y})+10=${4*(x-y)+10}`;
            row[5] = `${d}+(${4*(x-y)+10})=${d + 4*(x-y)+10}`;
            row[6] = `${x}+1=${x+1}, ${y}-1=${y-1}`;
            d += 4*(x-y)+10;
            y--;
        }
        x++;
        tbody2 += draw_circle(x, y, xc, yc, ctx, table2);
        tbody1 += buildRowString(row);
        table1.innerHTML = tbody1;
        table2.innerHTML = tbody2;
    }
}

async function Bresenham_circle_ver2(xc, yc, r, ctx) {
    table1 = document.getElementById("table1");
    const headers = ['iter #', 'd<sub>old</sub>', 'case', 'd<sub>new</sub>', 'Δd<sub>E</sub>', 'Δd<sub>SE</sub>', 'point x, y']
    tbody1 = buildRowString(headers, 'th');
    table1.innerHTML = tbody1;
    table1.classList.add("myBorder");
    
    table2 = document.getElementById("table2");
    const headers2 = ['generated point<br />x, y', '2nd octant<br />x+xc, y+yc', '1st octant<br />y+xc, x+yc', '3rd octant<br />-x+xc, y+yc', '4th octant<br />-y+xc, x+yc', '6th octant<br />-x+xc, -y+yc', '5th octant<br />-y+xc, -x+yc', '7th octant<br />x+xc, -y+yc', '8th octant<br />y+xc, -x+yc']
    tbody2 = buildRowString(headers2, 'th');
    table2.innerHTML = tbody2;
    table2.classList.add("myBorder");
    
    var x = 0;
    var y = r;
    var d = 3-2*r;
    var dE = 6;
    var dSE = 10-4*r;

    await sleep(sleepTime);
    
    tbody2 += draw_circle(x, y, xc, yc, ctx, table2);
    var i = 0;
    row = [i++, '-', '-', '3-2R='+d, '4*0+6='+dE, '4(0-R)+10='+dSE, 0+', R='+r]
    tbody1 += buildRowString(row);
    table1.innerHTML = tbody1;
    table2.innerHTML = tbody2;

    while(y > x) { //2nd octant
        await sleep(sleepTime);

        row = [i++, d];
        
        if (d <= 0) { //east
            row[2] = '&le;0, East';
            row[3] = `${d}+(${dE})=${d + dE}`;
            row[4] = `${dE}+4=${dE+4}`;
            row[5] = `${dSE}+4=${dSE+4}`;
            row[6] = `${x}+1=${x+1}, ${y}`;
            d += dE;
            dE += 4;
            dSE += 4;
        } else { //south-east
            row[2] = '&gt;0, SouthEast';
            row[3] = `${d}+(${dSE})=${d + dSE}`;
            row[4] = `${dE}+4=${dE+4}`;
            row[5] = `${dSE}+8=${dSE+8}`;
            row[6] = `${x}+1=${x+1}, ${y}-1=${y-1}`;
            d += dSE;
            dE += 4;
            dSE += 8;
            y--;
        }
        x++;
        tbody2 += draw_circle(x, y, xc, yc, ctx, table2);
        tbody1 += buildRowString(row);
        table1.innerHTML = tbody1;
        table2.innerHTML = tbody2;
    }
}

function draw_ellipse(x, y, xc, yc, swap, ctx, table2) {
    if(swap) {
        x = x+y;
        y = x-y;
        x = x-y;
    }

    // ctx.beginPath();
    dx = [1, -1, -1, 1];
    dy = [1, 1, -1, -1];

    tmp = [`${x},${y}`]
    for (let i = 0; i < 4; i++) {
        ctx.fillRect(dx[i]*x,dy[i]*y,1,1);
        // ctx.fillRect(dx[i]*y,dy[i]*x,1,1);

        tmp[i+1] = `${dx[i]*x}+${xc}=${dx[i]*x+xc}, ${dy[i]*y}+${yc}=${dy[i]*y+yc}`;
        // tmp[2*i+2] = `${dx[i]*y}+${xc}=${dx[i]*y+xc}, ${dy[i]*x}+${yc}=${dy[i]*x+yc}`;
    }
    return buildRowString(tmp);
    // ctx.fillRect(x,y,1,1);

    // ctx.fillRect(X+10,Y+10,3,3);
    // ctx.stroke();
}

async function midpoint_ellipse_ver1(xc, yc, a, b, ctx) {
    info = document.getElementById('info');
    info2 = document.getElementById('info2');
    var swap = 0;
    if(a>=b) {
        info.innerHTML = 'Here a &ge; b, proceed normally';
    } else {
        info.innerHTML = 'Here a < b, swap a with b';
        info2.innerHTML = 'Since a < b, swap x with y';
        a = a+b;
        b = a-b;
        a = a-b;
        var swap = 1;
    }
    

    table1 = document.getElementById("table1");
    tbody1 = '<tr><th colspan="7">\
        Region 1: Δd<sub>E</sub>=b<sup>2</sup>(2x+3), \
        Δd<sub>SE</sub>=b<sup>2</sup>(2x+3)+a<sup>2</sup>(2-2y), \
        d<sub>start</sub>=round(b<sup>2</sup>-a<sup>2</sup>b+a<sup>2</sup>/4) \
        </th></tr>';
    const headers = ['iter #', 'd<sub>old</sub>', 'case', 'Δd<sub>E</sub>', 'Δd<sub>SE</sub>', 'd<sub>new</sub>', 'point: x, y'];
    tbody1 += buildRowString(headers, 'th');
    table1.innerHTML = tbody1;
    table1.classList.add("myBorder");
    
    table2 = document.getElementById("table2");
    const headers2 = ['generated point<br />x, y', '1st quadrant<br />x+xc, y+yc', '2nd quadrant<br />-x+xc, y+yc', '3rd quadrant<br />-x+xc, -y+yc', '4th octant<br />x+xc, -y+yc'];
    tbody2 = buildRowString(headers2, 'th');
    table2.innerHTML = tbody2;
    table2.classList.add("myBorder");
    
    /* Region 1 */
    var x = 0;
    var y = b;
    var d = Math.round(b*b - a*a*b + a*a/4);

    await sleep(sleepTime);
    
    tbody2 += draw_ellipse(x, y, xc, yc, swap, ctx, table2);
    var i = 0;
    row = [i++, '-', '-', '-', '-', 'd<sub>start</sub>='+d, 0+', b='+b];
    tbody1 += buildRowString(row);
    table1.innerHTML = tbody1;
    table2.innerHTML = tbody2;

    while(a*a*y > b*b*x) { //region 1
        await sleep(sleepTime);

        row = [i++, d];
        
        if (d <= 0) { //east
            row[2] = '&le;0, East';
            row[3] = b*b*(2*x+3);
            row[4] = '-';
            row[5] = `${d}+(${b*b*(2*x+3)})=${d + b*b*(2*x+3)}`;
            row[6] = `${x}+1=${x+1}, ${y}`;
            d += b*b*(2*x+3);
        } else { //south-east
            row[2] = '&gt;0, SouthEast';
            row[3] = '-';
            row[4] = b*b*(2*x+3) + a*a*(2-2*y);
            row[5] = `${d}+(${b*b*(2*x+3) + a*a*(2-2*y)})=${d + b*b*(2*x+3) + a*a*(2-2*y)}`;
            row[6] = `${x}+1=${x+1}, ${y}-1=${y-1}`;
            d += b*b*(2*x+3) + a*a*(2-2*y);
            y--;
        }
        x++;
        tbody2 += draw_ellipse(x, y, xc, yc, swap, ctx, table2);
        tbody1 += buildRowString(row);
        table1.innerHTML = tbody1;
        table2.innerHTML = tbody2;
    }

    /* Region 2 */
    await sleep(sleepTime);
    tbody1 += '<tr><th colspan="7">\
        Region 2: Δd<sub>SE</sub>=b<sup>2</sup>(2x+2)+a<sup>2</sup>(3-2y), \
        Δd<sub>S</sub>=a<sup>2</sup>(3-2y), \
        d<sub>start</sub>=round(b<sup>2</sup>(x+&frac12;)<sup>2</sup>+a<sup>2</sup>(y-1)<sup>2</sup>-a<sup>2</sup>b<sup>2</sup>) \
        </th></tr>';
    const headers_region2 = ['iter #', 'd<sub>old</sub>', 'case', 'Δd<sub>SE</sub>', 'Δd<sub>S</sub>', 'd<sub>new</sub>', 'point: x, y'];
    tbody1 += buildRowString(headers_region2, 'th');
    
    d = Math.round(b*b*(x+0.5)*(x+0.5) + a*a*(y-1)*(y-1) - a*a*b*b);
    
    row = ['-', '-', '-', '-', '-', 'd<sub>start</sub>='+d, '-'];
    tbody1 += buildRowString(row);
    table1.innerHTML = tbody1;
    
    while(y > 0) { //region 2
        await sleep(sleepTime);

        row = [i++, d];
        
        if (d < 0) { //south-east
            row[2] = '&le;0, SouthEast';
            row[3] = b*b*(2*x+2) + a*a*(3-2*y);
            row[4] = '-';
            row[5] = `${d}+(${b*b*(2*x+2) + a*a*(3-2*y)})=${d + b*b*(2*x+2) + a*a*(3-2*y)}`;
            row[6] = `${x}+1=${x+1}, ${y}-1=${y-1}`;
            d += b*b*(2*x+2) + a*a*(3-2*y);
            x++
        } else { //south
            row[2] = '&gt;0, South';
            row[3] = '-';
            row[4] = a*a*(3-2*y);
            row[5] = `${d}+(${a*a*(3-2*y)})=${d + a*a*(3-2*y)}`;
            row[6] = `${x}, ${y}-1=${y-1}`;
            d += a*a*(3-2*y);
        }
        y--;
        tbody2 += draw_ellipse(x, y, xc, yc, swap, ctx, table2);
        tbody1 += buildRowString(row);
        table1.innerHTML = tbody1;
        table2.innerHTML = tbody2;
    }
}