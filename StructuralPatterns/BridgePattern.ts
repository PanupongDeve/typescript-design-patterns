interface DrawApi {
    drawCircle(radius: Number, x: Number, y: Number): void;
}


class RedCircle implements DrawApi {
    drawCircle(radius: Number, x: Number, y: Number): void {
        console.log(`Drawing Circle[ color: red, radius: ${radius}, x: ${x}, y: ${y} ]`);
    }
}

class GreenCircle implements DrawApi {
    drawCircle(radius: Number, x: Number, y: Number): void {
        console.log(`Drawing Circle[ color: green, radius: ${radius}, x: ${x}, y: ${y} ]`);
    }
}

abstract class Shape {
    protected drawApi: DrawApi;

    constructor(drawApi: DrawApi) {
        this.drawApi = drawApi;
    }

    public abstract draw(): void;
}

class Circle extends Shape {
    private x: Number;
    private y: Number;
    private radius: Number;

    constructor(x: Number, y: Number, radius: Number, drawApi: DrawApi) {
        super(drawApi);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    public draw(): void {
        this.drawApi.drawCircle(this.radius, this.x, this.y);
    }
}


const redCircle: Shape = new Circle(100, 100, 10, new RedCircle());
const greenCircle: Shape = new Circle(100, 100, 10, new GreenCircle());

redCircle.draw();
greenCircle.draw();