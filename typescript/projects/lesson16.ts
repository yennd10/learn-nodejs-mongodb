const sum = (a: number, b: number): number => {
    return a + b;
}

const handleLogs = (message: string): void => {
    console.log(">>> message: ", 'ppp')

}

handleLogs('asdf');

const sum2 = (a: number, b: number) => {
    // console.log(">>> message: ", a + b);
    return a + b;
}

console.log('asdfasdf', sum2(3, 6));