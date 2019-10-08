abstract class Observer {
    protected subject: Subject;
    public abstract update(): void;
}

class Subject {
    private observers: Observer[] = [];
    private state: number;

    public getState() {
        return this.state;
    }

    public setState(state: number) {
        this.state = state;
        this.notifyAllObservers();
    }

    public attach(observer: Observer) {
        this.observers.push(observer);
    }

    public notifyAllObservers(): void {
        this.observers.forEach(observer => {
            observer.update();
        })
    }

}

class BinaryObserver extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    public update(): void {
        console.log(`Binary String: ${this.subject.getState()}`);
    }
}

class OctalObserver extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    public update(): void {
        console.log(`Octal String: ${this.subject.getState()}`);
    }
}

class HexaObserver extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.attach(this);
    }

    public update(): void {
        console.log(`Hex String: ${this.subject.getState()}`);
    }
}


const subject: Subject = new Subject();

new HexaObserver(subject);
new OctalObserver(subject);
new BinaryObserver(subject);


console.log('First State change: 15');
subject.setState(15);

console.log('Second state change: 10');
subject.setState(10);