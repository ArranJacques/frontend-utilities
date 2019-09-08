import ClassList, { Classes } from './class-list';

export type BemModifiers = Classes;

export default class extends ClassList {

    baseClass: string;

    constructor(baseClass: string, modifiers?: BemModifiers) {
        super();
        this.baseClass = baseClass;
        if (modifiers) {
            this.add(modifiers);
        }
    }

    public add(modifiers: BemModifiers | undefined, condition?: any): this {
        return super.add(modifiers, arguments.length === 1 ? true : condition);
    }

    public get(): string[] {
        return this.getClassList();
    }

    public toString(): string {
        return this.getClassList().join(' ').trim();
    }

    protected getClassList(): string[] {
        const cl = [this.baseClass];
        this.classList.forEach(c => cl.push(`${this.baseClass}--${c}`));
        return cl;
    }
}
