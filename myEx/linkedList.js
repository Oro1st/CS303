let list = { value: 1 };
list.add = { value: 2 };
list.add.add = { value: 3 };
list.add.add.add = { value: 4, add: null };

console.log('LinkedList{' + print(list) + '}');


function print(linkedList) {
    if (linkedList.add == null) {
        return linkedList.value;
    }

    return linkedList.value + ', ' + print(linkedList.add)

}