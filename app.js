let slider;
let previousSliderValue; //Stores the previous value of the slider
let selectRect
let curveText;
let foo = function(x){return 0.1*x**3 - x};
let fooString = "y = 0.1x^3 - x"

function setup() {
    createCanvas(1000, 800);
    background(255);
    curveText = {x: -width/2 + 30, y: -height/2 + 30}
    xrange = width/(2 *sclx);

    //Slider for choosing how many strips for Area Approximation
    slider = createSlider(1, 50, 10); //we can have between 1 and 100 strips
    slider.position(30, 175 );
    slider.style('width', '200px');
    previousSliderValue = slider.value();

    //Input box for selecting what type of reimann sum we want to do
    selectRect = createSelect()
    selectRect.position(30, 250);
    selectRect.option("Select side of Rectangle")
    selectRect.option("l");
    selectRect.option("m")
    selectRect.option("r")

    translate(width/2, height/2); //Makes the origin the centre of the screen
    plot(foo); //Roughly plots the given curve
    axes(); //Draws axes and numbers them

}

function draw() {
    translate(width/2, height/2); //Make origin the centre of the screen
    fill(0);
    noStroke();
    textSize(32);

    text(fooString, curveText.x, curveText.y);
    text("Area Approximation: " + String(area), -width/2 + 30, -height/2 + 80)
    text("Number of strips: " + String(slider.value()), -width/2 + 30, -height/2 + 150)

    if(previousSliderValue != slider.value()){
        previousSliderValue = slider.value();
        clean();

        //Draw integration bounds
        stroke(255, 0, 0);
        line(x0, -height/2, x0, height/2);
        stroke(0, 0, 255);
        line(x1, -height/2, x1, height/2);
        area = rectangles(foo, min(x0/sclx, x1/sclx), max(x0/sclx, x1/sclx), slider.value(), selectRect.value())
    }
}
