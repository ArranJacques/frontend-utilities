import ClassList, { ClassList as Cl } from '../utilites/class-list';

export function classList(classes?: Cl): ClassList {
    return new ClassList(classes);
}