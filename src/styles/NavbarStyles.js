import sizes from "./Sizes";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    height: "6vh",
    fontFamily: "Roboto",
    textTransform: "uppercase"
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    letterSpacing: "2px ",
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-handle, .rc-slider-handle:active,.rc-slider-handle:hover, .rc-slider-handle:focus": {
      background: "rgb(17, 112, 150)",
      outline: "none",
      border: "2px solid rgb(6, 86, 117)",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    [sizes.down("md")]: {
      width: "140px"
    }
  }
};
