import React from 'react';
import {findAllByDisplayValue} from '@testing-library/react';



export const User = () => {

    const deleteUser = () => {
        alert('user have been deleted')
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    return <div>Dumych
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}