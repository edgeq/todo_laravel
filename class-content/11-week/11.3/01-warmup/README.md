# PHP Warmup

## Vanilla PHP File
1. Create a new php file that contains an array, a boolean and a string variable
## PHP Class
1. Create a new php file that contains a php class - the class will create `student` objects
    * Each object should contain the following public properties
      * name
      * phone number
    * Each object should contain the following private properties
      * Grades `array`
      * Attendance `array`
    * The private properties must have setters, and _may_ have getters - depending on how you want the logic to function.  
    * Each object should have the following methods:
      * Calculate GPA - calculates the GPA from the `grades` array.
      * Calculate attendance - are they above the attendance threshold for absenses? 
      * Are they eligible for a certificate? (less than 4 absences *and* "GPA" greater than 2.5)
1. Created a new student using the above class, and test that the methods all work.