// Interface định nghĩa cấu trúc cho một hình học
interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

// Interface định nghĩa thông tin cơ bản cho một người
interface Person {
    name: string;
    age: number;
    greet(): void;
}

// Class Rectangle triển khai interface Shape
class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Class Circle triển khai interface Shape
class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Class Student triển khai interface Person
class Student implements Person {
    name: string;
    age: number;
    private studentId: string;

    constructor(name: string, age: number, studentId: string) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }

    greet(): void {
        console.log(`Hello, I'm ${this.name}, a ${this.age} years old student.`);
    }

    study(): void {
        console.log(`${this.name} is studying...`);
    }
}

// Sử dụng các class và interface
function main() {
    // Tạo và sử dụng các hình học
    const rectangle = new Rectangle(5, 3);
    console.log('Rectangle Area:', rectangle.calculateArea());
    console.log('Rectangle Perimeter:', rectangle.calculatePerimeter());

    const circle = new Circle(4);
    console.log('Circle Area:', circle.calculateArea());
    console.log('Circle Perimeter:', circle.calculatePerimeter());

    // Tạo và sử dụng Student
    const student = new Student('John Doe', 20, 'S12345');
    student.greet();
    student.study();
}

// Chạy chương trình
main(); 