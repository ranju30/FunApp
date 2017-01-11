var upToTwenty = function(number) {
  var oneToTwenty = {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',18:'eighteen',19:'nineteen',20:'twenty'}
  return oneToTwenty[number];
}

var belowHundred = function(number){
  var dividerMapTillHundred = {2:'twenty',3:'thirth',4:'fourty',5:'fifty',6:'sixty',7:'seventy',8:'eighty',9:'ninety'}
  return dividerMapTillHundred[number.toString().split('')[0]] + ' ' + upToTwenty(number.toString().split('')[1]);
}

var hundredSerise = function(number) {

}
var divider = [100,1000,100000];
var dividerMap = ['hundred','thousand','thousand','one lakh']

var represent = function (number, result) {
  if(result == undefined){
    result = '';
  }
  if(upToTwenty(number)) {
    return upToTwenty(number);
  }
  var numberLength = number.toString().length;
  if(numberLength < 3){
    result = result + ' ' + belowHundred(number);
    return result;
  }
  var dividerNext = divider[numberLength-3];
  console.log('dividerNext',dividerNext);

  result = result +' '+ upToTwenty(Math.trunc(number/dividerNext)) + ' ' + dividerMap[divider.indexOf(dividerNext)];
  result = result +' '+ number%dividerNext ? represent(number%dividerNext,result):"";
  return result;
}
console.log('result = ',represent(100))
