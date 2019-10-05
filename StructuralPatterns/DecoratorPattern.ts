interface Shape {
    draw(): void;
}

class Rectangle implements Shape {
    draw(): void {
        console.log('Shape: Rectangle');
    }
}

class Circle implements Shape {
    draw(): void {
        console.log('Shape: Circle');
    }
}

class ShapeDecorator implements Shape {
    protected decoratedShape: Shape;

    constructor(decoratedShape: Shape) {
        this.decoratedShape = decoratedShape;
    }

    draw(): void {
        this.decoratedShape.draw();
    }
}


class RedShapeDecorator extends ShapeDecorator {

    constructor(decoratedShape: Shape) {
        super(decoratedShape);
    }

    draw() {
        this.decoratedShape.draw();
        this.setRedBorder();

    }

    private setRedBorder() {
        console.log("Border Color: Red");
    }

}


const circle: Shape = new Circle();

const redCircle: Shape = new RedShapeDecorator(new Circle());

const redRectangle: Shape = new RedShapeDecorator(new Rectangle());

console.log("Circle with normal border");
circle.draw();

console.log('\nCircle of red border');
redCircle.draw();

console.log('\nRectangle of red border');
redRectangle.draw();