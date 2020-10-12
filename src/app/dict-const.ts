export interface AccountType{
    id: number,
    img: string,
    hint: string
}

export interface TankType{
    id: number,
    img: string,
    name: string,
}

export interface AccList{
    acc_id: number,
    tank_id: number
}

export const ACCOUNTTYPES: AccountType[] = [
    {id: 0, img:'../../assets/img/acc-types/home-loan.png', hint: 'Home loan' },
    {id: 1, img:'../../assets/img/acc-types/mortgage.png', hint: 'Mortgage' },
    {id: 2, img:'../../assets/img/acc-types/car-loan.png', hint: 'Car loan' },
    {id: 3, img:'../../assets/img/acc-types/personal-loan.png', hint: 'Personal credit' },
]

export const TANKTYPES: TankType[] = [
    {id: 0, img: '../../assets/img/tank-types/property-tank.png', name: 'Property Tank'},
    {id: 1, img: '../../assets/img/tank-types/property-tank.png', name: 'Work Tank'},
    {id: 2, img: '../../assets/img/tank-types/work-tank.png', name: 'Work Tank'},
]