

const data = [
    {
        id: "1",
        name:"Muhammad",
        email:"irfan@gmail.com",
        reg_no:23,
        cellno:"465726457",
        gender:"male",
        address:"New York",
        class_name:"8th",
    },
    {
        id: "2",
        name:"Fahim",
        email:"fahim@gmail.com",
        reg_no:43,
        cellno:"465726457",
        gender:"male",
        address:"Gilgit",
        class_name:"7th",
    },
    {
        id: "3",
        name:"Jhon",
        email:"jhon@gmail.com",
        reg_no:28,
        cellno:"465726457",
        gender:"male",
        address:"New York",
        class_name:"8th",
    }
];

const useReducer = (state = [], action) => {
  const { type, payload } = action;
  if (action.type === "add_user") {
    return {
      ...state,
      payload,
    };
  } else if (action.type === "get_user") {
    console.log(payload, "payload");
    return {
      ...state,
      getuserdata: payload,
    };
  }

  return state;
};

export default useReducer;
