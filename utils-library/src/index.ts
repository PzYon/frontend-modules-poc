export interface ISimpleResult {
    value: string;
}


export function getResult(value: string): ISimpleResult {
    return {
        value: value
    };
}
