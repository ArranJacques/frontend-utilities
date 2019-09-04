import { info } from './window';

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
        top: bounds.top + info().scrollY,
        right: bounds.left + bounds.width + info().scrollX,
        bottom: bounds.top + bounds.height + info().scrollY,
        left: bounds.left + info().scrollX
    };
}
