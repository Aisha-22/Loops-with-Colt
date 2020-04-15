var text1 = "";
var num = -10;

while(num <= 19) {
    text1 += " " + num;
    console.log(num);
  num++;
    
}
document.getElementById("demo").innerHTML = text1;

var text2 = "";
var num = 10;

while(num <= 40) {
    text2 += " " + num;
    console.log(num);
  num+=2;
    
}
document.getElementById("demo2").innerHTML = text2;

var text3 = "";
var num = 300;

while(num <= 333) {
    if (num % 2 !== 0){
        text3 += " " + num;
    console.log(num);
    }
  num+=1;
    
}
document.getElementById("demo3").innerHTML = text3;

var text4 = "";
var num = 5;

while(num <= 50) {
    if (num % 5 === 0 && num % 3 === 0){
        text4 += " " + num;
    console.log(num);
    }
  num+=1;
    
}
document.getElementById("demo4").innerHTML = text4;
