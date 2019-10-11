abstract class Game {
    abstract initailize(): void;
    abstract startPlay(): void;
    abstract endPlay(): void;

    public play(): void {

        this.initailize();

        this.startPlay();

        this.endPlay();
    };
}

class Cricket extends Game {
    
    endPlay(): void {
        console.log('Cricket Game Finished!');
    }

    initailize(): void {
        console.log('Cricket Game Initialized! Start Plying.');
    }

    startPlay(): void {
        console.log('Cricket Game Started. Enjoy the game!');
    }
}

class Football extends Game {
    
    endPlay(): void {
        console.log('Football Game Finished!');
    }

    initailize(): void {
        console.log('Football Game Initialized! Start Plying.');
    }

    startPlay(): void {
        console.log('Football Game Started. Enjoy the game!');
    }
}


let game: Game = new Cricket();
game.play();

game = new Football();
game.play();