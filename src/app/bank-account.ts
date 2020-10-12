export interface BankAccount {
    active: boolean,
    id: number,
    name: string,
    acc_type: number,
    balance: number,
    tank_type: number,
}

export interface BankAccountFull extends BankAccount {
    acc_type_img?: string,
    acc_type_hint?: string,
    tank_type_img?: string,
    tank_type_name?: string,
}
