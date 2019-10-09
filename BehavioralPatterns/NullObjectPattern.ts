abstract class  AbstractCustomer {
    protected name: string;
    public abstract isNil(): boolean;
    public abstract getName(): string;
}


class RealCustomer extends AbstractCustomer {

    constructor(name: string) {
        super();
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public isNil(): boolean {
        return false;
    }
}

class NullCustomer extends AbstractCustomer {

    public getName():string {
        return 'Not Avaliable in Customer Database';
    }

    public isNil(): boolean {
        return true;
    }
}


class CustomerFactory {
    public names: string[] = ['Rob', 'Joe', 'Julia'];
    private static instance: CustomerFactory = new CustomerFactory();

    private constructor() {}

    public static getinstance() {
        return this.instance;
    }

    public getCustomer(name: string): AbstractCustomer {
        for (let i = 0; i < this.names.length; i++) {
            if(this.names[i] === name) {
                return new RealCustomer(name);
            }
        }

        return new NullCustomer();
    }
}

const customerFactory: CustomerFactory = CustomerFactory.getinstance();


const customer1: AbstractCustomer = customerFactory.getCustomer('Rob');
const customer2: AbstractCustomer = customerFactory.getCustomer('Joe');
const customer3: AbstractCustomer = customerFactory.getCustomer('Julia');
const customer4: AbstractCustomer = customerFactory.getCustomer('Laura');

console.log('--------------- Customers -------------------');
console.log(customer1.getName());
console.log(customer2.getName());
console.log(customer3.getName());
console.log(customer4.getName());