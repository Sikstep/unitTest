import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonType = {
    alertMess: string
    disable?: boolean
}
export const SuperButton: React.FC<SuperButtonType> = ({alertMess, disable}) => {

    const onClickHandler = (message: string) => {
        alert(message)
    }

    return (
        <div>
            <button className={disable ? s.disable : ''} disabled={disable} onClick={() => onClickHandler(alertMess)}>Click me</button>
        </div>
    );
};

