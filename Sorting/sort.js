const bubble = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
const bubble2 = function (arr) {
  let swapped = false;
  while(!swapped){
    swapped = true;
    for(let i=0;i<arr.length;i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = false
      }
    }
  }
  return arr;
};

const selection = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

const Insertion = function (arr) {
  for(let i=1;i<arr.length;i++){
    let current = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > current){
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
};

function merge(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}


const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

function shellSort(arr) {
  let n = arr.length;
  for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
    console.log(gap)
      for (let i = gap; i < n; i += 1)  {
          let temp = arr[i];

          let j;
          for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
              arr[j] = arr[j-gap];
          }
          arr[j] = temp;
      }
  }
  return arr;
}


const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const selectionStr = function (arr) {
  let m = arr.split("");
  bubble(m);
  return m.join("");
};

let sortString = (str) => {
  return str.split('').reduce((sortedString, char) => {
      let inserted = false;
      for (let i = 0; i < sortedString.length; i++) {
          if (char < sortedString[i]) {
              sortedString = sortedString.slice(0, i) + char + sortedString.slice(i);
              inserted = true;
              break;
          }
      }
      if (!inserted) {
          sortedString += char;
      }
      return sortedString;
  }, '');
}

module.exports = { bubble, selection, selectionStr, Insertion, mergeSort, quickSort, sortString, bubble2, shellSort };
