export type ManType = {
    name: string
    age: number
}

export const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
];

export const dimychTransformator = (man: Array<ManType>) => {
    const devs = man.map(el => (
        {
            stack: ['css', 'html', 'js', 'tdd', 'react'],
            firstname: el.name.split(' ')[0],
            lastname: el.name.split(' ')[1],
        }
    ));
    return devs;

}


