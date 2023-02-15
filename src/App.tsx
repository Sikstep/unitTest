import React from 'react';
import './App.css';


function App() {

    const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat'];
    const users = names.map((el, index) => ({id: index + 1, name: el}));
    console.log(users)

    const LiElements = () => {
        return (
            <>

                {names.map(el => (
                    <li>
                        {el}
                    </li>
                ))}
            </>
        )
    }
    const LiEl = names.map(el => <li>{el}</li>)

    return (
        <div className="App">
            <ul>
                <div><LiElements/></div>
                {LiEl}
                {users.map( el => <li key={el.id}>{el.id} {el.name}</li> )}
            </ul>
        </div>
    );
}

export default App;
