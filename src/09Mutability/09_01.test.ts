import { userType } from "./09_01";


const icreaseAge = (us: userType) => {
    us.age++;
}

test('big test', () => {
    let user = {
        name: 'Dimych',
        age: 32,
    }
    icreaseAge(user)

    expect(user.age).toBe(33);
})
