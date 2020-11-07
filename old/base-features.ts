/* let/const*/

let period = 60;
const baseUrl = 'http://localhost'

/* object*/
let firstName = 'Igor'

let acc = {
    firstName,
    getName() {
        return this.firstName;
    }
}

/* spread */

let person = {...acc};
let dates = [...[11, 12, 13]]


/* destructoring  */
let {firstName: myName} = acc;

let [firstDate] = dates;


/* template sting */

function userMessage([start, end]: TemplateStringsArray, {firstName: fn}: typeof acc) {
    return `${start}${fn}${end}`
}

console.log(userMessage`Good day, ${person} !!!`);

/* for of*/

for (const d of dates) {
    console.log(d);
}

/*arrow*/

const sum = (a: number, b: number) => a + b;

/* class*/

class Point {
    x: number = 1;
    y: number = 1;
}

/* Optional chaining*/

let user: any = {};
let x = user?.info?.getName()

/* ?? */
let admin;
let person1 = admin ?? user;
