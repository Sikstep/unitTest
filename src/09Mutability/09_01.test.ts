import {userType} from './09_01';


const icreaseAge = (us: userType) => {
    us.age++;
}

test('reference type test', () => {
    let user = {
        name: 'Dimych',
        age: 32,
    }
    icreaseAge(user)

    expect(user.age).toBe(33);

    const superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000);

})

test('array test', () => {
    let users = [
        {
            name: 'Dimych',
            age: 32,
        },
        {
            name: 'Dimych',
            age: 32,
        },
    ]

    let admins = users;

    admins.push({name: 'Bandugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandugan', age: 10});



})