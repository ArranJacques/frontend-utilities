export type Classes = string | Array<string>;

export default class {

    classList: Array<string> = [];

    constructor(classes?: Classes) {
        if (classes) {
            this.addToList(classes);
        }
    }

    public add(classes: Classes, condition?: any): void {

        const con = arguments.length === 1 ? true : condition;

        if (typeof con === 'function') {
            if (con()) {
                this.addToList(classes);
            }
        } else if (con) {
            this.addToList(classes);
        }
    }

    public string(): string {
        return this.toString();
    }

    public toString(): string {
        return this.classList.join(' ').trim();
    }

    protected addToList(classes: Classes): void {
        this.classList = this.classList.concat(
            Array.isArray(classes) ? classes : [classes]
        );
    }

}