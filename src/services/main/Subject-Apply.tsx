import { AppService } from "../../environments/services";
import { AxiosConfig } from "../ApiServiceConfig";

export class SubjectApplyService extends AppService {
    constructor(){
        super("applications/subject_applys")
    }    

    public async allActive(){
        return await AxiosConfig.get(this.url+"/active")
    }
}