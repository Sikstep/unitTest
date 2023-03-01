import {userType} from './09_01';


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

    const address = {
        title: 'Minsk',
    }

    let user: userType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    // let addr = user.address

    let user2: userType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    user2.address.title = 'Minsk City';


    expect(user.address.title).toBe('Minsk City');
    expect(user2.address.title).toBe('Minsk City');
})

test('reference type array test', () => {

    const address = {
        title: 'Minsk',
    }

    let user: userType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let user2: userType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [ user, user2, { name: 'Misha', age: 18, address: address}]

    const admins = [ user, user2]

    admins[0].name = 'Dmitry';

    address.title = 'Minsk City';


    expect(users[0].name).toBe('Dmitry');
    expect(user.name).toBe('Dmitry');
})

test('sort array test', () => {
  const letters = ['c', 'd', 'a', 'z', 'e']

    pasportist(letters);

  expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])

});

function pasportist(letters: Array<string>) {
    [...letters].sort()
}