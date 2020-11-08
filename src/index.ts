interface IPointX {
    x: sn;
}

// interface IPointY {
//     y: sn;
// }

type sn = string | number;

class Point implements IPointX {

    #p: number = 4;

    public constructor(x: number, y: string)
    public constructor(x: string, y: number, z: number)
    public constructor(
        public x: sn,
        protected y: sn,
        private z?: number
    ) {
        // TODO private defineProperty
        Object.defineProperty(this, '#p', {
            get() {
                return 'Some prop'
            },
        })
        // tslint:disable-next-line:no-console
        console.log(this.z, this.#p);
    }

    public sum(): number {
        return Number(this.x) + Number(this.y);
    }
}

// tslint:disable-next-line:max-classes-per-file
class CustomPoint extends TimeStamped(Tagged(Point)) {
    constructor(x: string, y: number, z: number) {
        super(x, y, z);
    }

    public sum(): number {
        return super.sum();
    }
}


let p1 = new Point(1, '1')
let p2 = new CustomPoint('1', 1, 1);
// tslint:disable-next-line:no-console
console.log(p2.tags);
console.log(p2.timestamp);

// tslint:disable-next-line:max-classes-per-file
class Singleton {
    private static instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}


const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
const inst3 = Singleton.getInstance();
const inst4 = Singleton.getInstance();
const inst5 = Singleton.getInstance();

console.log(inst5 === inst3);

type Constructable = new (...args: any[]) => any;

function TimeStamped<BaseClass extends Constructable>(BC: BaseClass) {
    // tslint:disable-next-line:max-classes-per-file
    return class extends BC {
        public timestamp = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    // tslint:disable-next-line:max-classes-per-file
    return class extends BC {
        public tags = ['TS', 'JS'];
    }
}


abstract class AbstractControl<T> {
    public abstract model: T;

    public abstract getValue(): T;

    public onFocus() {
    }

    public onBlur() {
    }
}

interface IDropDownEl {
    text: string;
    value: string
}

class MHDropDown extends AbstractControl<IDropDownEl[]> {
    public model = [];

    public getValue(): IDropDownEl[] {
        return this.model;
    }
}

class MHInput extends AbstractControl<string> {
    public model = '';

    public getValue(): string {
        return this.model;
    }
}



