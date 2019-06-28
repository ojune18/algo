function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    j = sort(i, arr, arr[i]);
  }
  console.log(arr);
}

function sort(i, arr, index) {
  if (i > 0 && index <= arr[i - 1]) {
    arr[i] = arr[i - 1];
    sort(i - 1, arr, index);
  } else {
    arr[i] = index;
  }
}

InsertionSort([45, 2, 9, 32, 12, 8, 4]);
