import { environment } from "../../environments/environment";
import { User } from "../../models/user";
import { AxiosConfig } from "../ApiServiceConfig";
import { AppService } from "../AppService";
import { LocalStorageService } from "./LocalStorageService";

export class AuthService extends AppService {

  localStorageService = new LocalStorageService()

  constructor() {
    super('users')
  }

  public async authenticate(o: User) {
    
    let service = await AxiosConfig.post<User>(this.url + '/authenticate', o)

    this.loggedIn(service.data)

    return service;
    
  }

  private loggedIn(data: User){
    
    switch (parseInt(data.status)) {
      case 200:
        this.localStorageService.initSession(data);
        window.open('./', '_self')
        break;
      default:
        break;
    }
  }

  public async verifyToken(o: User) {

    let service = await AxiosConfig.post(this.url + '/verify_token', o);

    return service;
  }

  signOut() {
    return this.localStorageService.removeSession()
  }

  userData(o: {}) {
    return AxiosConfig.post(environment.serverAddress + 'users/my_datas', o)

  }

  studentSignUp(o: {}) {
    return AxiosConfig.post(environment.serverAddress + 'student_accounts', o)
  }

  teacherSignUp(o: {}) {
    return AxiosConfig.post(environment.serverAddress + 'teacher_accounts', o)
  }

  educatorSignUp(o: {}) {
    return AxiosConfig.post(environment.serverAddress + 'educators', o)
  }
  /*
    service.subscribe(
      {
        next: ((e) => {
          if (e == o.token)
            this.localStorageService.updateSession(e)
          else
            this.localStorageService.removeSession()
        }),
        error: () =>
          this.localStorageService.removeSession()

      })

    return service;
  }

  

  */
  
}
