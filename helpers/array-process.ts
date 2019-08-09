export default function <T>(
    items: Array<T>,
    fn: (el: T, next: () => void) => void,
    done?: () => void
): void {

    let i = 0;

    (function step() {
        if (i < items.length) {
            fn(items[i], () => {
                i++;
                step();
            });
        } else {
            if (done) {
                done();
            }
        }
    })();
}