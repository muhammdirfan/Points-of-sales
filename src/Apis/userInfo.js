import api_url from './api_url';
import axios from 'axios';


class userInfo {

    async addUserInfo(userData, props){
        try {
            await axios.post(api_url + "addStudents", 
            userData,
            {
                headers: {"Content-Type": "application/json"},
            }) 
                .then((response) => {
                    console.log(response);
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default userInfo;