import { Range, Validate } from './utils'

// const inputEl = document.querySelector('input') as HTMLInputElement;
//
// class Search {
//
//     @CheckInRunTime
//     @SavePersistence
//     public initialValueNew!: string;
//
//     public constructor(
//         private readonly el: HTMLInputElement
//     ) {
//         this.el.addEventListener('input', this.onSearch.bind(this))
//         console.log(this.initialValueNew);
//     }
//
//     @Debounce(300)
//     @LogInputEvent
//     @LogToSentry
//     private onSearch(_e: Event): void {
//         // if ((_e.target as HTMLInputElement).value.length > 3) {
//         //     throw  new Error('My Error');
//         // }
//         // console.log('IN onSearch', _e);
//
//         this.initialValueNew = (_e.target as HTMLInputElement).value;
//     }
//
// }
//
// const search = new Search(inputEl)

// setTimeout(() => {
//     (search.initialValueNew as any) = 123;
// }, 7000)

class Calculator {
    @Validate
    public updatePercentage(
        @Range(0, 100) _oldValue: number,
        @Range(30, 70)   _newValue: number
    ) {
    }
}


const calc = new Calculator();
calc.updatePercentage(0, 40);

setTimeout(() => {
    calc.updatePercentage(40, 80);
}, 7000)

