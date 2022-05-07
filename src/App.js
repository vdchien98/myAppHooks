import React from 'react';
import NavBar from './component/NavBar';
import './App.scss';

function App() {
    const style = {
        background: '#3cce86',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div className="container px-4">
            <div className="container" style={style}>
                <h2>Việc cần làm </h2>
            </div>
            <div>
                <NavBar></NavBar>
            </div>
        </div>
    );
}

export default App;
