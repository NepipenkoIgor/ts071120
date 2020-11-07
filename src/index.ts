// type/interface/functions/class


// interface IUser<Info extends { male: boolean }, Id = number> {
//     id: Id;
//     name: string;
//     info: Info
// }
//
//
// let user: IUser<{ male: boolean }> = {
//     id: 11,
//     name: 'Ihor',
//     info: {
//         male: true
//     }
// }
//
// let admin: IUser<{ male: boolean, subjects: string[] }, string> = {
//     id: '11sasda1',
//     name: 'Eugene',
//     info: {
//         male: true,
//         subjects: ['JS', 'TS']
//     }
// }


interface IUserAccount {
    name: string;
    age: number;
}

interface IProduct {
    title: string;
    price: number
}

interface IState {
    user: IUserAccount;
    products: IProduct[]
}

const state: IState = {
    user: {name: 'Ihor', age: 34},
    products: [{title: 'IPhone12', price: 1000}]
}

type Select<State> = <Field extends (keyof State)>(state: State, field: Field) => State[Field];

const select: Select<IState> = (storeState, field) => storeState[field];

const user: IUserAccount = select(state, 'user');
const products: IProduct[] = select(state, 'products');


function fn<T>(_f: T): void {

}
