import axios from "axios";

export class ContactService {
    static serverURL="http://localhost:9000";

    static getALLContacts(){
        let dataUEL =`${this.serverURL}/ContactS`
        return axios.get(dataURL);
    }
}