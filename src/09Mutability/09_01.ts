import React from 'react';

export type userType = {
    name: string
    age: number
}

let user = {
    name: 'Dimych',
    age: 32,
}

const icreaseAge = (us: userType) => {
    us.age++;
}
icreaseAge(user);