import { useNavigate } from "react-router-dom";
import { UserModel } from "../../environments/models";


export class LocalStorageService {

  STORAGE_KEY = 'local_inscpil';

  constructor() {
  }


  public initSession(user: UserModel) {

    const current_user = user;

    this.removeSession();

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(current_user));
  }

  public updateSessionProfile(user: any) {

    const current_user = user;

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(current_user));

  }

  public updateSession(token: any) {

    let user = this.getSession();

    user.token = token;

    this.initSession(user)
  }

  public getSession() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) + "");
  }

  public removeSession() {

    localStorage.clear()

    window.location.href = '/'

    window.location.reload()

  }

  public typeAccoutSession(typeAccountId: any) {

    let user = this.getSession();

    user.authAccount = typeAccountId;

    this.initSession(user)

  }

}



