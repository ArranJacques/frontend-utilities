import ClassList, { Classes } from './class-list';

export type BemModifiers = Classes;

export default class extends ClassList {

    baseClass: string;

    constructor(baseClass: string, modifiers?: BemModifiers) {
        super(modifiers);
        this.baseClass = baseClass;
    }

    public add(modifiers: BemModifiers, condition?: any): void {
        super.add(modifiers, arguments.length === 1 ? true : condition);
    }

    public toString(): string {
        return this.baseClass + ' ' + this.classList.map(
            c => `${this.baseClass}--${c}`
        ).join(' ').trim();
    }

}
