export type CityType = {
    title: string
    houses: Array<HousesType>
    govermentBuilding: Array<GovermentType>
    citizensNumber: number
    }

    export type GovermentType = {
        type: 'HOSPITAL' | 'FIRE-STATION'
        budget: number
        staffCount: number
        address: AddressType
    }


export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}