export default function (el: HTMLElement, classes: string[] | string): boolean {

    const cl = Array.isArray(classes) ? classes : [classes];

    for (let i = 0; i < cl.length; i++) {
        if (el.classList.contains(cl[i])) {
            return true;
        }
    }

    return false;
}
