class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

class Originator {
    private state: string;

    public setState(state: string) {
        this.state = state;
    }

    public getState() {
        return this.state;
    }

    public saveStateToMomento(): Memento {
        return new Memento(this.state);
    }

    public getStateFromMomento(memento: Memento) {
        this.state = memento.getState();
    }
}

class CareTaker {
    private mementoList: Memento[] = [];

    public add(state: Memento) {
        this.mementoList.push(state);
    }

    public get(index: number): Memento {
        return this.mementoList[index];
    }
}


const originator: Originator = new Originator();
const careTaker: CareTaker = new CareTaker();

originator.setState('State #1');
originator.setState('State #2');
careTaker.add(originator.saveStateToMomento());

originator.setState('State #3');
careTaker.add(originator.saveStateToMomento());

originator.setState('State #4');

console.log(`Current State: ${originator.getState()}`);

originator.getStateFromMomento(careTaker.get(0));
console.log(`First saved State: ${originator.getState()}`);

originator.getStateFromMomento(careTaker.get(1));
console.log(`Second saved State: ${originator.getState()}`);