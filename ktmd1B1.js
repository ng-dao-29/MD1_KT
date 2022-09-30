let ar = [2,3,7,4,8,9,12];

function Max3(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                max = arr[i];
                arr[i] = arr[j];
                arr[j] = max;
            }
        }
    }
    return arr[arr.length-3];
}
console.log(Max3(ar))