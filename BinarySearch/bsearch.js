

function binarySearch(arr, target){
    let l = 0
    let r = arr.length - 1;
    if(l > r) {return false}
    while(l <= r){
        let middle = Math.floor((l+r)/2);
        if(arr[middle] < target){
            l = middle + 1
        }else if(arr[middle] > target){
            r = middle - 1
        }else{
            return middle
        }

    }
    return false
}


const arr = [1,2,3,4,5,6,7,8,9,10,11,55,20];
let target = 0;

console.log(binarySearch(arr, target))