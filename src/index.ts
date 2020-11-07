const user: {
    readonly firstName: string;
    readonly age?: number
} = {
    firstName: 'Ihor',
    age: 35
};
user.age = 21;
// user = {
//     firstName: 'Ihor',
// }
//
// user = {
//     firstName: 'Ihor',
//     age: 35
// }

let keys: keyof typeof user = 'sdasd';
let key1: (typeof user)['firstName'] = 1;

let hashMap: {
    [id: string]: typeof user;
}

const users: typeof hashMap = {
    'asdasd24234asdasd': {
        firstName: 'Ihor',
        age: 35
    },
    'asd12312asdas123': {
        firstName: 'Ihor',
        age: 35
    },
}

const u1 = users.asdasd24234asdasd


let nums: (typeof user)[] = [{
    firstName: 'Ihor',
    age: 35
}]

let arr: number[] = [1, 2, 3, 4, 4]

arr[100] = 1;
arr.push(1);
//
// let a: typeof arr[99] = 'd';

// let u2: readonly [id: number, user: typeof user] = [1, {
//     firstName: 'Ihor',
//     age: 35
// }]
//
// u2.push(1);
// u2[100] = 0;
//
// let a: typeof u2 = [1, {
//     firstName: 'Eugene',
//     age: 35
// }]


let x = 10 as const;
let b: typeof x = 11;

let y = [10, 20] as const;
let b1: typeof y = [10, 20];
b1[1] = 2;

let z = {name: 'Ihor'} as const;
let b2: typeof z = {name: 'Ihor'};
b2.name = 'Eugene';
