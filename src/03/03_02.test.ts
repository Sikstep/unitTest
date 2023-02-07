import {CityType} from '../02/02_02';
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from './03';


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },
            {
                buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'White street'
                    }
                }
            },
        ],
        govermentBuilding: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.govermentBuilding[0], 100000);

    expect(city.govermentBuilding[0].budget).toBe(300000);

})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.govermentBuilding[1], -100000);

    expect(city.govermentBuilding[1].budget).toBe(400000);

})

test('test city should contains hospital and fire station', () => {
    expect(city.govermentBuilding.length).toBe(2);

    expect(city.govermentBuilding[0].type).toBe('HOSPITAL');
    expect(city.govermentBuilding[0].budget).toBe(200000);

})

test('House should be repared', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()

})

test('staff should be increased', ()=> {
    toFireStaff(city.govermentBuilding[0], 20);
    expect(city.govermentBuilding[0].staffCount).toBe(180);
})

test('staff should be repared', ()=> {
    toHireStaff(city.govermentBuilding[0], 20);
    toHireStaff(city.govermentBuilding[1], 50);
    expect(city.govermentBuilding[0].staffCount).toBe(220);
    expect(city.govermentBuilding[1].staffCount).toBe(1050);
})

test('Greeting message should be correct for city', ()=> {
    const message = createMessage(city);

    expect(message).toBe('Hello New York citizens. I want be happy. All 1000000 men')
})