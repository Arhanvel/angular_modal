export class BankAccount {
    active: boolean;
    id: number;
    name: string;
    accType: number;
    balance: number;
    tankType: number;

    constructor(active: boolean, id: number, name: string, accType: number, balance: number, tankType: number)
    {
        this.active = active;
        this.id = id;
        this.name = name;
        this.accType = accType;
        this.balance = balance;
        this.tankType = tankType;
    }
}

export class BankAccountFull extends BankAccount {
    accTypeImg?: string;
    accTypeHint?: string;
    tankTypeImg?: string;
    tankTypeName?: string;

    constructor(
        active: boolean,
        id: number,
        name: string,
        accType: number,
        balance: number,
        tankType: number,
        accTypeImg?: string,
        accTypeHint?: string,
        tankTypeImg?: string,
        tankTypeName?: string)
    {
        super(active, id, name, accType, balance, tankType);
        this.accTypeImg = accTypeImg;
        this.accTypeHint = accTypeHint;
        this.tankTypeImg = tankTypeImg;
        this.tankTypeName = tankTypeName;
    }
}
