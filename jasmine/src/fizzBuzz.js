var Fizzbuzz = function(){

};

Fizzbuzz.prototype.isDivisibleBy = function(number, divisor){
  return(number % divisor === 0);
};

Fizzbuzz.prototype.Fizzbuzz = function(number){
  if (this.isDivisibleBy(number, 3) && this.isDivisibleBy(number, 5)){
    return "Fizzbuzz";
  }
  else if (this.isDivisibleBy(number, 3)){
    return "Fizz";
  }
  else if (this.isDivisibleBy(number, 5)){
    return "Buzz";
  }
  else{
    return number;
  }
}

var fizzbuzz = new Fizzbuzz

for (let number = 1; number < 21; number += 1){
  fizzbuzz.Fizzbuzz(number)
}
