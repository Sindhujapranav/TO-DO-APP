import React from 'react';
import './App.css';
// npm install --save-dev @iconify/react @iconify/icons-ion
import { Icon } from '@iconify/react';
import trashBin from '@iconify/icons-ion/trash-bin';


const App = () => {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);


  const keyPress = (e) => {
    if (e.keyCode === 13) {
      console.log('value', e.target.value);
      setTodos(todos.concat([value]));
      setValue("");
    }
  }

  const clear = () => setTodos([]);

  return (
    <center>
      <h1 className="App-header">TO-DO-APP</h1>
      <div className="App">
        <input className="to-do-form" type="text" placeholder="Enter Text"
          value={value}
          onChange={event => setValue(event.target.value)}
          onKeyDown={keyPress}
        />

        {
          todos.map((todo, index) => (
            <div key={index} className="list">
              {todo}
              <p onClick={() => setTodos(todos.filter((todo, index2) => index !== index2))}>
                <span className="faicons"><Icon icon={trashBin} /></span>
              </p>
            </div>
          )
          )}
        <br />
        <div>
          <button className="buttons" onClick={clear}>Clear All</button>
        </div>
      </div></center>
  );
};

export default App;

