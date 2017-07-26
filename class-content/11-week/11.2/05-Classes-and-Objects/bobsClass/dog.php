<?php
/**
 * Project: 05-2017-Class-Repository-FSF-FT
 * @license GPL v2
 * Build: @BUILD_DATE@
 * Version: @VERSION@
 */

class dog {
	protected $breed = false;
	public function setBreed ($breedName) {
		if (false === $this->breed) {
			$this->breed = $breedName;
		} else {
			throw new Exception('Dog breed already set');
		}
	}
	public function getBreed ()
	{
		return $this->breed;
	}

	public function getBirthday ()
	{
		return 'Your dog was born at: ' . date( 'Y-m-d h:i:s', $this->birthday);

	}
	/**
	 * Unix timestamp of the dog's birthday
	 * @var false|int
	 */
	protected $birthday;
	public function __construct($birthday) {
		$this->birthday = strtotime( $birthday);
	}

}

$bobsDog = new dog('May 15th 2009 15:30:00');
$bobsDog->setBreed( 'Catahoula Leopard');
echo 'Breed = ' . $bobsDog->getBreed() . PHP_EOL;
echo 'Birthday  = ' . $bobsDog->getBirthday() . PHP_EOL;
