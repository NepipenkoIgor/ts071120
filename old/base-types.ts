// interface UserAccount {
//     firsName: string;
//     age: number;
// }
//
// // let user: UserAccount = UserAccount;
//
// let el: HTMLDivElement
//
// let userAccount = {
//     firstName: 'Ihor',
//     age: 35
// }
//
// let u1: typeof userAccount = {
//     firstName: 'Eugene',
//     age: 23
// };


// class UserAccount {
//     userName: string = 'Ihor';
//     age: number = 34
// }
//
// let u: UserAccount = new UserAccount();


// let a: number;
// a = 1;
//
// let b = new UserAccount();
//
// b = 1;

let bool = true;
bool = false;
bool = 'sda';

let num: number | null = 1;
num = 0b0101;
num = 0xf00d;
num = NaN;
num = Infinity;
num = null;

let str: string = 'str';

let nil: null = null;
nil = undefined;
let und: undefined = undefined;

str = null;


let bigInt: bigint = 4n;


const key1: unique symbol = Symbol('key1');
const key2: symbol = Symbol('key2');
const key3 = Symbol('key3');

let strictObj = {
    [key1]: 'value1',
    [key2]: 'value2',
    [key3]: 'value3',
}

let k1 = strictObj[key1];
let k2 = strictObj[key3];

function onlyKey1(_value: typeof key3) {

}
