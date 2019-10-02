class Person {
    private name: string;
    private gender: string;
    private maritalStatus: string;

    constructor(name: string, gender: string, maritalStatus: string) {
        this.name = name;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    getName(): string {
        return this.name;
    }

    getGender(): string {
        return this.gender;
    }

    getMarialStatus(): string {
        return this.maritalStatus;
    }
}


interface Criteria {
    meetCriteria(persons: Person[]): Person[];
}

class CriteriaMale implements Criteria {

    meetCriteria(persons: Person[]): Person[] {
        const malePerson: Person[] = [];

        persons.forEach(person => {
            if(person.getGender() === 'Male') {
                malePerson.push(person);
            }
        });

        return malePerson;
    }
}


class CriteriaFemale implements Criteria {

    meetCriteria(persons: Person[]): Person[] {
        const femalePerson: Person[] = [];

        persons.forEach(person => {
            if(person.getGender() === 'Female') {
                femalePerson.push(person);
            }
        });

        return femalePerson;
    }
}



const persons: Person[]  = [];

persons.push(new Person("Robert","Male", "Single"));
persons.push(new Person("John", "Male", "Married"));
persons.push(new Person("Laura", "Female", "Married"));
persons.push(new Person("Diana", "Female", "Single"));
persons.push(new Person("Mike", "Male", "Single"));
persons.push(new Person("Bobby", "Male", "Single"));

console.log('\n\n------------- Persons -----------------------');
console.log(persons);

console.log('\n\n------------- Male Persons -----------------------');
const male: CriteriaMale = new CriteriaMale();
console.log(male.meetCriteria(persons));

console.log('\n\n------------- Female Persons -----------------------');
const female: CriteriaFemale = new CriteriaFemale();
console.log(female.meetCriteria(persons));