import React, {useCallback, useEffect, useRef} from 'react';
import './App.css';
import {Provider, useSelector, useDispatch} from "react-redux";
import {store, selectTodos, fetchTodos, toggleTodo, removeTodo, addTodo} from "./lib/store";

function TodoApp () {
  const todos =  useSelector(selectTodos)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [])

  const textRef = useRef<HTMLInputElement>(null);
  const onAdd = useCallback(() => {
    dispatch(addTodo(textRef.current!.value));
    textRef.current!.value = "";
  }, [dispatch])

  return (
    <div className="App">
      <div className="todos">
        {todos?.map((todo) => (
          <React.Fragment key={todo.id}>
            <div>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch(toggleTodo(todo))}
                // onChange={() => {}}
              />
              <span>{todo.text}</span>
            </div>
            <button onClick={() => dispatch(removeTodo(todo))}>Delete</button>
            {/* <button onClick={() => {}}>Delete</button> */}
          </React.Fragment>
        ))}
      </div>
      <div className="add">
        <input type="text" ref={textRef} />
        <button onClick={onAdd}>Add</button>
      </div>
    </div>    
  )
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp/>
    </Provider>
  );
}

export default App;
