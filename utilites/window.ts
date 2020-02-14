const INTERVAL = 500;
const callbacks: Function[] = [];
let timer: any;

type Info = {
    width: number,
    height: number,
    scrollX: number,
    scrollY: number
};

if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(() => callbacks.forEach(cb => cb()), INTERVAL);
    });
}

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

function easeOutQuart(t: number): number {
    return 1 - (--t) * t * t * t;
}

export function scrollYTo(position: number, duration?: number, cb?: () => void): void {

    const start = info().scrollY;
    const time = Date.now();
    const dur = duration ? duration : Math.abs(start - position) / 3;

    (function step() {
        const dx = Math.min(1, (Date.now() - time) / dur);
        const pos = start + (position - start) * easeOutQuart(dx);
        window.scrollTo(0, pos);
        if (dx < 1) {
            requestAnimationFrame(step);
        } else {
            if (cb) {
                cb();
            }
        }
    })();
}
