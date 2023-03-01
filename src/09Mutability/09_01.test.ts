import {userType} from './09_01';
import {UserType} from '../08Arrays/08_01.test';


const icreaseAge = (us: userType) => {
    us.age++;
}

test('reference type test', () => {
    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk',
        }
    }
    icreaseAge(user)

    expect(user.age).toBe(33);

    const superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000);

})

test('array reference test', () => {
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

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount += 1;

    expect(adminsCount).toBe(101);

})

test('reference type test2', () => {
    let user: userType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk',
        }
    }

    // let addr = user.address

    let user2: userType = {
        name: 'Natasha',
        age: 30,
        address: user.address,
    }

    user2.address.title = 'Kanari';


    expect(user.address.title).toBe('Kanari');
    expect(user2.address.title).toBe('Kanari');
})