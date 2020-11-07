export default function stringPad(str: string, size: number, char: string, pos: 'left' | 'right' = 'left'): string {
    let s = str + '';
    while (s.length < size) {
        if (pos === 'left') {
            s = char + s;
        } else {
            s = s + char;
        }
    }
    return s;
}
