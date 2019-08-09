const INTERVAL = 500;
const callbacks: Function[] = [];
let timer: any;

type Info = {
    width: number,
    height: number,
    scrollX: number,
    scrollY: number
};

window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => callbacks.forEach(cb => cb()), INTERVAL);
});

export function info(): Info {
    return {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight,
        scrollX: window.scrollX || window.pageXOffset,
        scrollY: window.scrollY || window.pageYOffset
    };
}

export function onLoad(cb: () => void): void {
    if (document.readyState === 'complete') {
        cb();
    } else {
        window.addEventListener('load', cb);
    }
}

export function onResize(cb: Function): void {
    callbacks.push(cb);
}