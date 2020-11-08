// // T extends U ? X : Y;
// type  un = undefined | null;
// type NonUndefined<T> = T extends un ? never : T;
// type snbun = string | number | boolean | undefined | null;
// const val: NonUndefined<snbun> = true;
//
//
// // arguments + return value
//
// const fn = (_a: number, _b: string) => {
//     return true
// };
//
// interface IA {
//     (...args: any): any
// }
//
// // TODO  [_a: number, _b: string] | boolean
// type FunctionParamsReturnType<T> = T extends { (...args: infer P): infer R }      // (...args: [infer U, infer Z]) => infer R
//     ? P | R
//     : T
//
//
// const val1: Parameters<typeof fn> = null;
// interface IUser {
//     name: string;
// }
//
//
// let arr: [() => IUser, () => number] = [() => ({name: 'Ihor'}), () => 1]
//
// type FirstReturnType<T> =
//     T extends [infer U, ...unknown[]]
//         ? U extends (...args: any[]) => infer R
//         ? R
//         : never
//         : never;
//
//
// let val: IUser = 1;

// TODO
type NotReadonly<T> = {
    -readonly [Prop in keyof T]-?: T[Prop]
}

// Remove by type

type RemoveByType<T, E> = {
    [P in keyof T]: T[P] extends E ? never : P
}[keyof T]

interface Person {
    name: string;
    age: number;
    info: { male: boolean };
    subject: string[];
}

const person: RemoveByType<Person, string | number> = 'name';

/*
   { name: string;
    age: number;
    info: never;
    subject: string[];
   } []
 */


//
// interface IS {
//     name: string;
//     age: number;
//     info: never;
//     subject: string[];
// }
//
// let p: Partial<Person> = {
//     name: 'Ihor'
// }

