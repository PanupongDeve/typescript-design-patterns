class SingleObject {
    private static instance: SingleObject = new SingleObject();

    private constructor() {

    }

    public static getinstance() {
        return this.instance;
    }

    public showMessage():void {
        console.log("Hello World");
    }
}

const object: SingleObject = SingleObject.getinstance();

object.showMessage();

const object2: SingleObject = SingleObject.getinstance();


console.log(object === object2);
