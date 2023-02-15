import {ManType} from './destructuring';

export type lessonsType = {
    title: string
}



let props: ManType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosti street',
            }
        }
    }
})


test('', () => {


    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);

    expect(title).toBe('Nezavisimosti street')
})

test('1', () => {


const [ls1, ...restLessons] = props.lessons;

expect(ls1.title).toBe('1')
expect(restLessons.length).toBe(2)

})