<?php

class student {
	public $name;
	public $phoneNumber;
	private $grades = [];
	private $attendance = [];

	public function __construct( $name, $phoneNumber ) {
		$this->name        = $name;
		$this->phoneNumber = $phoneNumber;
	}

	public function setPresent() {
		array_push( $this->attendance, true );
	}

	public function setAbsent() {
		array_push( $this->attendance, false );
	}

	public function isValidForCertificate() {
		return ( $this->isValidBasedOnAttendance() && $this->isValidBasedOnGPA() );

	}

	public function isValidBasedOnAttendance() {

		$present       = array_sum( $this->attendance );
		$total_classes = count( $this->attendance );
		$absenses      = $present - $total_classes;
		if ( 4 > $absenses ) {
			return false;
		}

		return true;


	}

	public function isValidBasedOnGPA() {
		if ( $this->getGPA() >= 2.5 ) {
			return true;
		}

		return false;

	}

	/**
	 * Calculates the average of all grades
	 * @return integer GPA
	 */
	public function getGPA() {
		$total   = array_sum( $this->grades );
		$count   = count( $this->grades );
		$average = $total / $count;
		$gpa     = ( $average / 20 ) - 1;

		return $gpa;
	}

	/**
	 * @param integer $grade 0-100 grade
	 */
	public function setGrade( $grade ) {
		$type = gettype( $grade );
		if ( "double" === $type || "integer" === $type ) {
			//Valid grade
			if ( 100 >= $grade || 0 <= $grade ) {
				//Valid grade range
				$this->grades[] = $grade;
			} else {
				//Grade outside 0-100 range
				throw new InvalidArgumentException( 'Grade should be between 0 and 100' );
			}

		} else {
			//Not valid
			throw new InvalidArgumentException( 'Grade should be a number' );
		}
	}
}

$sakina = new student( "Sakina Shivji", '321-867-5309' );