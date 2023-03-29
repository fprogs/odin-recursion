const merge = (left, right) => {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i++]);
    } else {
      merged.push(right[j++]);
    }
  }
  while (i < left.length) {
    merged.push(left[i++]);
  }
  while (j < right.length) {
    merged.push(right[j++]);
  }
  return merged;
}

const sort = arr => {
  if (arr.length <= 1) return arr;

  const left = [];
  const right = [];
  const middle = parseInt(arr.length / 2);
  for (let i = 0; i < middle; i++) {
    left.push(arr[i]);
  }
  for (let i = middle; i < arr.length; i++) {
    right.push(arr[i]);
  }
  const sortedLeft = sort(left);
  const sortedRight = sort(right);
  return merge(sortedLeft, sortedRight);
}

const generateArray = length => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 1001));
  }
  return arr;
}

const arr = generateArray(100);
console.log(arr);
console.log(sort(arr));
