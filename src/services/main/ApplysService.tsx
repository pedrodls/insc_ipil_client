import { AxiosConfig } from "../ApiServiceConfig";
import { AppService } from "../AppService";

export class ApplysService extends AppService {

    constructor() {
        super('applications/applys')
    }

    public async getApplys() {
        return await AxiosConfig.get(this.url + '/all')
    }
}