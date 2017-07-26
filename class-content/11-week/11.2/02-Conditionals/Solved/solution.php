<?php

// Name information
$first = 'Peleke';
$last  = 'Sengstacke';
$full  = "$first $last";

// Age information
$birth_year = 1993;
$current_year = 2016;
$age = $current_year - $birth_year;

echo "My name is $full.\n";
if (strlen($full) > 12)
  echo "It's a long name.\n";
else
  echo "It's a short name.\n";

echo str_repeat('=', 12) . "\n";

echo "I am $age years old.\n";
if ($age > 21)
  echo "Sake! Sake! Sake!\n";
elseif ($age === 21)
  echo "Just slipped by! Sake! Sake! Sake!\n";
else
  echo "No Sake for me :(\n";


//BAC Calculator
$gender = 'male';
$drinks = 6;
$weight = 200;
$legal_limit = .08;
$hours_passed = 2;

if ( 'male' == $gender ) {
	$bodyWater  = .58;
} else {
	$bodyWater = .49;
}
$bac = ($drinks * .806 * 1.2) / ($weight * $bodyWater);
$bac -= .017 * $hours_passed;
$bac *= 10;
echo 'BAC = ' . $bac . PHP_EOL;
if ($bac > 0.40) {
	echo 'DIAL 911. YOU ABOUT TO DIE' . PHP_EOL;
} else if ($bac > 0.30) {
	echo 'Can you read this? You are definitely blacked out.' . PHP_EOL;
} else if ($bac > $legal_limit) {
	echo 'CALL AN UBER. YOU TOO DRUNK TO DRIVE.' . PHP_EOL;
} else {
	echo 'Safe to drive.' . PHP_EOL;
}