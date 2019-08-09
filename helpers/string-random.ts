export const DEFAULT_CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function (length: number = 10, chars?: string): string {

    let str = '';
    const c = chars || DEFAULT_CHAR_SET;

    for (let i = 0; i < length; i++) {
        str += c.charAt(Math.floor(Math.random() * c.length));
    }

    return str;
}