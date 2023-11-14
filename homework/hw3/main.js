const rows = (count + 1)/2;
for (let index = 0; index < rows; index++) {
   let str = '';
   for (let index2 = 0; index2 < index * 2 + 1; index2++) {
      str = str + '1'
      
   }
   
}


var b = [9, 7, 9, 0, 7, 8, 387, 123, 456];

var c = b.filter(function (item) {
   return (item % 2 == 0);
});

console.log(c);

function myFunction() {
  let person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
