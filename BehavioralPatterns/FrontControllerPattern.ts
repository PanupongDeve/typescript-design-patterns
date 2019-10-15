class HomeView {
    public show(): void {
        console.log('Displaying Home Page');
    }
}

class StudentView {
    public show(): void {
        console.log('Displaying Student Page');
    }
}

class Dispatcher {
    private studentView: StudentView;
    private homeView: HomeView;

    constructor() {
        this.studentView = new StudentView();
        this.homeView = new HomeView();
    }

    dispatch(request: string): void {
        if (request === 'STUDENT') {
            this.studentView.show();
        } else {
            this.homeView.show();
        }
    }
}

class FrontController {
    private dispatcher: Dispatcher;

    constructor() {
        this.dispatcher = new Dispatcher();
    }

    private isAuthenicUser(): boolean {
        console.log('User is authenticated successfully');
        return true;
    }

    private trackRequest(request: string): void {
        console.log(`Page requested: ${request}`);
    }

    public dispatchRequest(request: string): void {
        this.trackRequest(request);

        if(this.isAuthenicUser()) {
            this.dispatcher.dispatch(request);
        }
    }
}

const frontController: FrontController = new FrontController();
frontController.dispatchRequest('HOME');
frontController.dispatchRequest('STUDENT');