// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 's', 1);
// average(1, 1, 1);
// const avg1: number = average(1, 1, 1);

// function average(a: number, b: number, c?: number): string {
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 's', 1);
// average(1, 1, 1);
// average(1, 1);
// const avg1: number = average(1, 1, 1);


// function average(a: number, b: number, c: number = 0): string {
//     const avg: number = (a + b + c) / 3
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 's', 1);
// average(1, 1, 1);
// average(1, 1);
// const avg1: number = average(1, 1, 1);

function isString(arg: string | number): arg is string {
    return typeof arg === 'string'
}


function average(a: string, b: number): string;
function average(a: number, b: string): string;
function average(a: number, b: number, c: number): string;
function average(...args: (number | string)[]): string {

    let total: number = 0;
    for (const arg of args) {
        if (isString(arg)) {
            total += Number(arg);
            continue;
        }
        total += arg;
    }
    const avg: number = total / args.length;
    return `Average is ${avg}`;
}

// average(1);
// average(1, 's', 1);
// average(1, 1);
// average(1, 1, 2, 3, 4, 5, 6, 6);
// average(1, '1');
// average('1', 1);
// average(1, 1, 1);

// type NS = { info: { name: string, surname: string } }
//
// function getFullName(this: NS) {
//     return `${this.info.name} ${this.info.surname}`;
// }
//
// // { name: string, surname: string } => { name: string, surname: string, age: number }
// let account: NS & { getFullNameWithAccountContext: () => string } = {
//     info: {
//         name: 'Ihor',
//         surname: 'Nepipenko',
//     },
//     getFullNameWithAccountContext: getFullName
// }
//
// account.getFullNameWithAccountContext();
