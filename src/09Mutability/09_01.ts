export type userType = {
    name: string
    age: number
    address: {title: string}
}

let user = {
    name: 'Dimych',
    age: 32,
}

const icreaseAge = (us: userType) => {
    us.age++;
}
