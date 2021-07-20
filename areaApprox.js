let area;
let x0 = 1; //Integration bounds
let x1 = 2;
let first = true; //Boolean for which integration bound the mouse click should change

function rectangles(f, a, b, n, pos = "l"){
    //f is the function, [a,b] is the interval, n is the number of strips, and pos is which part of the rectangle should touch the curve

    fill(0, 0, 255, 200);
    stroke(0, 0, 0, 50);
    let w = (b-a)/n; //Width of rectangles
    let s = 0; // Sum variable

    let delta = 0; //This determines what part of the curve on the interval from xi to xi+1 will be the height of the rectangle
    if(pos == "l"){
        delta = 0;
    } else if(pos == "m"){
        delta = w/2;
    } else if (pos == "r"){
        delta = w;
    }

    for(let i = 0; i < n; i++){
        //Note we do up to i = n - 1 because the final rectangle will have its right side on x = b
        let xi = a + i * w;
        s += f(xi + delta)
        rect(xi * sclx, -f(xi + delta) * scly, w * sclx, f(xi + delta) * scly); //Negative height for rectangle means we want it to be above the given corner
    }
    return s * w;
}

function mouseClicked(){
    if(mouseY <= 200 + height/2 && mouseY >= height/2 - 200 ){
        clean();

        if(first){
            x0 = (mouseX - width/2);
            first = false;
        } else {
            x1 = (mouseX - width/2);
            first = true;
        }

        //Draw integration bounds
        stroke(255, 0, 0);
        line(x0, -height/2, x0, height/2);
        stroke(0, 0, 255);
        line(x1, -height/2, x1, height/2);

        area = rectangles(foo, min(x0/sclx, x1/sclx), max(x0/sclx, x1/sclx), slider.value(), selectRect.value())
    }
}
