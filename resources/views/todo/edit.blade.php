@extends('home');
@extends('todo.menu', ['active' => 'edit'])
@section('content')
    <h3>Edit TODO</h3>
    <form method="post" action="{{route('todo.update', $todo)}}">
        <input type="text"
               name="text"
               value="{{$todo->text}}"/>
        {{ csrf_field() }}
        {{method_field('PUT')}}
        <label for="complete">Complete
            <input type="checkbox"
                   id="complete"
                   name="completed"
                   @if($todo->completed) checked @endif/>
        </label>
        <label for="sticky">Sticky
            <input type="checkbox"
                   name="sticky"
                   id="sticky"
                   @if($todo->sticky) checked @endif/>
            <input type="submit" value="Update" class="btn btn-success"/>
        </label>
    </form>
@endsection