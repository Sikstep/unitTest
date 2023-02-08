// let arr = [];
//
// beforeEach (()=>{
//     arr = [1,2,3,4,5,6,7,8,9,10,23,52,763,46];
//
// })

import {chipCourse, courses, predicate} from './04';

test('should take ald men older then 90', ()=> {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test('should take courses then chipper 160', ()=> {


    const chipper = courses.filter(chipCourse);

    expect(chipper.length).toBe(2);
    expect(chipper[0].price).toBe(110);
    expect(chipper[1].price).toBe(150);

})

test('get only complited tasks', ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ];

    const complited = tasks.filter(el=>el.isDone);

    expect(complited.length).toBe(2);
    expect(complited[0].title).toBe('Milk');
    expect(complited[1].title).toBe('Sugar');
})

test('get only uncomplited tasks', ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ];

    const uncomplited = tasks.filter(el => !el.isDone);

    expect(uncomplited.length).toBe(2);
    expect(uncomplited[0].title).toBe('Bread');
    expect(uncomplited[1].title).toBe('Solt');
})