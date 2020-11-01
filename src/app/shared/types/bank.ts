export class Bank {
    id: number;
    name: string;
    iconSm: string;
    iconBg: string;

    constructor(id: number, name: string, iconSm: string, iconBg: string) {
        this.id = id;
        this.name = name;
        this.iconSm = iconSm;
        this.iconBg = iconBg;
    }
}
