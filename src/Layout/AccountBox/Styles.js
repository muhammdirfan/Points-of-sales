const styles = {
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