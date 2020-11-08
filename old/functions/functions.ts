export function isString(arg: string | number): arg is string {
    return typeof arg === 'string'
}


export function average(a: string, b: number): string;
export function average(a: number, b: string): string;
export function average(a: number, b: number, c: number): string;




export function average(...args: (number | string)[]): string {

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
