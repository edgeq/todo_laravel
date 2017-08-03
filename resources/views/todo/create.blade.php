@extends('home')
@extends('todo.menu', ['active' => 'create'])
@section('content')
    <h1>Create a new TODO</h1>
    <form method="post" action="{{route('todo.store')}}">
        <input type="text"
               name="text"
               value="I created this todo in my form already"/>
        {{ csrf_field() }}
        <input type="submit" value="Save"/>
    </form>
@endsection