const ages = [18, 20, 22, 1, 100, 90, 14];

export const predicate = (age: number) => {
    return age > 90;
}
const oldAges = [100]; // >90

type CourseType = {
    title: string
    price: number
}

export const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

export const chipCourse = (arr: CourseType) => {
    return arr.price < 160;
}