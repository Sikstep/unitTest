import React, {ChangeEvent, MouseEvent} from 'react';


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.value)

    }

    const nameNameChanged = () => {
        console.log('name changed')
    }
    const onBlurChanged = () => {
        console.log('focus changed')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Age changed' + e.currentTarget.value)
    };

    return <div>
        <textarea tabIndex={1} onChange={nameNameChanged}>Dumych</textarea>
        <input tabIndex={2} onChange={onAgeChanged} type={'number'}/>
        <button name={'delete'} tabIndex={3} onClick={deleteUser}>search</button>

    </div>
}