interface Shape {
    draw(): void;
}

class Rectangle implements Shape {
    
    public draw(): void {
        console.log('Rectangle::draw()');
    }
}


class Square implements Shape {

    public draw(): void {
        console.log('Square::draw()');
    }
}

class Circle implements Shape {

    public draw(): void {
        console.log('Circle::draw()');
    }
}


class ShapeMaker {
    private circle: Shape;
    private rectangle: Shape;
    private square: Shape;

    constructor() {
        this.circle = new Circle();
        this.rectangle = new Rectangle();
        this.square = new Square();
    }

    public drawCicle(): void {
        this.circle.draw();
    }

    public drawRectangle(): void {
        this.rectangle.draw();
    }

    public drawSquare(): void {
        this.square.draw();
    }
}


const shapeMaker: ShapeMaker = new ShapeMaker();

shapeMaker.drawCicle();
shapeMaker.drawRectangle();
shapeMaker.drawSquare();