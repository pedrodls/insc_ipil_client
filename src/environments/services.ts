import { AuthService } from './../services/main/AuthService';
import { AppService } from "../services/AppService"; //main service

//Services With Models
import { AreaService} from "../services/main/AreaService";
import { TownService } from "../services/main/TownService";
import { CourseService } from '../services/main/CourseService';
import { LocalStorageService } from '../services/main/LocalStorageService';
import { TypeAccountService } from './../services/main/TypeAccountService';

export {AppService};
export {AreaService, TownService, CourseService, LocalStorageService, TypeAccountService, AuthService};