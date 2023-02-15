import {lessonsType} from './destructuring.test';
import {getMouseEventProps} from '@testing-library/user-event/dist/keyboard/getEventProps';
import { useState } from 'react';

type PropsType = {
    title: string
    man: ManType
    food: [string]
    car: {model:string}
}
export type ManType = {
    name: string,
    age: number
    lessons: lessonsType[]
    address: {
        street: {
            title: string
        }
    }
}
function useDimychState(m:string) {
    return [ m, function () {}]
}
function useDimychState2(m:string) {
    return [ m, function () {}]
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const { title, man, ...restProps } = props
    const [message, setMessage] = useState<string>('hello');

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}