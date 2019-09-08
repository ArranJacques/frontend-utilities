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

    public toString(): string {
        return !this.classList.length ? this.baseClass : this.baseClass + ' ' + this.classList.map(
            c => `${this.baseClass}--${c}`
        ).join(' ').trim();
    }
}
