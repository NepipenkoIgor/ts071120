// interface User {
//     readonly firstName: string;
//     readonly age?: number
// };
// type sn = string | number;
//
// type CB = new (a: number) => void
//
// const user: User = {
//     firstName: 'Ihor',
//     age: 35
// };


/* Object / Function*/

// interface IPoint {
//     x: number;
//     y: number
// }
//
// type TPoint = {
//     x: number;
//     y: number
// }
//
// let p1: TPoint = {
//     x: 1,
//     y: 1
// }
//
//
// interface ICb {
//     (a: number): TPoint
// }
//
// type TCb = (a: number) => IPoint;
//
// let cb: TCb = function fn(_a: number) {
//     return {
//         x: 1,
//         y: 1
//     }
// }

/* extends */

interface IX {
    x: number
}

interface IY {
    y: number
}


type TX = {
    x: number,
    z: string
}

type TY = {
    y: number,
    z: number
}

type TPoint = TX & TY;

interface IPoint extends IX, TY {

}

let p1: TPoint = {
    x: 1,
    y: 1,
}

/* implements **/

class Point implements TX, IY {
    x = 1;
    y = 1
}


/* Difference */


let p: IBasePoint = {
    x: 1,
    y: 1,
    z: 1
}
let a: NonObject = {}


type NonObject = number | string | boolean;

interface IBasePoint {
    x: number;
}


interface IBasePoint {
    y: number;
    z: number;
}
