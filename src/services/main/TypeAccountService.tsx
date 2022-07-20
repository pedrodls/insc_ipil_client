import { AppService } from "../AppService";
import { IService } from "../ServiceInterface";

export class TypeAccountService extends AppService implements IService<any>{

    constructor(){
        super('/main/type_accounts')
    }
    
    public async one(id: any) {
      
      return await this.getOne(id);

    }

    public update(o: any, q?: any) {
        throw new Error("Method not implemented.");
    }
    
    public create(o: any) {
        throw new Error("Method not implemented.");
    }

    public async all(){
        return await this.getAll();
    }
}