// let  onlyEase =  'ease';
//
// let a: typeof  onlyEase = 'asdad';

// let onlyEase: 'ease' = 'ease';
// let digit: 0 | 1 | 2 | 3 | 4 | 5;
//
// digit = 3
enum AnimationEnum {
    EASE_IN = 'ease-in!!!',
    EASE_OUT = 'ease-out',
}

let keysOfEnum: typeof AnimationEnum = {
    EASE_IN: AnimationEnum.EASE_IN,
    EASE_OUT: AnimationEnum.EASE_OUT
};
//
// interface AnimateOptions {
//     delay: number;
//     type: AnimationEnum //'ease-in' | 'ease-out';
// }
//
// function animate(_options: AnimateOptions) {
//     // 'ease-in', 'ease-out'
// }
//
// animate({delay: 1000, type: AnimationEnum.EASE_IN});


interface IFact {
    factId: number;
    useTo: string;
    userId: number;
}

let fId = {
    factId: 1,
    useTo: 's',
    userId: 1,
}

const dataList: { action: string, data: IFact } [] = [];

const uniqueValue = (): keyof typeof fId => { // 'factId' | 'useTo' | 'userId'
    return 'factId'
}

dataList.map((item) => {
    if (item.data[uniqueValue()] === 2) {

    }
    return item
})
