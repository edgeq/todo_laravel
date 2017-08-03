@extends('home')
@section('actions')
    <li role="presentation" class="active"><a href="{{route('todo.create')}}"
                                              class="">Create a new TODO</a>
    </li>
@endsection
@section('sticky')
    @foreach($todos as $todo)
        @if($todo->sticky)
            <a href="{{route('todo.show', $todo)}}">
                {{$todo->text}}
            </a>
            @if($todo->completed)
                <span class="glyphicon glyphicon-check"></span>
            @else
                <span class="glyphicon glyphicon-bookmark"></span>
            @endif
            <br/>
        @endif
    @endforeach

@endsection
@section('content')
    <form method="post" action="{{route('todo.store')}}">
        {{csrf_field()}}
        @foreach($todos as $todo)
            @if(! $todo->sticky)
                <input type="checkbox" name="bulkcompleted[{{$todo->id}}]" />
                <a href="{{route('todo.show', $todo)}}">
                    {{$todo->text}}
                </a>
                @if($todo->completed)
                    <span class="glyphicon glyphicon-check"></span>
                @else
                    <span class="glyphicon glyphicon-bookmark"></span>
                @endif
                <br/>
            @endif
        @endforeach
        <input type="submit" value="Mark Completed" />
    </form>
@endsection
