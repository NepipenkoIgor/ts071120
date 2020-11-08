// <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
import 'reflect-metadata';

export function LogInputEvent(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    // console.log(target, methodName, descriptor)
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value(e: Event) {
            const inputRef = e.target as HTMLInputElement;
            // tslint:disable-next-line:no-console
            console.log(`Input value in method ${methodName} in class ${target.constructor.name} equal to ${inputRef.value}`)
            originalValue.call(this, e);
        }
    }
}

export function LogToSentry(_target: any, _methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    // console.log(target, methodName, descriptor)
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value(e: Event) {
            try {
                originalValue.call(this, e);
            } catch (err) {
                // http call to sentry
                console.log(err);
            }
        }
    }
}


export function Debounce(ms: number) {
    let timeId: number | null;
    return (_target: any, _methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalValue = descriptor.value;
        return {
            ...descriptor,
            value(...args: unknown[]) {
                if (timeId) {
                    clearInterval(timeId);
                }
                timeId = setTimeout(() => {
                    originalValue.call(this, ...args);
                }, ms)
            }
        }
    }
}


export function SavePersistence(target: object, key: string) {
    const localKey = `${target.constructor.name}_${key}`;

    const getter = () => {
        return localStorage.getItem(localKey);
    }
    const setter = (newValue: any) => {
        localStorage.setItem(localKey, newValue);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    })
}


export function CheckInRunTime(target: object, key: string) {
    const {name: type} = Reflect.getMetadata('design:type', target, key)
    let value: any;
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue: any) {
            const realType = typeof newValue;
            const actualType = type.toLowerCase();
            if (realType !== actualType) {
                throw  new Error(`type of ${key} is not ${actualType}. You tried to assign ${realType}`)
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true,
    })
}
