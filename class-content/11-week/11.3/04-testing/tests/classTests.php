<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ .  '../../student.php';

class StudentTests extends TestCase
{


	/**
	 * @covers student
	 */
	public function testCreateNewStudent () {
		$student = new student( 'I love testing mc. testerson', '407-867-5309');
		$this->assertInstanceOf( 'student', $student);
	}

	/**
	 * @expectedException InvalidArgumentException
	 *
	 */
	public function testGradeOver100ThrowsException ()
	{
		$student = new student( 'name', '444');
		$student->setGrade( '110');
	}
	/**
	 * @expectedException InvalidArgumentException
	 *
	 */
	public function testGradeUnder0ThrowsException ()
	{
		$student = new student( 'name', '444');
		$student->setGrade( '-1');
	}
	public function testGettingGPAWorks ()
	{
		$student = new student( 'name', '444');
		$grades = [100, 90, 50];
		foreach ($grades as $grade) {
			$student->setGrade( $grade);
		}
		$average = array_sum($grades) / count($grades);
		$gpa = ($average / 20) - 1;
		$this->assertSame( $gpa, $student->getGPA());

	}

}