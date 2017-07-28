<?php if ( isset( $_REQUEST['your_name']) ) : ?>
	<h2>You sent me this data: </h2>
	<?php echo $_REQUEST['your_name']; ?>
<?php else: ?>
	<!DOCTYPE html>
	<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=en-us"/>
		<title>Testing Form</title>
	</head>
	<body>
	<div id="wrapper">
		<form method="post" action="index.php">
			<input type="text" name="your_name" value="Jim Bob"/>
			<input type="submit" value="Send Data!"/>
		</form>
	</div>
	</body>
	</html>
<?php endif; ?>