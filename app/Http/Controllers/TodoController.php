<?php

namespace App\Http\Controllers;

use App\todo;
use Illuminate\Http\Request;

class TodoController extends Controller {
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index() {
		//
		return view( 'todo.index', [ 'todos' => todo::all() ] );
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create() {
		return view( 'todo.create' );
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function store( Request $request ) {

		if ( $request->get( 'bulkcompleted', false) )  {
			//Do bulk operations here
			$ids = array_keys($request->get('bulkcompleted'));
			\DB::table('todos')->whereIn('id', $ids)->update([ 'completed'=> 1]);
		} else {
			//Work on 1 model
			$todo       = new todo();
			$todo->text = $request->get( 'text' );
			$todo->save();
		}

		return redirect( route( 'todo.index' ) );
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\todo $todo
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function show( todo $todo ) {
		return view( 'todo.show', [ 'todo' => $todo ] );
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\todo $todo
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function edit( todo $todo ) {
		return view( 'todo.edit', [ 'todo' => $todo ] );
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  \App\todo                $todo
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function update( Request $request, todo $todo ) {
		$todo->text = $request->get( 'text' );
		if ( "on" == $request->get( 'completed', false ) ) {
			$todo->completed = 1;
		} else {
			$todo->completed = 0;
		}
		if ( "on" == $request->get( 'sticky', false ) ) {
			$todo->sticky = 1;
		} else {
			$todo->sticky = 0;
		}
		$todo->save();

		return redirect( route( 'todo.show', $todo ) );
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\todo $todo
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function destroy( todo $todo ) {
		$todo->delete();

		return redirect( route( 'todo.index' ) );
	}
}
