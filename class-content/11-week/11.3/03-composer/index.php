<form action="index.php" method="get">
	Search for gifs:<br>
	<input type="text" name="search" value="friends"><br>
	<button type="submit">Submit</button>
</form>
<?php require 'vendor/autoload.php';
$client      = new \GuzzleHttp\Client();
$offset = isset( $_GET['offset']) ? $_GET['offset
'] : 0;
$res         = $client->request( 'GET',
	"https://api.giphy.com/v1/gifs/search?q=" . $_GET['search'] . "&api_key=dc6zaTOxFJmzC&limit=10&offset=" . $offset );
$json_object = json_decode( $res->getBody() );
foreach ( $json_object->data as $gif ) {
//	var_dump( $gif->images->original);
	echo '<img src="' . $gif->images->original->url . '" height="' . $gif->images->original->height . '" width="' . $gif->images->original->width . '" alt="" />';
}?>
<a href="index.php?offset=<?php echo $offset + 10;?>&search=<?php echo $_GET['search'];?>">Next Page &rarr;</a>
