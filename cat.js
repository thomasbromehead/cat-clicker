let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


const PrintList = (list) => {
  if (list.next === null) {
    console.log(list.value)
  } else {
    console.log(list.value)
    return PrintList(list.next)
  }
}

// Alternative

function printList(list) {

  alert(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }

}

printList(list);
