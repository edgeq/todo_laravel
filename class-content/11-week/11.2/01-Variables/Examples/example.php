<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=en-us"/>
	<title></title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
				crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
				integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
				crossorigin="anonymous">

</head>
<body>
<div id="wrapper">
	<div id="header">
	  <?php
	  if ( date( 's' ) % 2 ) {
		  $headerClass = 'text-danger';
		  $btnClass    = 'btn-success';
		  $bodyColor 	= 'red';
	  } else {
		  $headerClass = 'text-success';
		  $btnClass    = 'btn-danger';
		  $bodyColor = 'darkgreen';
	  }
	  ?>
		<h1 class="<?php print $headerClass ?>">Hello, PHP</h1>
	</div>
	<div id="body">
	  <?php
	  $name = 'Bob';
	  $age  = 23;

	  // Automatically inserts the value of $name.
	  echo '<span class="btn ' . $btnClass . '">My name is ' . $name . '.</span>'; ?>
		This is a second line of raw text
	  <?php
	  echo 'What happens if I make $money';
	  // Literally prints $name. Also note that:
	  //   1. echo does not add newlines for us; and
	  //   2. You concatenate strings with a period: .
	  echo '$name -- that probably isn\'t what you wanted to print.' . "\n";

	  // PHP offers most of the same arithmetic operation as JavaScript.
	  // The one difference is that it has built-in exponentiation.
	  $squared_age = $age ** 2;
	  echo "$squared_age is much older than I'll ever be.\n"; ?>

	</div>
	<div id="footer">
	  <?php echo htmlentities( '©' ) ?><?php echo date( 'Y h:i:s' ); ?>
	</div>
</div>
<style>
	body {
		background-color: <?php echo $bodyColor?>;
	}
</style>
</body>
</html>