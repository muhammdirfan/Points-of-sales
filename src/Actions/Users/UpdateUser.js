import React from "react";

const UpdateUser = (payload) => {
  return {
    type: "update_user",
    payload,
  };
};
export default UpdateUser;
