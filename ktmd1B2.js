let number = [11,12,13,14,15,12,16,17,19,10];

function tryRemoveFromArray(arr, index) {

    let num = [];

    if (index < 0 || index > arr.length) {
        num = arr;
        return num;
    } else {
        for (let i = 0; i < index; i++) {
            num[i] = arr[i];
        }
        for (let i = index + 1; i < arr.length; i++) {
            num[i] = arr[i];
        }
    }
    return num;
}

console.log(tryRemoveFromArray(number, 3));