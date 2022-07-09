import axios from "axios";
import { environment } from "../environments/environment";

export const AxiosConfig = axios.create({
    baseURL: environment.serverAddress
})