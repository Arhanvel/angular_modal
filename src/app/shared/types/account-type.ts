export class AccountType{
    id: number;
    img: string;
    hint: string;

    constructor(id: number, img: string, hint: string){
        this.id = id;
        this.img = img;
        this.hint = hint;
    }
}

export const ACCOUNTTYPES: AccountType[] = [
    new AccountType(0, '../../assets/img/acc-types/home-loan.png', 'Home loan'),
    new AccountType(1, '../../assets/img/acc-types/mortgage.png', 'Mortgage'),
    new AccountType(2, '../../assets/img/acc-types/car-loan.png', 'Car loan'),
    new AccountType(3, '../../assets/img/acc-types/personal-loan.png', 'Personal credit'),
];
