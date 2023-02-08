import {CityType, GovermentType} from '../02Obj/02_02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter( el => el.address.street.title !== street )
}
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovermentType>, count: number) => {
    return buildings.filter( el => el.staffCount > 500 );
}