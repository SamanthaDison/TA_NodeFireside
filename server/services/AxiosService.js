
import axios from "axios"
export const api = axios.create({
    baseURL: "",
    timeout: 10000
})

class AxiosService {

}

export const axiosService = new AxiosService()