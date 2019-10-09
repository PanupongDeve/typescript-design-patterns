interface State {
    doAction(context: Context):void;
}

class StartState implements State {
    public doAction(context: Context) {
        console.log('Player is in start state');
        context.setState(this);
    }

    public toString(): String {
        return 'Start State';
    }
}

class StopState implements State {
    public doAction(context: Context) {
        console.log('Player is in stop state');
        context.setState(this);
    }

    public toString(): String {
        return 'Stop State';
    }
}

class Context {
    private state: State;

    constructor() {
        this.state = null;
    }

    public setState(state: State){
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }
}


const context: Context = new Context();

const startState: StartState = new StartState();
startState.doAction(context);

console.log(context.getState().toString());

const stopState: StopState = new StopState();
stopState.doAction(context);

console.log(context.getState().toString());