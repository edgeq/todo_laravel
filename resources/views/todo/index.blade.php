@extends('home')
@section('content')
<h1>Tasks</h1>
<a href="{{route('todo.create')}}" class="btn btn-success btn-xs">Add a Task</a>
<div class="row">
  <ul>
    @foreach($todos as $todo)
    <li>
      {{$todo->text}}
        @if($todo->completed)
        <span class="text-success">Done!</span>
        @else
        <span class="text-danger">Not Done!</span>

        @endif
      </li>
      @endforeach
  </ul>
</div>
@endsection
