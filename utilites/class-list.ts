export type ClassList = string | Array<string>;

export default class {

    classList: Array<string> = [];

    constructor(classes?: ClassList) {
        if (classes) {
            this.addToList(classes);
        }
    }

    public add(classes: ClassList, condition?: any): void {

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

    protected addToList(classes: ClassList): void {
        this.classList = this.classList.concat(
            Array.isArray(classes) ? classes : [classes]
        );
    }

}