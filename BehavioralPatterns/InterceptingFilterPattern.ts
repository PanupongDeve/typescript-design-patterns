interface Filter {
    execute(request: string): void;
}


class AuthenticationFilter implements Filter {
    execute(request: string): void {
        console.log(`Authenticating request: ${request}`);
    }
}

class DebugFilter implements Filter {
    execute(request: string): void {
        console.log(`request log: ${request}`);
    }
}


class Target {
    execute(request: string): void {
        console.log(`Executing request ${request}`);
    }
}

class FilterChain {
    private filters: Filter[] = [];
    private target: Target;

    addFilter(filter: Filter) {
        this.filters.push(filter);
    }

    execute(request: string): void {
        this.filters.forEach(filter => {
            filter.execute(request);
        })

        this.target.execute(request);
    }

    setTarget(target: Target) {
        this.target = target;
    }
}

class FilterManger {
    private filterChain: FilterChain;

    constructor(target: Target) {
        this.filterChain = new FilterChain();
        this.filterChain.setTarget(target);
    }

    public setFilter(filter: Filter) {
        this.filterChain.addFilter(filter);
    }

    public filterRequest(request: string) {
        this.filterChain.execute(request);
    }
}

class Client {
    private filterManager: FilterManger;

    public setFilterManager(filterManager: FilterManger) {
        this.filterManager = filterManager;
    }

    public sendRequest(request: string) {
        this.filterManager.filterRequest(request);
    }
}


const filterManager: FilterManger = new FilterManger(new Target());

filterManager.setFilter(new AuthenticationFilter());
filterManager.setFilter(new DebugFilter());
filterManager.setFilter(new AuthenticationFilter());

const client: Client = new Client();
client.setFilterManager(filterManager);
client.sendRequest('HOME');
client.sendRequest('Work space');