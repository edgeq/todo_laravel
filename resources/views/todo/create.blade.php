@extends('home')
@section('content')
<h1>Create a Task</h1>
<form action="{{route('todo.store')}}" method="post">
  <input type="text" name="text" value="Todo from form" />
  {{ csrf_field() }}
  <input class="button" type="submit" name="" value="Save" />
</form>
<br />
<a href="{{route('todo.index')}}" class="btn btn-success btn-xs">Back to Tasks</a>
<div class="row">
@endsection
