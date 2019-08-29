export function onReady(cb: () => void) {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        cb();
    } else {
        document.addEventListener('DOMContentLoaded', cb);
    }
}

export function getNode<T extends Element>(selector: string): T {
    const node = document.querySelector<T>(selector);
    if (!node) {
        throw new Error('DOM node not found using the selector: ' + selector);
    }
    return node;
}
