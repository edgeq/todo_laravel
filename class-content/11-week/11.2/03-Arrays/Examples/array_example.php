<?php

// Arrays in PHP are similar to those in JavaScript.
$names_list        = [ 'Goethe', 'Ibsen', 'Strindberg' ];
$old_array         = array( 'Bob', 'Is', 'Old' );
$associative_array = [

	"one"          => "value1",
	"name"         => [ 'Bob', 'John' ],
	"language"     => 'PHP',
	"key-to-array" => [
		'this',
		'is',
		'an',
		'array'
	]
];
printArray( $associative_array);
printArray( $old_array);
printArray( $names_list);
function printArray ($array) {
	echo str_repeat( '*', 20 ) . PHP_EOL;
	foreach ( $array as $key => $value ) {
		echo "Key = $key" . PHP_EOL;
		echo print_r( $value, true) . PHP_EOL;
	}
	echo str_repeat( '*', 20 ) . PHP_EOL;
}