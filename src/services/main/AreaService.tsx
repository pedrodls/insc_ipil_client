import { AppService } from "../../environments/services";

export class AreaService extends AppService{
    constructor(){
        super('main/areas')
    }
}