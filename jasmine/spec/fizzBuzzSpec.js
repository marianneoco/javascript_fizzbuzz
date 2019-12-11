describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function(){

    it('divisible by 3', function(){
      expect(fizzbuzz.isDivisibleBy(3, 3)).toBe(true);
    });

    it('not divisible by 3', function(){
      expect(fizzbuzz.isDivisibleBy(1, 3)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleBy(5, 5)).toBe(true);
    });

    it('not divisible by 5', function(){
      expect(fizzbuzz.isDivisibleBy(2, 5)).toBe(false);
    });

  });

  describe('returns Fizz, Buzz or Fizzbuzz', function(){

    it('when a number is divisible by 3', function(){
      expect(fizzbuzz.Fizzbuzz(6)).toEqual("Fizz");
    });

    it('when a number is divisible by 5', function(){
      expect(fizzbuzz.Fizzbuzz(10)).toEqual("Buzz")
    });

    it('when a number is divisible by both 3 and 5', function(){
      expect(fizzbuzz.Fizzbuzz(15)).toEqual("Fizzbuzz")
    });

    it('when a number is divisible by neither 3 nor 5', function(){
      expect(fizzbuzz.Fizzbuzz(4)).toEqual(4)
    });

  });

});
