<?php

// Name information
$first = 'Selena';
$last  = 'Beharry';
//Using double quotes
$full  = "$first $last";
//Using single quotes
$full = $first . ' ' . $last;

// Age information
$birth_year = "1993";
$current_year = "2016";
$age = $current_year + $birth_year;

echo "My name is $full." . PHP_EOL;
echo "I am $age years old." . PHP_EOL;
