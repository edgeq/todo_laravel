<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get( '/',
	function () {

		$todoitems = [
			'Make sure blades work',
			'Check out the routes, yo',
			'Install php',
			'Install composer',
			'Get composer to work',
			'Fight some more with composer',
			'Install Laravel',
			'Pray Laravel works',
			'Fix errors',
			'Write list'
		];

		return view( 'home', [
			'title' =>"List of my TODOS",
			'todoitems' => $todoitems
		]  );
	} );
Route::resource('/todo', 'TodoController');