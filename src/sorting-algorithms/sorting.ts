export const bubbleSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number
) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 101 - speed));
      }
    }
  }
};

export const insertionSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number
) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 101 - speed));
    }
    arr[j + 1] = key;
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 101 - speed));
  }
};

export const quickSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number,
  low = 0,
  high = arr.length - 1
) => {
  if (low < high) {
    const pi = await partition(arr, setArray, speed, low, high);
    await quickSort(arr, setArray, speed, low, pi - 1);
    await quickSort(arr, setArray, speed, pi + 1, high);
  }
};

const partition = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number,
  low: number,
  high: number
): Promise<number> => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 101 - speed));
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await new Promise((resolve) => setTimeout(resolve, 101 - speed));

  return i + 1;
};

export const mergeSort = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number,
  low = 0,
  high = arr.length - 1
) => {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    await mergeSort(arr, setArray, speed, low, mid);
    await mergeSort(arr, setArray, speed, mid + 1, high);
    await merge(arr, setArray, speed, low, mid, high);
  }
};

const merge = async (
  arr: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  speed: number,
  low: number,
  mid: number,
  high: number
) => {
  const leftArr = arr.slice(low, mid + 1);
  const rightArr = arr.slice(mid + 1, high + 1);

  let i = 0,
    j = 0,
    k = low;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 101 - speed));
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 101 - speed));
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 101 - speed));
  }
};