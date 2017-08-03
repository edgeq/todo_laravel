@extends('home')


@extends('todo.menu', ['active' => 'show'])

@section('content')
    {{$todo->text}}
    <input type="checkbox"
           name="completed"
           @if($todo->completed) checked @endif/>
    <form method="post" action="{{route('todo.destroy', $todo)}}">
        {{ csrf_field() }}
        {{method_field('DELETE')}}
        <input type="submit"
               value="Delete the TODO: {{$todo->text}}"
               class="btn btn-danger"/>
    </form>
    {{method_field('DELETE')}}
@endsection