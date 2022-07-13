import { AppService } from "../../environments/services";

export class TownService extends AppService{
    constructor (){
        super('main/towns');
    }
}