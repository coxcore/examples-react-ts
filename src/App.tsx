import React from 'react';
import TodoContainer from './components/TodoContainer';
import './App.css';

function App(): React.ReactElement {
    return (
        <div className="App">
            <TodoContainer />
        </div>
    );
}

export default App;
