interface Shape {
    draw: Function;
}

class RoundedRectangle implements Shape {
    draw(): void {
        console.log("Inside RoundedRectangle::draw() method.");
    }
}

class RoundedSquare implements Shape {
    draw(): void {
        console.log("Inside RoundedSquare::draw() method.");
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log("Inside Rectangle::draw() method.")
    }
}

class Square implements Shape {
    draw(): void {
        console.log("Inside Square::draw() method.")
    }
}

abstract class AbstractFactory {
    abstract getShape(shapeType: String): Shape;
}

class ShapeFactory extends AbstractFactory {
    
    public getShape(shapeType: String): Shape {
        if (shapeType === "RECTANGLE") {
            return new Rectangle();
        } else if (shapeType === "SQUARE") {
            return new Square();
        }
        return null;
    }
}

class RoundedFactory extends AbstractFactory {

    public getShape(shapeType: String): Shape {
        if (shapeType === "RECTANGLE") {
            return new RoundedRectangle();
        } else if (shapeType === "SQUARE") {
            return new RoundedSquare();
        }
        return null;
    }
}


class FactoryProducer {
    static getFactory(rounded: Boolean): AbstractFactory {
        if (rounded) {
            return new RoundedFactory();
        } else {
            return new ShapeFactory();
        }
    }
}

const roundedFactory: AbstractFactory = FactoryProducer.getFactory(true);

const shape1: Shape = roundedFactory.getShape("RECTANGLE");
shape1.draw();

const shape2: Shape = roundedFactory.getShape("SQUARE");
shape2.draw();

const shapeFactory: AbstractFactory = FactoryProducer.getFactory(false);

const shape3: Shape = shapeFactory.getShape("RECTANGLE");
shape3.draw();

const shape4: Shape = shapeFactory.getShape("SQUARE");
shape4.draw();