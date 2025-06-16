
//perfect
const sum = (x: number, y: number) => {
    return x + y;
}

console.log(">>> check sum1 = ", sum(5, 10)); //15

//need to validate
const sum2 = (x: any, y: any) => {
    //validate: x, y are numbers ???
    return x + y;
}

console.log(">>> check sum2 = ", sum2('name', 10)); //15

const sum3 = (a: number, b: number) => {
    return a + b;
}

console.log("a+b= ", sum3(2, 5));