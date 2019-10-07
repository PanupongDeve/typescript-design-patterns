abstract class AbStractLogger {
    static INFO: number = 1;
    static DEBUG: number = 2;
    static ERROR: number = 3;

    protected lavel: number;

    protected nextLogger: AbStractLogger;

    public setNextLogger(nextLogger: AbStractLogger):void {
        this.nextLogger = nextLogger;
    }

    public logMessage(lavel: number, message: string): void {
        if (this.lavel <= lavel) {
            this.write(message);
        }

        if (this.nextLogger !== undefined) {
            this.nextLogger.logMessage(lavel, message);
        }
    }

    protected abstract  write(message: string): void ;

}


class ConsoleLogger extends AbStractLogger {

    constructor(lavel: number) {
        super();
        this.lavel = lavel;
    }

    protected write(message: string): void {
        console.log(`Standard Console::Logger: ${ message }`);
    }
}

class ErrorLogger extends AbStractLogger {

    constructor(lavel: number) {
        super();
        this.lavel = lavel;
    }

    protected write(message: string): void {
        console.log(`Error Console::Logger: ${ message }`);
    }
}


class FileLogger extends AbStractLogger {

    constructor(lavel: number) {
        super();
        this.lavel = lavel;
    }

    protected write(message: string): void {
        console.log(`File::Logger: ${ message }`);
    }
}


const getChainOfLoggers = (): AbStractLogger => {
    const errorLogger: AbStractLogger = new ErrorLogger(AbStractLogger.ERROR);
    const fileLogger: AbStractLogger = new FileLogger(AbStractLogger.DEBUG);
    const consoleLogger: AbStractLogger = new ConsoleLogger(AbStractLogger.INFO);

    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);

    return errorLogger;
}

const loggerChain: AbStractLogger = getChainOfLoggers();

loggerChain.logMessage(AbStractLogger.INFO, 'This is an information');

loggerChain.logMessage(AbStractLogger.DEBUG, 'This is an debug label information');

loggerChain.logMessage(AbStractLogger.ERROR, 'This is an error imformation');