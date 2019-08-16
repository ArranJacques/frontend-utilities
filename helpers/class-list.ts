import ClassList, { ClassList as Cl } from '../utilites/class-list';

export default function(classes?: Cl): ClassList {
    return new ClassList(classes);
}