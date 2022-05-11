import React, {useEffect} from 'react';
import './App.css';
import {Provider, useSelector, useDispatch} from "react-redux";
import {store, reducer} from "./lib/store";
import {Todo} from "./lib/api";


function TodoApp () {
  const todos =  useSelector((state: Todo[]) => state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "TODOS_FETCH_REQUESTED"});
  }, [])
  return (
    <div className="App">
      <div className="todos">
        {todos?.map((todo) => (
          <React.Fragment key={todo.id}>
            <div>
              <input
                type="checkbox"
                checked={todo.done}
                // onChange={() => dispatch(toggleTodo(todo))}
                onChange={() => {}}
              />
              <span>{todo.text}</span>
            </div>
            {/* <button onClick={() => dispatch(removeTodo(todo))}>Delete</button> */}
            <button onClick={() => {}}>Delete</button>
          </React.Fragment>
        ))}
      </div>
      <div className="add">
        {/* <input type="text" ref={textRef} />
        <button onClick={onAdd}>Add</button> */}
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
