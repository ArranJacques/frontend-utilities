export default function isObject(value: any): boolean {
    return value && typeof value === 'object' && value.constructor === Object;
}
