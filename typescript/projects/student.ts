// Define an interface for a Person
interface IPerson {
    id: number;
    name: string;
    age: number;
    getInfo(): string;
}

// Create a class that implements the interface
class Student implements IPerson {
    // Properties
    public id: number;
    public name: string;
    public age: number;
    private grade: string;

    // Constructor
    constructor(id: number, name: string, age: number, grade: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    // Method implementation from interface
    getInfo(): string {
        return `Student ${this.name} (ID: ${this.id}) is ${this.age} years old and in grade ${this.grade}`;
    }

    // Additional method specific to Student class
    study(): void {
        console.log(`${this.name} is studying...`);
    }
}

// Create an instance of the Student class
const student1 = new Student(1, "John Doe", 20, "A");
console.log(student1.getInfo()); // Output: Student John Doe (ID: 1) is 20 years old and in grade A
student1.study(); // Output: John Doe is studying... 