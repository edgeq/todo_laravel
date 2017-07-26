<?php
require 'dog.php';
class fancyDog extends dog {
	protected $hairCut;
	public function __construct( $birthday, $hairCutName) {
		$this->hairCut = $hairCutName;
		parent::__construct( $birthday );
	}
}

$courtneysPoodle = new fancyDog( '2019-05-15', 'Buzz Cut');
echo 'Courtney\'s Poodle birthday: ' . $courtneysPoodle->getBirthday();