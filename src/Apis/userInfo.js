import {api_url, api_hotel_url} from "./api_url";
import axios from "axios";

class userInfo {
  async addUserInfo(userData) {
    const userdatas = await axios.post(api_url + "/auth", userData, {
      headers: { "Content-Type": "application/json" },
    });

    return userdatas.data;
  }

  async getUserLogin(email, password, status, props) {
    const url =
    api_url +
      "/userLogin?email=" +
      email +
      "&password=" +
      password +
      "&status=" +
      status;

      
      return await axios
      .get(url)
      .then((userdata) => {
        console.log(userdata, "userdata")
        // If request is good...
        const results = userdata.data.status;
        let username = userdata.data.message.name;
        localStorage.setItem('uname', username);

        let email = userdata.data.message.email;
        localStorage.setItem('email', email);

        if (results === "success") {
          props.GetUser(userdata.data.message);
          return userdata.data.message.status;
        } else {
          props.GetUser([]);
          return null;
        }
      })
      .catch((error) => {
        console.log(error, "error dfjasdfjasdhj");
        localStorage.setItem("loginerror", error);
      });
  }

  // async roomReservation(roomData) {
  //    const roomResult = await axios.post(api_hotel_url + "/roomReservation", roomData, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     return roomResult;
  //     .then((room) =>{
  //       console.log(room.data, "room");
  //     })
  // }

  // async roomType (roomType) {
  //   await axios.post(api_hotel_url + "roomType", roomType, {
  //     headers: { "Content-Type": "application/json" },
  //   })
  //   .then((res) => {
  //     console.log(res, "res");
  //   })
  // }
}

export default userInfo;
