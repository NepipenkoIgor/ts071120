import 'reflect-metadata';

const RANGE_KEY = 'design:RANGE_KEY';

interface IRangeMetaData {
    [paramIndex: number]: [min: number, max: number]
}

export function Range(min: number, max: number) {
    return (target: object, key: string, index: number) => {
        const existingRange: IRangeMetaData = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    }
}

export function Validate(target: object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value(...args: number[]) {
            const existingRange: IRangeMetaData = Reflect.getMetadata(RANGE_KEY, target, methodName) ?? {};
            for (const [paramIndex, range] of Object.entries(existingRange)) {
                const [min, max] = range as [min: number, max: number];
                const paramValue = args[Number(paramIndex)];
                if (paramValue < min || paramValue > max) {
                    throw new Error(`Error in ${target.constructor.name} instance. Parameter of method ${methodName}
    on position ${Number(paramIndex) + 1} out of range [${[min, max]}]. Current value ${paramValue}
   `);
                }
            }
            return originalValue.call(this, ...args);
        }
    }
}
