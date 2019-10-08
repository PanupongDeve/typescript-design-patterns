class ChatRoom {
    
    public static showMessage(user: User, message: string): void {
        console.log(`${new Date().toString()} [${user.getName()}] : ${message}`);
    }
}

class User {
    private name: string

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public sendMessage(message: string) {
        ChatRoom.showMessage(this, message);
    }
}

const robert: User = new User('Robert');
const john: User = new User('John');


robert.sendMessage('Hi! John!');
john.sendMessage('Hello! Robert');