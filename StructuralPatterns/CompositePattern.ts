class Employee {
    private name: string;
    private dept: string;
    private salary: Number;
    private subordinates: Employee[];

    constructor(name: string, dept: string, salary: Number) {
        this.name = name;
        this.dept = dept;
        this.salary = salary;
        this.subordinates = [];
    }

    public add(employee: Employee) {
        this.subordinates.push(employee);
    }

    public remove(employee: Employee) {
        const subordinatesRemoved = this.subordinates.filter(sub => sub.name !== employee.name);
        this.subordinates = subordinatesRemoved;
    }

    public getSuboardinates(): Employee[] {
        return this.subordinates;
    }

    public toString() {
        return `Employee : [ Name: ${this.name}, Dept: ${this.dept}, Salary: ${this.salary} ]`;
    }
}

const CEO: Employee = new Employee("John", "CEO", 30000);

const headSales: Employee = new Employee("Robert", "Head Sales", 20000);

const headMarketing: Employee = new Employee("Michel", "Head Marketing", 20000);

const clerk1: Employee = new Employee("Laura", "Marketing", 10000);
const clerk2: Employee = new Employee("Bob", "Marketing", 10000);

const salesExcutive1: Employee = new Employee("Richard", "Sales", 10000);
const salesExcutive2: Employee = new Employee("Rob", "Sales", 10000);

CEO.add(headSales);
CEO.add(headMarketing);


headSales.add(salesExcutive1);
headSales.add(salesExcutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);


console.log(CEO.toString());

const headEmployee: Employee[] = CEO.getSuboardinates();


headEmployee.forEach(he => {
    console.log(he.toString());
    const employee = he.getSuboardinates();

    employee.forEach(e => {
        console.log(e.toString());
    });

});