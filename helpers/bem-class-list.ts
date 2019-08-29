import BemClassList, { BemModifiers } from '../utilites/bem-class-list';

export default function(baseClass: string, modifiers?: BemModifiers): BemClassList {
    return new BemClassList(baseClass, modifiers);
}
