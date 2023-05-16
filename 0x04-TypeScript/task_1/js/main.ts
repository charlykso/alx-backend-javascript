class Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: Boolean;
    yearsOfExperience: number;
    location: string;
    contract: Boolean;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    yearsOfExperience: 0
};

console.log(teacher3);