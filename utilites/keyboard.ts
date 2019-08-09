const KeyMap = {
    arrowDown: {
        code: 40,
        names: ['ArrowDown']
    },
    arrowLeft: {
        code: 37,
        names: ['ArrowLeft']
    },
    arrowRight: {
        code: 39,
        names: ['ArrowRight']
    },
    arrowUp: {
        code: 38,
        names: ['ArrowUp']
    },
    escape: {
        code: 27,
        names: ['Escape', 'Esc']
    },
    shift: {
        code: 16,
        names: ['Shift']
    },
};

function isKey(event: KeyboardEvent, key): boolean {
    if ('key' in event) {
        return key.names.indexOf(event.key) > -1;
    } else {
        return event.keyCode === key.code;
    }
}

export function isArrowDownKey(event: KeyboardEvent): boolean {
    return isKey(event, KeyMap.arrowDown);
}

export function isArrowLeftKey(event: KeyboardEvent): boolean {
    return isKey(event, KeyMap.arrowLeft);
}

export function isArrowRightKey(event: KeyboardEvent): boolean {
    return isKey(event, KeyMap.arrowRight);
}

export function isArrowUpKey(event: KeyboardEvent): boolean {
    return isKey(event, KeyMap.arrowUp);
}

export function isEscapeKey(event: KeyboardEvent): boolean {
    return isKey(event, KeyMap.escape);
}

export function isShiftKey(event: KeyboardEvent) {
    return isKey(event, KeyMap.shift);
}