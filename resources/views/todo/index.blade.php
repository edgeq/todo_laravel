<h1>Hello World</h1>

@foreach($todos as $todo)
  {{$todo->text}}
  @if($todo->completed)
    DONE
  @else
      NOT DONE
  @endif
@endforeach
