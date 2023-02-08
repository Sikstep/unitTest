import {dimychTransformator, ManType, people} from './05_01';

test('How people transformated after Dimich?', () => {

    expect(dimychTransformator(people)).toStrictEqual([
            {
                stack: ['css', 'html', 'js', 'tdd', 'react'],
                firstname: 'Andrew',
                lastname: 'Ivanov',
            },
            {
                stack: ['css', 'html', 'js', 'tdd', 'react'],
                firstname: 'Alexander',
                lastname: 'Petrov',
            },
            {
                stack: ['css', 'html', 'js', 'tdd', 'react'],
                firstname: 'Dmitry',
                lastname: 'Sidorov',
            },
        ]
    )
})

test('Say hello to people', () => {

    const message = people.map( el => `Hello mr.${el.name}!!!`);

    expect(message.length).toBe(3);
    expect(message[0]).toBe('Hello mr.Andrew Ivanov!!!');
    expect(message[1]).toBe('Hello mr.Alexander Petrov!!!');
    expect(message[2]).toBe('Hello mr.Dmitry Sidorov!!!');
})