interface BusinessService {
    doProcessing(): void;
}

class EJBService implements BusinessService {
    
    public doProcessing(): void {
        console.log('Processing task by invoking EJB Service.');
    }
}

class JMSService implements BusinessService {

    public doProcessing(): void {
        console.log('Processing task by invoking JMS Service.');
    }
}

class BussinessLookup {
    public getBusinessService(serviceType: string) {
        if (serviceType === 'EJB') {
            return new EJBService();
        } else {
            return new JMSService();
        }
    }
}

class BussinessDelegate {
    private lookupService : BussinessLookup = new BussinessLookup();
    private bussinessService: BusinessService;
    private serviceType: string;

    public setServiceType(serviceType: string) {
        this.serviceType = serviceType;
    }

    public doTask() {
        this.bussinessService = this.lookupService.getBusinessService(this.serviceType);
        this.bussinessService.doProcessing();
    }


}


class Client {
    private bussinessService: BussinessDelegate;

    constructor(bussinessService: BussinessDelegate) {
        this.bussinessService = bussinessService;
    }

    public doTask(): void {
        this.bussinessService.doTask();
    }
}


const businessDelegate: BussinessDelegate = new BussinessDelegate();
businessDelegate.setServiceType('EJB');

const client: Client = new Client(businessDelegate);
client.doTask();

businessDelegate.setServiceType('JMS');
client.doTask();