import { AxiosConfig } from "./ApiServiceConfig"

export class AppService {

  protected url: any;

  protected headers = {
    'headers': {
      'Content-Type': 'multipart/form-data'
    }
  }

  constructor (url: string) {

    this.url = url;
  }

  public async createOne(o: {}) {
    return await AxiosConfig.post(this.url, o)
  }

  public async getAll() {
    return await AxiosConfig.get(this.url)
  }

  public async getOne(id: any) {
    return await AxiosConfig.get(this.url+"/"+id)
  }

  public async updateOne(o: any, id: '') {
    return await AxiosConfig.patch(this.url+"/"+id, o)
  }

  public async deleteOne(o: any) {
    return await AxiosConfig.delete(this.url+'/'+o)
  }

}

