import {LocalCityType, student, StudentType} from '../02/02';
import {CityType, GovermentType, HousesType} from '../02/02_02';

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (st: StudentType, skill:string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export function makeStudentActive (isActive: StudentType) {
    isActive.isActive = true;
}

export function doesStudentLiveIn (studentLive: StudentType, city: string) {
    return  studentLive.address.city.title === city;
}

export function addMoneyToBudget (budget: GovermentType, change: number) {
    return budget.budget += change;
}

export function repairHouse (house:HousesType) {
    return house.repaired = true;
}

export const toFireStaff = (goverment: GovermentType, number: number) => {
    return goverment.staffCount -= number;
}

export const toHireStaff = (goverment: GovermentType, number: number) => {
    return goverment.staffCount += number;
}

export const createMessage = (props: CityType) => {
    return (`Hello ${props.title} citizens. I want be happy. All ${props.citizensNumber} men`);
}