# Test Driven Development (TDD)

## Part 1

With a partner, research and slack out the answers to the `#class` channel. 

* What is TDD?
* How does one _practice_ TDD?
* What are some project management strategies that require TDD?


## Part 2

For our student class from the warm-up - `pseudocode` how you would write tests to verify that things work without actually running the `interface` code. 
  * How would you verify the GPA is correct?
  * Are there edge cases that we could test?
  * How would we verify the public properties?
  * How would we verify the private properties?
  * Can we verify that the `__construct` function takes required arguments?

## Part 3

1. Use `composer` to install `PHPUnit`
1. From there - create a `tests` directory to hold our tests
1. Write a failing test - not based on our `student` class - just one as a `hello world` to make sure the testing environment works
1. Include our `student` class, and test your public methods and properties
  * Write tests for edge cases!
  * How does your "add grade" function handle a string when it expects a float? ("foobar" vs. 2.5)
  * How does your "add absence/add attendance" function handle a `boolean` when it expects a date? 

## Part 4

1. Write a (failing) test to assert that `student->addBonusPoints(int)` returns a boolean value.
1. Write another (failing) test to assert that `student->getBonusPoints(int)` returns an integer value that is equal to the sum of the previous invokations of `addBonusPoints(int)`.
1. Get the tests to pass!