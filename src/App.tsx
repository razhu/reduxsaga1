import React from 'react';
import './App.css';
import {Provider, useSelector} from "react-redux";
import {store} from "./lib/store";

function TodoApp () {
  return <div className="App"></div>
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp/>
    </Provider>
  );
}

export default App;
