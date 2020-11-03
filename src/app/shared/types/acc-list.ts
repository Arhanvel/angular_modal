export class AccList{
    id?: number;
    accId: number;
    tankId: number;
    bankName: string;
    constructor(accId: number, tankId: number, bankName: string, id?: number){
        this.accId = accId;
        this.tankId = tankId;
        this.bankName = bankName;
    }
}
