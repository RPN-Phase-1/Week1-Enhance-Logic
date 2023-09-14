///
function binarySearchMull(array, target) {
    let left = 0;
    let right = array.length - 1;
    let awal,akhir;
    resultIndex = [];

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            realmid = mid;
            //cekSebelahnya kekanan
            awal = mid;
            akhir = mid;
            while(realmid<array.length-1){
                if(array[realmid] == array[realmid+1]){
                    realmid++
                }else{
                    akhir = realmid;
                    break
                }
            }
            //cekSebelah kiri
            while(realmid>=0){
                if(array[realmid] == array[realmid-1]){
                    realmid--
                }else{
                    awal = realmid;
                    break
                }
            }
        }
        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    for(let i=awal; i<akhir+1; i++){
        resultIndex.push(i);
    }

    return resultIndex; // Elemen tidak ditemukan
}

//tes case
console.log(binarySearchMull([1,2,2,3,4,5],2)) // 1,2
console.log(binarySearchMull([1,2,3,5,9,9,9,9,9,9,9,9,9,9,9,11],9)) //4-14
console.log(binarySearchMull([1,2,3,5],5)) // 3
console.log(binarySearchMull([0,1,2,3,5],0)) // 0
console.log(binarySearchMull([0,1,2,3,5],1)) // 1
console.log(binarySearchMull([0,2,3,5],12)) // []
console.log(binarySearchMull([0,2,12,5],12)) // []
console.log(binarySearchMull([],2)) // []

