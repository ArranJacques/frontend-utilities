import ClassList, { Classes } from '../utilites/class-list';

export default function(classes?: Classes): ClassList {
    return new ClassList(classes);
}
