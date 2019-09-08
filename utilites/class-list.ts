export type Classes = string | Array<string>;

export default class {

    classList: string[] = [];

    constructor(classes?: Classes) {
        if (classes) {
            this.addToList(classes);
        }
    }

    public add(classes: Classes | undefined, condition?: any): this {

        if (classes === undefined) {
            return this;
        }

        const add = arguments.length === 1 ? true : condition;

        if (typeof add === 'function') {
            if (add()) {
                this.addToList(classes);
            }
        } else if (add) {
            this.addToList(classes);
        }

        return this;
    }

    public get(): string[] {
        return this.classList;
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
