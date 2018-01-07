<h1>Hello Create</h1>
<form action="{{route('todo.store')}}" method="post">
  <input type="text" name="text" value="Todo from form" />
  {{ csrf_field() }}
  <input class="button" type="submit" name="" value="Save" />

</form>
