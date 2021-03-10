const styles = {
  MainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
    height: "100%",
    textAlign: "center",
  },
  FormContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-evenly",
  },
  MutedLink: {
    fontSize: "12px",
    color: "rgba(200, 200, 200, 0.8)",
    fontWeight: "500",
    textDecoration: "none",
  },
  BoldLink: {
    fontSize: "12px",
    color: "#20a8d8",
    fontWeight: "500",
    textDecoration: "none",
  },
  Input: {
    fontSize: "12px",
    height: "50px",
    color: "#20a8d8",
    fontWeight: "500",
    textDecoration: "none",
    border: "2px solid rgba(200, 200, 200, 0.1)",
    padding: "0 20px",
    borderBottom: "2px solid transparent",
    transition: "all, 240ms ease-in-out ",
    background: "#00000005",
  },
  SubmitButton: {
    width: "100%",
    padding: "11px 40%",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    borderRadius: "100px",
    transition: "all, 240ms ease-in-out",
    background: "#20a8d8",
  },

  acBox: {
    height: "97vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  BoxContainer: {
    width: "450px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "19px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px -4px",
    position: "relative",
    overflow: "hidden",
  },
  TopContainer: {
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "0 1.8em",
  },
  BackDrop: {
    width: "160%",
    height: "550px",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    transform: "rotate(157deg)",
    top: "-296px",
    left: "-130px",
    borderRadius: "50%",
    background: "#20a8d8",
  },
  HeaderContainer: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "5em",
    color: "#fff",
    zIndex: "10",
  },
  HeaderText: {
    fontSize: "30px",
    fontWeight: "600",
    lineHeight: "1.24",
    margin: "0px",
  },
  HeaderPara: {
    fontWeight: "500",
    fontSize: "16px",
    margin: "0",
    marginTop: "7px",
  },
  InnerContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "1em 1.8em 2em",
    height: "40vh",
  },
};
export default styles;
