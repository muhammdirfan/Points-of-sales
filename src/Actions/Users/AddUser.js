import React from "react";

const AddUser = (payload) => {
  return {
    type: "add_user",
    payload,
  };
};
export default AddUser;
