export interface AddressQuery {
    sigunguCode: number;
    roadNumberCode: number;
    mainNumber: number;
    subNumber: number;
}

export interface DetailAddress {

}

export interface GetAddressBody {
    address: Array<AddressQuery>
}

export interface SortQuery {
    sort: 'ASC' | 'DESC'
}
