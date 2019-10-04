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

    public getSuboardinates() {
        return this.subordinates;
    }

    public toString() {
        return `Employee : [ Name: ${this.name}, Dept: ${this.dept}, Salary: ${this.salary} ]`;
    }
}

const CEO: Employee = new Employee("John", "CEO", 30000);

console.log(CEO.toString());