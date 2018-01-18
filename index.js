function breakOut(array, changeValue, stopValue) {
  array.forEach((element, index, array) => {
    if (element === stopValue) {
      break;
    } else {
      array[index] = changeValue;
    }
  });
}

function keepGoing(array, changeValue, skipValue) {

}

function findBy(array, findFn) {

}
