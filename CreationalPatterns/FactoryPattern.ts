interface Shape {
    draw: Function;
}

class RecTangle implements Shape {

    draw():void {
        console.log('Inside Rectangle::draw() method.');
    }
}

class Square implements Shape {

    draw():void {
        console.log("Inside Square::draw() method.");
    }
}

class Circle implements Shape {

    draw(): void {
        console.log("Inside Circle::draw() method.");
    }
}

class ShapFactory {
    getShape(shapeType: String): Shape {
        if (shapeType === null) {
            return null;
        }

        if (shapeType === 'CIRCLE') {
            return new Circle();
        } else if (shapeType === 'RECTANGLE') {
            return new RecTangle();
        } else if (shapeType === 'SQUARE') {
            return new Square();
        }
        
        return null;
    }
}

const shapFactory = new ShapFactory();

const shap1: Shape = shapFactory.getShape("CIRCLE");
shap1.draw();

const shape2: Shape = shapFactory.getShape("RECTANGLE");
shape2.draw();

const shape3: Shape = shapFactory.getShape("SQUARE");
shape3.draw();