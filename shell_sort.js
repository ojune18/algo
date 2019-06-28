function shell_sort(arr) {
  var len = arr.length;

  var gap = len / 2;

  for (let index = gap; index > 0; index = gap) {
    let i = 0;

    while (i + index < len) {
      if (arr[i] > arr[i + gap]) {
        swap(i, i + gap, gap, arr);
      }
      i += 1;
    }
    gap = Math.floor(gap / 2);
  }
  console.log(arr);
}

function swap(i, index, gap, arr) {
  let t = arr[i];
  arr[i] = arr[index];
  arr[index] = t;
  if (arr[i - gap] > -1 && arr[i - gap] > arr[i]) {
    swap(i - gap, i, gap, arr);
  }
}

shell_sort([2, 9, 10, 3, 6, 8, 1, 7, 4]);
//shell_sort([2, 8, 6, 9, 7]);
