import {AppService} from '../../environments/services';
import { AxiosConfig } from '../ApiServiceConfig';

export class CourseService extends AppService{
    constructor(){
        super('main/courses')
    }    

    public async oneByAreaId(areaId: string){
        return await AxiosConfig.get(`${this.url}/area/${areaId}`);
    }
}