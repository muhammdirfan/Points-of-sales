import React from "react";

const GetUser = (payload) => {
  return {
    type: "get_user",
    payload,
  };
};
export default GetUser;
