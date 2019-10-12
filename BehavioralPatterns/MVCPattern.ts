class Student {
    private rollNo: string;
    private name: string;

    public getRollNo() {
        return this.rollNo;
    }

    public setRollNo(rollNo: string) {
        this.rollNo = rollNo;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}


class StudentView {
    public printStudentDetails(studentName: string, studentRollNo: string): void {
        console.log('Student: ');
        console.log(`Name: ${studentName}`);
        console.log(`Roll No: ${studentRollNo}`);
    }
}

class StudentController {
    private model: Student;
    private view: StudentView;

    constructor(model: Student, view: StudentView) {
        this.model = model;
        this.view = view;
    }

    public setStudentName(name: string): void {
        this.model.setName(name);
    }

    public getStudentName(): string {
        return this.model.getName()
    }

    public setStudentRollNo(rollNo: string): void {
        this.model.setRollNo(rollNo);
    }

    public getStudentRollNo(): string {
        return this.model.getRollNo();
    }

    public updateView(): void {
        this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
    }
}


const retriveStudentFromDatabase = (): Student => {
    const student: Student = new Student();
    student.setName('Robert');
    student.setRollNo('10');
    return student;
}

const model: Student = retriveStudentFromDatabase();

const view: StudentView = new StudentView();

const controller: StudentController = new StudentController(model, view);

controller.updateView();

controller.setStudentName("John");

controller.updateView();