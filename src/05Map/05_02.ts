import {GovermentType, HousesType} from '../02Obj/02_02';

export const getStreetsTitlesOfGovernmentsBuildings = (streets: Array<GovermentType>) => {
        return streets.map( el => el.address.street.title)
};

export const getStreetsTitlesOfHouses = (streets: Array<HousesType>) => {
    return streets.map( el => el.address.street.title)
};

export const createMessages = (message: Array<HousesType>) => {
    return message.map( el => (`Hello guys for ${el.address.street.title}`) )
}