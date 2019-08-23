import sizes from "./Sizes";
import bg from "./bg.svg";
export default {
  root: {
    backgroundColor: "#f4f4f4",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: "Roboto",
    /* Background By SVGBackgrounds.com */
    backgroundColor: "#6ee0ff",
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
    backgroundSize: "cover"
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",

    "& h1": {
      fontWeight: "300",
      fontSize: "2rem"
    },
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  }
};
