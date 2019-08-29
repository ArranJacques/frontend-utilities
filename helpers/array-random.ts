export default function <T>(arr: Readonly<Array<T>>): T {
    return arr[Math.floor(Math.random() * arr.length)];
}
