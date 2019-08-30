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

export function getNodePosition(el: Element): ClientRect {
    const bounds = el.getBoundingClientRect();
    return {
        height: bounds.height,
        width: bounds.width,
        top: bounds.top + document.body.scrollTop,
        right: bounds.left + document.body.scrollLeft + bounds.width,
        bottom: bounds.top + document.body.scrollTop + bounds.height,
        left: bounds.left + document.body.scrollLeft
    };
}
