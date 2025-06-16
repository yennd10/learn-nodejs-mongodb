interface Person {
    name: string;
    age: number;
    address: string;
    getInfo(): string;
}

class student implements Person {
    public name: string;
    public age: number;
    public address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getInfo = (): string => {
        return `student ${this.name}`;
    }
}

let t = new student('yen', 37, 'Ha Noi');

console.log(t.getInfo());