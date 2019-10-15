class DependentObject1 {
    private data: string;

    public setData(data: string): void {
        this.data = data;
    }

    public getData(): string {
        return this.data;
    }
}

class DependentObject2 {
    private data: string;

    public setData(data: string): void {
        this.data = data;
    }

    public getData(): string {
        return this.data;
    }
}

class CoarseGrainedObject {
    private do1: DependentObject1 = new DependentObject1();
    private do2: DependentObject2 = new DependentObject2();

    setData(data1: string, data2: string) {
        this.do1.setData(data1);
        this.do2.setData(data2);
    }

    getData(): string[] {
        return [this.do1.getData(), this.do2.getData()];
    }
    
}

class CompositeEntity {
    private cgo: CoarseGrainedObject = new CoarseGrainedObject();

    public setData(data1: string, data2: string) {
        this.cgo.setData(data1, data2);
    }

    public getData() {
        return this.cgo.getData();
    }
}

class Client {
    private compositeEntity: CompositeEntity = new CompositeEntity();

    public printData(): void {
        this.compositeEntity.getData().forEach(data => {
            console.log(`Data: ${data}`)
        })
    }

    public setData(data1: string, data2: string): void {
        this.compositeEntity.setData(data1, data2);
    }
}


const client: Client = new Client();

client.setData('Test', 'Data');
client.printData();
client.setData("Second Test", "Data1");
client.printData();