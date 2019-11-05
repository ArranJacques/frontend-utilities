export default function (value: any): boolean {
    return value && typeof value === 'object' && value.constructor === Object;
}
