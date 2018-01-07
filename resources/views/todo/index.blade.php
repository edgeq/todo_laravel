@extends('home')
@section('content')
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
