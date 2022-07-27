import { environment } from "../../environments/environment";
import { AxiosConfig } from "../ApiServiceConfig";
import { AppService } from "../AppService";
import { IService } from "../ServiceInterface";

export class ImagesService extends AppService implements IService<any>{

  constructor() {
    super('main/images')
  }

  public async all(query?: any) {
    throw new Error("Not implemented");
    
  }

  public async update(o: any) {
    return await AxiosConfig.patch(this.url, o)
  }

  public async create(o: any) {
    throw new Error("Not implemented");
  }

  public async delete(o: any) {
    return await this.deleteOne(o);
  }

  public one(id: any) {

    if (id)
      return environment.serverAddress + this.url + '/' + id

    return ''
  }
}
