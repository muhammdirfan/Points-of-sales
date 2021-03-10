import React from "react";

const DeleteUser = (payload) => {
  return {
    type: "delete_user",
    payload,
  };
};
export default DeleteUser;
