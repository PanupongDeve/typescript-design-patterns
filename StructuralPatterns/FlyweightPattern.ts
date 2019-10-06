interface Shape {
    draw(): void;
}

class Circle implements Shape {
    private color: string;
    private x: Number;
    private y: Number;
    private radius: Number;

    constructor(color: string) {
        this.color = color;
    }

    public setX(x: Number): void {
        this.x = x;
    }

    public setY(y: Number): void {
        this.y = y;
    }

    public setRadius(radius: Number): void {
        this.radius = radius;
    }

    public getColor(): string {
        return this.color;
    }

    public draw(): void {
        console.log(`Circle: Draw() Color : ${ this.color }, x : ${this.x}, y : ${this.y}, radius : ${this.radius}`);
    }

}


class ShapeFactory {
    private circles: Circle[] = [];

    getCircle(color: string): Circle {
        let circle: Circle = this.circles.filter((circle) => circle.getColor() === color)[0];
        
        if (circle === undefined) {
            circle = new Circle(color);
            this.circles.push(circle);
            console.log(`Creating circle of color : ${color}`);
        }

        return circle;
    }
}

const colors = ['Red', 'Green', 'Blue', 'White', 'Black'];
const shapeFactory = new ShapeFactory();




const getRandomColor = (): string => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[colorIndex];
    return selectedColor;
}

const getRandomX = (): Number => {
    return Math.random() * 100;
}

const getRandomY = (): Number => {
    return Math.random() * 100;
}

for (let i = 0; i < 20; i++) {
    const circle: Circle = shapeFactory.getCircle(getRandomColor());
    circle.setX(getRandomX());
    circle.setY(getRandomY());
    circle.setRadius(100);
    circle.draw();
}