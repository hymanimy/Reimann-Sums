let sclx = 50; //Values which we scale x and y by for plotting
let scly = 50;
let xrange;

function plot(f, c = color(0,0,0)){
    //Plots points of a given function f
    stroke(c);
    strokeWeight(2);
    noFill();

    beginShape(); //We join the vertices to get a curve
    for(let i = -xrange; i <= xrange; i += 0.05){ //Sample points and plot
        vertex(i * sclx, -f(i) * scly);
    }
    endShape();
}

function axes(){
    let tsx = sclx/2; //Text size variable
    let tsy = scly/2
    stroke(0);
    strokeWeight(2);
    //Vertical and Horizontal axes
    line(-width/2, 0, width/2, 0);
    line(0, height/2, 0, -height/2);

    fill(0);
    noStroke();
    stroke(0, 0, 0, 50);

    //Horizontal axes numbering
    textSize(20); //NEEDS CHANGING
    let xlen = Math.ceil(width/(sclx*2)); //How many positive integers fit on the right x - axis
    let xstep;
    if(xlen < 15){
        xstep = 1;
    } else if(xlen < 25){
        xstep = 2;
    } else{
        xstep = 5;
    }
    for(let i = -xlen; i <= xlen; i+=xstep){
        text(str(i), i * sclx, 20);
        line(i * sclx, -height/2, i * sclx, height/2);
    }

    //Vertical numbering of axes
    textSize(tsy);
    for(let i = -Math.floor(height/(scly*2)); i <= Math.ceil(height/(scly*2)); i++){
        text(str(-i), -tsy, i * scly)
        line(-width/2, i * scly, width/2, i * scly)
    }
}

function clean(){
    clear();
    plot(foo);
    axes();
}
