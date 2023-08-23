function changeMe(arr) {
  for (let i = 0; i < arr.length; i++){
   let name = arr[i][0] + " " + arr[i][1]
   let umur = 0;
   if ((2023 - arr[i][3]).toString() === 'NaN'){
      umur = 'Invalid Birth Year'
   } else {
      umur = 2023 - arr[i][3]
   }
   let profile = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: umur
   }
   console.log(`${name}:`)
   console.log(profile)
  }
  // you can only write your code here!
}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""