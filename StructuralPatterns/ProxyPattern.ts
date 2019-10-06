interface Image {
    display(): void;
}

class RealImage implements Image {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }

    display(): void {
        console.log(`Displaying ${this.fileName}`);
    }


    private loadFromDisk(fileName: string): void {
        console.log(`Loading ${fileName}`);
    } 
}

class ProxyImage implements Image {
    private realImage: RealImage;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    public display(): void {
        if (this.realImage === undefined) {
            this.realImage = new RealImage(this.fileName);
        }

        this.realImage.display();
    }

}


const image: Image = new ProxyImage('test_10mb.jpg');

image.display();
console.log('\n\n');

image.display();