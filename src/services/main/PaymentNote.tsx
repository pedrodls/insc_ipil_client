import { AxiosConfig } from "../ApiServiceConfig";
import { AppService } from "../AppService";

export class PaymentNoteService extends AppService {

    constructor() {
        super('applications/payment_notes')
    }

    public async statusArea() {
        return await AxiosConfig.get(this.url + '/status/area')
    }
}