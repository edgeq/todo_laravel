@section('actions')
    <li role="presentation" class="@if($active == 'create') active @endif"><a href="{{route('todo.create')}}"
                                        class="">Create a new TODO</a>
    </li>
    @if(isset($todo))
    <li role="presentation" class="@if($active == 'show') active @endif">
        <a href="{{route('todo.show', $todo)}}"
           class="">View TODO</a>
    </li>
    <li role="presentation" class="@if($active == 'edit') active @endif"><a href="{{route('todo.edit', $todo)}}"
                                        class="">Edit TODO</a>
    </li>
    @endif
@endsection