export default function (number: number, delimiter: string = ','): string {
    return number.toString().replace(/(\..*)$|(\d)(?=(\d{3})+(?!\d))/g, (digit, fract) => fract || digit + delimiter);
}
