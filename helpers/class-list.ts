import ClassList, { Classes } from '../utilites/class-list';

export default function classList(classes?: Classes): ClassList {
    return new ClassList(classes);
}
