export class TankType{
    id: number;
    img: string;
    name: string;
    constructor(id: number, img: string, name: string){
        this.id = id;
        this.img = img;
        this.name = name;
    }
}

export const TANKTYPES: TankType[] = [
    new TankType(0, '../../assets/img/tank-types/property-tank.png', 'Property Tank'),
    new TankType(1, '../../assets/img/tank-types/property-tank.png', 'Work Tank'),
    new TankType(2, '../../assets/img/tank-types/work-tank.png', 'Work Tank'),
];
