var first_array = [2, 55, 60, 97, 86];
var second_array = [8, 6, 33, 100];
var third_array = [1, 2, 3, 4, 5, 6, 7];

function function_array(array){
    let myArray = array.toString().split("");
      if (myArray.map((x) => x == '5').includes(true)) 
      {
        console.log("!!!!!!");
      } else {
        console.log(`"there is no 5 in the array"`);
      }
}

function_array(first_array); //change between (first_array, second_array, third_array)




