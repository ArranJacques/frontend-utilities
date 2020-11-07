export default function arrayRandom<T>(arr: Readonly<Array<T>>): T {
    return arr[Math.floor(Math.random() * arr.length)];
}
